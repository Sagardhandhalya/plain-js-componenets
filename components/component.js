function Li(text, cssclass) {
  return `<li class="${cssclass}">${text}</li>`;
}

function DynamicTable(row, col, data) {
  let result = `<tr> ${data[0].map((x) => `<th>${x}</th>`).join("")}</tr>`;

  for (let i = 1; i < row; i++) {
    result += `<tr> ${data[0].map((x) => `<td>${x}</td>`).join("")}</tr>`;
  }

  return result;
}

function TextInput(cssclass) {
  return `<input type="text" class=${cssclass}> `;
}

export { Li, DynamicTable, TextInput };
