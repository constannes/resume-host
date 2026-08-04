const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "Anne-Lorraine-Carreon-Resume.pdf",
  );

  const file = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Anne-Lorraine-Carreon-Resume.pdf",
  );

  res.status(200).send(file);
};
