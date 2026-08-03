const fs = require("fs");

module.exports = (req, res) => {
  const pdf = fs.readFileSync("./Sample-Resume.pdf");

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Sample-Resume.pdf",
  );

  res.setHeader("Content-Type", "application/pdf");

  res.end(pdf);
};
