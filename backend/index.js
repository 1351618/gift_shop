import express from "express";
import path from "path";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, "static")));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "static", "index.html"));
// });

// app.get("/futuris", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "static", "futuris.html"));
// });

// скачивание страницы
app.get("/dowenload", (req, res) => {
  res.download(path.resolve(__dirname, "static", "index.html"));
});

app.listen(PORT, () => {
  console.log(
    "\x1b[32m%s\x1b[0m\n",
    `Server is TRUE .....\nhttp://localhost:${PORT}/`
  );
});
