module.exports = {
    // [General]
    name: "IPBots", // Name of plugin REQUIRED
    author: "Andrews54757", // author REQUIRED
    description: 'Gives bots to a ip', // Desciprtion
    minVersion: '', // minimum version requirements (optional)
    version: '1.0.0', // version REQUIRED
    addToHelp: false, // add to help
    commands: false, // commands
    configFile: "config.ini", //config file
    chatCommands: {
        ipbots: function (str, main, player, log) {
            var data = main.IPbots.ipdata[player.socket.remoteAddress];
            if (!data) return log("You do not have any ipbots!");
            str = str.split(" ");
            if (str[1] == "toggle") {

                data.paused = !data.paused;
                if (data.paused) {
                    data.players.forEach(function (p) {
                        p.msg("Your ipbots have been toggled off! Do /ipbots toggle to turn them on!");
                        p.minions.forEach(function (m) {
                            main.removeMinion(m);
                        })
                    })

                } else {
                    data.players.forEach(function (p) {
                        p.msg("Your ipbots have been toggled on! Do /ipbots toggle to turn them off!");

                        main.addMinions(p, data.numBots);

                    })
                }
                return;
            }
            log("Time remaining: " + Math.floor((data.expiration - data.used) / 60) + " minutes")
        }
    },
    // [Functions]
    init: function (data, configs) {

        // init, Used to do stuff such as overriding things
        data.main.IPbots = {
            config: configs,
            online: new Map(),
            ipdata: {}
        };
        var id = 0;
        for (var i in configs) {
            var config = configs[i];
            if (!config.numBots || (!config.ip && i != "all")) continue;

            data.main.IPbots.ipdata[config.ip] = {
                numBots: config.numBots,
                expiration: config.expiration * 60,
                used: 0,
                players: new Map(),
                id: id++,
                paused: false
            }
            data.main.IPbots.id = id;
        }
        data.main.setInterval(function () {
            if (!data.main.paused) this.onSecond(data);
        }.bind(this), 1000)
    },
    onClientAdd: function (data) {
        var player = data.player;
        var main = data.main;

        var ip = player.socket.remoteAddress;
        if (!main.IPbots.ipdata[ip]) {
            if (!main.IPbots.ipdata["all"]) return;
            var all = main.IPbots.ipdata["all"];
            main.IPbots.ipdata[ip] = {
                id: main.IPbots++,
                numBots: all.numBots,
                expiration: all.expiration,
                used: 0,
                players: new Map(),
                paused: false
            }

        }
        var ipdata = main.IPbots.ipdata[ip];

        main.IPbots.online.set(ipdata.id, ipdata);
        ipdata.players.set(player.id, player);
        if (!ipdata.paused) main.addMinions(player, ipdata.numBots);
        var exp = (ipdata.expiration) ? "expire in " + Math.floor((ipdata.expiration - ipdata.used) / 60) + " minutes!" : "never expire!"
        player.msg("You have been given " + ipdata.numBots + " minions! They will " + exp + " Type /ipbots to see your remaining time. type /ipbots toggle, to stop/start using bots!");
        if (ipdata.paused) player.msg("Your ipbots have been paused! Do /ipbots toggle to turn them back on!")

    },
    onClientRemove: function (data) {
        var player = data.player;
        var main = data.main;
        var ip = player.socket.remoteAddress;
        if (!main.IPbots.ipdata[ip]) return;
        var dt = main.IPbots.ipdata[id];
        dt.players.delete(player.id);
        if (dt.players.size == 0) main.IPbots.online.delete(dt.id);

    },
    expire: function (dt, main) {
        dt.players.forEach(function (player) {
            player.msg("Your time is up! Your minions have expired");
            player.minions.forEach(function (m) {
                main.removeMinion(m);
            });
        })
        dt.players.clear();
        dt.expired = true;
        main.IPbots.online.delete(dt.id);
    },
    onSecond: function (data) {
        var main = data.main;
        data.main.IPbots.online.forEach(function (online) {
            ++online.used;
            if (online.used >= online.expiration && online.expiration && !online.paused) {
                this.expire(online, main);
            }
        }.bind(this))
    }
}
