import { NavBar, Table, Search } from "../views/view.js";

let data = ["sagar", "test", "test", "Sagar"];

let tab = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

NavBar("ul", data, "li-css");

Table("tab", tab);

const handleChange = (e) => {
  console.log(e);
};

Search("search", handleChange, "search-input");

Search("othebox", () => alert("you change !!"));
