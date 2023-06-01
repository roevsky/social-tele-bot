# social-tele-bot

Deploy **virtual souls** in _2 minutes_ via a Telegram interface.

... with typing indications.

![Typing Indications](https://github.com/roevsky/social-tele-bot/assets/135190550/215a5d45-0e52-47f4-bf2a-19a639edb70b)

... and logging of the Virtual Soul's thoughts.

![Samantha4xDemo](https://github.com/roevsky/social-tele-bot/assets/135190550/349bc582-2f2a-45de-9fbe-8cf06e51f4b1)

## Setup

### Step 1: Clone the Repo
```
git clone git@github.com:roevsky/social-tele-bot.git
cd social-tele-bot
```

### Step 2: Install

```
npm install
```

### Step 3: Get API Keys

1. From [OpenAI.](https://platform.openai.com/account/api-keys)
2. From [Telegram.](https://medium.com/geekculture/generate-telegram-token-for-bot-api-d26faf9bf064) - Talk to @BotFather on Telegram and create a bot, get the API key.

### Step 4: Set ENV Variables

```
cp env.sample .env
```

Edit the two variables in `.env`, to use your OpenAI API and Telegram bot API key you retrieved from Step 3.

e.g.
```
TELEGRAM_TOKEN=123456:aBcDeF_gHiJkLmNoP-q
OPENAI_API_KEY=sk-1242149218214:aBcDeF_gHiJkLmNoP-q
```

### Step 5: Run
```
npm run dev
```

### Step 6: Interact!

You should be able to interact with your Telegram bot directly on Telegram (@[NameOfYourBot]). You should be able to read the thoughts your SocialAI is generating in your Terminal window as well.

The main app is running through bot.ts and demos the use of the socialAGI library.

## Bonus: Changing Personalities

To add and experiment with your own personalities, you can modify your instance of the Library directly (search for `personality.js`). You will also have to update the type declarations in `personality.d.ts`.

## Credits
composed of [SocialAGI](https://github.com/opensouls/SocialAGI)
and using the [GrammY framework](https://grammy.dev)
