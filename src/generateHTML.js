const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

function mgrInfo(managerData) {
  return `<section>
  <li>Manager Name: ${managerData.managerInfo.name}</li>
  <li>ID:${managerData.managerInfo.id}</li>
  <li>Email:${managerData.managerInfo.email}</li>
  <li>Office #:${managerData.managerInfo.Officenumber}</li>
  </section>`;
}

function egrInfo(engineerData) {
  let egrDta = "";
  for (let i = 0; i < engineerData.length; i++) {
    egrDta += `<section>
  <li>Manager Name: ${engineerData[i].name}</li>
  <li>ID:${engineerData[i].id}</li>
  <li>Email:${engineerData[i].email}</li>
  <li>GitHub:${engineerData[i].github}</li>
  </section>`;
  }
  return egrDta;
}

function itrInfo(internData) {
  let itrData = "";
  for (let i = 0; i < internData.length; i++) {
    itrData += `<section>
  <li>Name: ${internData[i].name}</li>
  <li>ID:${internData[i].id}</li>
  <li>Email:${internData[i].email}</li>
  <li>School:${internData[i].school}</li>
  </section>`;
  }
  return itrData;
}

function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      
  </head>
  
  <body>
    <div>
      <ul>
          <h1> 
          <li> Team Profile </li>
          </h1>
  
  
  ${mgrInfo(data)}
  
  
  ${egrInfo(data.engineerInfo)}
  
  
  ${itrInfo(data.internInfo)}
  
       </ul>
     </div>
     <script src="./index.js"></script>
  </body>
  
  </html>`;
}

module.exports = generateHTML;
