import { Li, DynamicTable, TextInput } from "../components/component.js";

const NavBar = (selector, data, cssclass) => {
  data = data.map((item) => Li(item, cssclass));
  let result = data.join("");

  document.getElementById(selector).innerHTML = result;
};

const Table = (selector, data) => {
  const template = DynamicTable(data.length, data[0].length, data);
  document.getElementById(selector).innerHTML = template;
};

const Search = (selector, clickcb, cssclass) => {
  const template = TextInput(cssclass);
  const input = document.getElementById(selector);
  input.innerHTML = template;
  input.addEventListener("change", clickcb);
};

export { NavBar, Table, Search };
