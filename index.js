const express = require("express");
const app = express();
const port = 3000;
const records = require("./constants.js");

app.get("/records/:genre", (req, res) => {
  const genre = req.params.genre;
  const { year } = req.query;
  const filteredByGenreRecords = records.filter(
    (record) => record.genre === genre
  );
  const filteredByYearRecords = year
    ? filteredByGenreRecords.filter((record) => record.year === Number(year))
    : filteredByGenreRecords;
    
  res.send(filteredByYearRecords);
});

app.get("/records", (req, res) => {
  const { year } = req.query;
  console.log({ year });
  const filteredRecords = year
    ? records.filter((record) => record.year === Number(year))
    : records;
  res.send(filteredRecords);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
