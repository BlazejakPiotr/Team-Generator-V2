let users = [];
let namesArr = ["Alpha", "Bravo", "Charlie", "Delta"];
let teamsArr = [];
let teamObj = {
  name: "",
  users: [],
};

function createUser() {
  let username = document.getElementById("user-input").value;
  users.push(username);
  addToWaitingList(username);
}

function addToWaitingList(user) {
  console.log(user);
  let ul = document.getElementById("wait-room");
  ul.innerHTML += `
              <li class="list-group-item">
                 <div> ${user}</div> <div><button onclick="assignUser(${user})" class="shuffle"><i class="fas fa-random"></i></button> <i class="fas fa-trash"></i></div>
              </li>`;
}

function createTeams() {
  let teamsNum = document.getElementById("num-input").value;
  let teamsContainer = document.querySelectorAll(".teams-container")[0];

  for (let i = 0; i < teamsNum; i++) {
    // creating team object
    let newTeam = Object.create(teamObj);
    newTeam.name = namesArr[i];
    teamsArr.push(newTeam);

    // creating DOM element
    let teamDiv = document.createElement("div");
    teamDiv.classList.add("card");

    let teamHeader = document.createElement("div");
    teamHeader.classList.add("card-header");
    teamHeader.innerText = `Team ${newTeam.name}`;
    teamDiv.appendChild(teamHeader);
    let teamUl = document.createElement("ul");
    teamUl.classList.add("list-group", "list-group-flush");
    teamUl.setAttribute("id", newTeam.name);
    teamDiv.appendChild(teamUl);
    teamsContainer.appendChild(teamDiv);
  }
}

function assignUser(user) {
  console.log(user);
  //   let shuffle = document.querySelector(".shuffle");
  //   teamsArr[Math.floor(Math.random() * teamsArr.length)].users = [user];
  //   console.log("assigning to teamArr");
  //   shuffle.parentNode.parentNode.remove();
  //   console.log("removing position from waiting list");
}
