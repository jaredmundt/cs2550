function parseScores(scoresString) {
  return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
  let grades = [0, 0, 0, 0, 0];
  for (s of scoresArray) {
    if (s >= 90) grades[0] += 1;
    else if (s >= 80) {
      grades[1] += 1;
    } else if (s >= 70) {
      grades[2] += 1;
    } else if (s >= 60) {
      grades[3] += 1;
    } else {
      grades[4] += 1;
    }
  }
  return grades;
}

function setTableContent(userInput) {
  let scoresArray = parseScores(userInput);
  let grades = buildDistributionArray(scoresArray);
  document.getElementById("firstRow").innerHTML = `
   <td><div style="height:${grades[0]}0px" class="bar0"></div></td>
   <td><div style="height:${grades[1]}0px" class="bar1"></div></td>
   <td><div style="height:${grades[2]}0px" class="bar2"></div></td>
   <td><div style="height:${grades[3]}0px"  class="bar3"></div></td>
   <td><div style="height:${grades[4]}0px" class="bar4"></div></td>`;

  let thrid = document.getElementById("thirdRow");
  for (s of grades) {
    let td = document.createElement("td");
    td.textContent = s;

    thrid.appendChild(td);
  }
}

// The argument can be changed for testing purposes
table = setTableContent("45 78 98 83 86 99 90 59");
