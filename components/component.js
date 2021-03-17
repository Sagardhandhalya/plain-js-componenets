function Li(text,cssclass) {
  return `<li class="${cssclass}">${text}</li>`;
}

function DynamicTable(row, col, data) {
  let result = `<tr>`;
  for (let i = 0; i < col; i++) {
    result += `<th>${data[0][i]}</th>`;
  }
  result += "</tr>";

  for (let i = 1; i < row; i++) {
    result += "<tr>";
    for (let i = 0; i < col; i++) {
      result += `<td>${data[0][i]}</td>`;
    }

    result += "</tr>";
  }

  return result;
}

function TextInput(cssclass) {
  return `<input type="text" class=${cssclass}> `;
}

export { Li, DynamicTable, TextInput };
