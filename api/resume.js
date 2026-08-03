const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const filePath = path.join(process.cwd(), "public", "Sample-Resume.pdf");

  const file = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Sample-Resume.pdf",
  );

  res.status(200).send(file);
};
