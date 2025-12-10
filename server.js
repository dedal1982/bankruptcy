require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit-form", async (req, res) => {
  // console.log("Данные из формы:", req.body);
  const body = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  if (body.name && body.tel) {
    const { name, tel } = body;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Новое сообщение с сайта bankrotexpertbs.ru",
      text: `Имя: ${name}\nТелефон: ${tel}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      // console.log("Email sent: %s", info.messageId);
      res.json({ message: "Ваше сообщение отправлено!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ошибка при отправке письма" });
    }
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
