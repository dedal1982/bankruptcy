const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // или любой другой порт по вашему желанию

// Обслуживание статических файлов из текущей директории
app.use(express.static(path.join(__dirname)));

// Обработка корневого пути
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
