document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/api/images");
    const images = await response.json();

    if (!Array.isArray(images) || images.length === 0) return;

    const avatar = document.getElementById("avatar");
    avatar.src = `img/${images[0]}`;

    const gallery = document.getElementById("gallery");
    images.slice(1).forEach((file) => {
      const img = document.createElement("img");
      img.src = `img/${file}`;
      img.loading = "lazy";
      gallery.appendChild(img);
    });
  } catch (e) {
    console.error("Cannot load images:", e);
  }
});
