const express = require("express");
const app = express();

//Creating a port
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
   res.send("Hello From Server");
});

app.listen(port, () => {
   console.log("listening from port: ", port);
});
