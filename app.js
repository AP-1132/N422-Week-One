const express = require("express");

// initializes the server
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    name: "pokemon",
    type: "yellow",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// control + c to stop your server
