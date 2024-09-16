const express = require("express");
const sharp = require("sharp");

const app = express();
const PORT = 4200;

app.get("/:width/:height/:color?", (req, res) => {
  const { width, height, color } = req.params;

  const svgImage = `
        <svg width="${width}" height="${height}" style="font-family: Arial;">
            <rect width="100%" height="100%" fill="${color ?? "#F1F1F1"}"/>
            <text x="50%" y="50%" font-size="30" text-anchor="middle" fill="#000000">${width}&#215;${height}</text>
        </svg>
    `;

  const image = Buffer.from(svgImage);

  sharp(image)
    .png()
    .toBuffer()
    .then((data) => {
      res.set("Content-Type", "image/webp");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Error creating image: " + err.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
