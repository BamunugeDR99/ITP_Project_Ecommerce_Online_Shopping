module.exports = (objarr) => {
  let name2 = "sonal jayawardana";
  let content = "";
  for (let i = 0; i < objarr.length; i++) {
    content +=
      "<h2>" +
      objarr[i].name +
      "</h2>" +
      "<h2>" +
      objarr[i].age +
      "</h2>" +
      "<h2>" +
      objarr[i].address +
      "</h2>";
  }

  



  return `
    
    <html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Sonal Jayawardana</h1>
    <h2>${name2}</h2>
 
    <table>
    <tr>

    <th>Name</th>
    </tr>
    ${content}
    </table>
</body>
</html>
    `;
};
