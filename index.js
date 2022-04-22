const express = require("express");
const app = express();

//Creating a port
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
   res.send("Hello From  Server");
});

//Users data
const users = [
   { id: 1, name: "Touhid", email: "touhid@gmail.com", gender: "male" },
   { id: 2, name: "Naima", email: "naima@gmail.com", gender: "female" },
   { id: 3, name: "Topu", email: "topu@gmail.com", gender: "male" },
   { id: 4, name: "Muna", email: "muna@gmail.com", gender: "female" },
   { id: 5, name: "Bappy", email: "bappy@gmail.com", gender: "male" },
   { id: 6, name: "Mayeda", email: "mayeda@gmail.com", gender: "female" },
   { id: 7, name: "Nayeem", email: "nayeem@gmail.com", gender: "male" },
   { id: 8, name: "Rishan", email: "rishan@gmail.com", gender: "male" },
];

//Find user using id
app.get("/user/:id", (req, res) => {
   const userId = parseInt(req.params.id);
   const user = users.find((user) => user.id === userId);
   //console.log(user)
   res.send(user);
});

//Search users using name Search Queries
app.get("/users", (req, res) => {
   if (req.query.name) {
      const search = req.query.name.toLowerCase();
      const searchResults = users.filter((user) =>
         user.name.toLowerCase().includes(search)
      );
      //console.log(searchResults)
      res.send(searchResults);
   } else {
      res.send(users);
   }
});

//For serving
app.listen(port, () => {
   console.log("listening from port: ", port);
});