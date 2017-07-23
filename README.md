# reactbot

A Discord Bot for automated phrase reactions and similar reaction antics.

## Usage

1. Invite the bot to as many servers as you wish.
1. The bot will react to every message sent with an emoji or set of emojis set by you.
1. (anyone can) Change that emoji set using `;sete [a string of emojis with spaces in between]`.
1. (those who have been whitelisted can) use `;kille` to stop all reactions until the bot is restarted.

## Installation

1. Download and extract the code.
1. Run `npm install` inside the folder to install the required dependencies.
1. Install pm2 with `npm install -g pm2`.
1. Start the process with `pm2 start index.js --name="react"`.
1. [See the pm2 wiki](https://github.com/Unitech/pm2#commands-overview) for info on managing the bot. Key ones include:
```
pm2 restart react
pm2 logs react
pm2 stop react
pm2 status
```

## Known Problems

- The sete command is not well set up, a lot of slight things will cause crashes (thus pm2).
- Custom emojis are not supported yet.
- The default emoji can only by one emoji, not a set.
- The bot will react with the same emojis on all servers at once--no separate sets.
[Found your own?](https://github.com/hingobway/reactbot/issues/new)
