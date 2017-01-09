# Ipbots
Adds a ip-based botting system. 

## Usage
In order to use, you must edit IPBots.ini in source/settings/pluginConfig/ (generated on startup). The file will look like this:

```
// pversion=1.0.0; NOTE: DO NOT TOUCH!
// Header. Use [all] = all ips
// NumBots: Number of bots
// expiration: time of minion expiration
// ip: Ip to give to
// message: Message to display

[1]
numBots = 10
expiration = 10 
ip = "127.0.0.1"

[2]
numBots = 10
expiration = 10
ip = "localhost"

[all]
numBots = 4
expiration = 5
message = "These are bot freebees! Will expire for your ip in 5 minutes"
```

What this does, is the following:

1. If anyone with an ip of 127.0.0.1 joins, it will give them 10 bots that expires in 10 minutes. 
2. Same with anyone with localhost as their ip
3. the third block is applied to everyone because of it's [all] header. Also, instead of the default message, a custom message will be sent to the client.


Also note that not setting expiration will mean it will never expire for the ip
## Terms

1. You may not sell this program
2. You may use this on your server to sell bots to people
3. You may not take credit
