// var currStore = require("./DB.json");
// var myObj = JSON.parse(initialState);

// console.log(initialState.numOfUsers);

// initialState.users[initialState.users.length] = {
//   uid: ++initialState.numOfUsers,
//   username: "username",
//   email: "email",
//   password: "password",
//   tasks: [],
// };

// console.log(initialState);

// const emailfinder = (email, password) => {
//   let emailarr = [],
//     passwordarr = [];
//   for (i of initialState.users) emailarr.push(i.email);
//   for (i of initialState.users) passwordarr.push(i.password);
//   // console.log(emailarr);
//   if (emailarr.includes(email)) {
//     index = emailarr.indexOf(email);
//     if (password === passwordarr[index]) {
//       console.log(index);
//       return 1;
//     }
//   }
//   return 0;
// };

// if (emailfinder("dasharshdwip@gmail.com", "harsh")) console.log("Found!");
// else {
//   console.log("Not found");
// }

// const getCurrentWeek = () => {
//   let currDate = new Date();
//   let first = currDate.getDate() - currDate.getDay() + 1;
//   let last = first + 6;
//   //   console.log(
//   //     "First:",
//   (first = new Date(currDate.setDate(first))),
//     //     "Last:",
//     (last = new Date(currDate.setDate(last)));
//   //   );
//   var year = currDate.getFullYear();
//   var month = currDate.getMonth() + 1;
//   var date = new Date(year, month, 1),
//     days = [];
//   while (date.getMonth() === month) {
//     days.push(new Date(date).toUTCString());
//     date.setDate(date.getDate() + 1);
//   }

//   console.log(days);
//   console.log("First:", first.toUTCString(), "Last:", last.toUTCString());
// };

// getCurrentWeek();

// const getCurrentMonthStats = () => {
// let currStore = {
//   uid: 1,
//   username: "Gyandwip Das",
//   email: "dasgyandwip@gmail.com",
//   password: "gyandwip",
//   tasks: [
//     {
//       tid: 1,
//       task: "meditate",
//       date: "29-6-2022",
//       status: "complete",
//     },
//     {
//       tid: 2,
//       task: "workout",
//       date: "29-6-2022",
//       status: "incomplete",
//     },
//   ],
// };

// let date = new Date();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// let days = new Date(year, month, 0).getDate();
// console.log(month, " ", year, " ", days);
//   };
// let tdate = [],
//   datematch = /-./;
// currStore.tasks.map((e) => tdate.push(e.date.match(datematch)));
// console.log(tdate);
// while(currStore.tasks.date)

console.log(new Date());

let temp = new Date("7-4-2022");
console.log(temp.toString());
