require("dotenv").config();

const { Telegraf } = require("telegraf");
const User = require("../model/User");

const TOKEN = process.env.BOT_TOKEN;
const URL = process.env.URL;

const bot = new Telegraf(TOKEN);

bot.telegram.setWebhook(`${URL}/bot${TOKEN}`);

bot.on("message", async (update) => {
  const msg = update.message.text;
  const uid = update.from.id;
  const name = `${update.from.first_name || ''} ${update.from.last_name || ''}`;
  const username = update.from.username || ''; // the || '' is check if the main value was empty replace it with empty space
  const lang = update.from.language_code || '';

  // save user info to db
  const user = await User.findOne({
    where: {
      uid: uid,
    },
  });
  if (user === null) {
    await User.create({
      uid: uid,
      name: name,
      username: username,
      mobile: "",
      lang: lang,
    });
  }
  await update.reply("Hey!\nwill be there soon :)");
});

const botController = {
  botUpdate: async (req, res) => {
    bot.handleUpdate(req.body, res);
    res.status(200).send();
  },
};

module.exports = botController;
