import { Bot } from "grammy";
import { Soul, Personalities } from "socialagi";

// Map to store user IDs and corresponding Souls
const soulsMap: Map<number, Soul> = new Map();

// Function to create a new Soul
function createSoul(userId: number) {
  const soul = new Soul(Personalities.Samantha);
  const name = soul.personality.name;

  soul.on("says", (text : string) => {
    console.log(`\n${name} says: `, text);
    bot.api.sendMessage(userId, text);  // Send the Soul's message back to the user
  });

  soul.on("thinks", (text : string) => {
    console.log(`\n${name} thinks: `, text, "\n");
    // bot.api.sendMessage(userId, `\n<pre>[Thought] ${text}</pre>`, { parse_mode: "HTML" }); // Send Soul's thoughts back to the user
  });

  // Add the new Soul to the map
  soulsMap.set(userId, soul);
  return soul;
}

// Create a bot using the Telegram token
const bot = new Bot(process.env.TELEGRAM_TOKEN || "");

bot.command('start', (ctx) => {
  // Get the user's ID
  const userId = ctx.from?.id;
  if (!userId) {
    return;
  }

  // Get the user's Soul, or create a new one if it doesn't exist
  let soul = soulsMap.get(userId);
  if (!soul) {
    soul = createSoul(userId);
  }

  // Pass the "Hello!" message to the Soul
  soul.tell(`Hello there!`);
});


bot.on("message", async (ctx) => {
  // Get the user's ID and message text
  const userId = ctx.from?.id;
  const isBot = ctx.from?.is_bot;
  const text = ctx.message?.text;

  if (!userId || !text || isBot) {
    return;
  }

  // Log the user's ID and message text
  console.log(`Received message from user: ${text}`);

  // Get the user's Soul, or create a new one if it doesn't exist
  let soul = soulsMap.get(userId);
  if (!soul) {
    soul = createSoul(userId);
    console.log("Created a new soul for the user!")
  }
  
    // Start typing action
    await ctx.api.sendChatAction(ctx.chat.id, 'typing');

    // Pass the user's message to the Soul
    soul.tell(text);
  });
  
  bot.start();