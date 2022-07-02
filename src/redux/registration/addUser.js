const fs = require("fs");
// const DB = require("../../components/DB.json");
const path = require("path");

var data = fs.readFileSync("../../components/DB.json");
// console.log(data);
var myObj = JSON.parse(data);
console.log(myObj);
// myObj["users"].push({ teamId: "4", status: "pending" });
// console.log(myObj);
// data = JSON.stringify(myObj);

const addUser = (username, email, password) => {
  var userObj = {
    uid: ++myObj["numOfUsers"],
    username: username,
    email: email,
    password: password,
    tasks: [],
  };
  myObj["users"].push(userObj);
  fs.writeFileSync("../../components/DB.json", JSON.stringify(myObj));
  console.log(JSON.stringify(myObj));
};

// addUser("darryl", "darryl@gmail.com", "dar");

export default addUser;
