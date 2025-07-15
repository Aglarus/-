import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// ► 1. Статика (HTML, CSS, JS)
app.use(express.static("public"));

// ► 2. API: список файлов в /img
app.get("/api/images", (_req, res) => {
  const dirPath = path.join(process.cwd(), "img");
  fs.readdir(dirPath, (err, files) => {
    if (err) return res.status(500).json({ error: "Cannot read img folder" });
    // Оставляем только картинки
    const images = files.filter((f) => /\.(png|jpe?g|gif|webp)$/i.test(f));
    res.json(images);
  });
});

app.listen(PORT, () =>
  console.log(`🚀 Server ready → http://localhost:${PORT}`)
);
