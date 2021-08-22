let freeAgents = [];
let namesArr = ["Alpha", "Bravo", "Charlie", "Delta"];
let teamsArr = [];
let teamObj = {
  name: "",
  users: [],
};

const waitList = document.getElementById("wait-room");

function createUser() {
  let username = document.getElementById("user-input").value;
  freeAgents.push(username);
  addToWaitingList(username);
}

function addToWaitingList(user) {
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML += `
 <div>${user}</div> 
 <div><button onclick="assignUser(this.parentNode.parentNode, '${user}')"><i class="fas fa-random"></i></button> 
 <button onclick="removeFreeAgent(this.parentNode.parentNode, '${user}')"><i class="fas fa-trash"></i></button></div>
              `;
  waitList.appendChild(li);
}

function createTeams() {
  let teamsNum = document.getElementById("num-input").value;
  let teamsContainer = document.querySelectorAll(".teams-container")[0];

  for (let i = 0; i < teamsNum; i++) {
    // creating team object
    let newTeam = Object.create(teamObj);
    newTeam.name = namesArr[i];
    newTeam.users = [];
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
  if (document.querySelector(".assign-all") === null) {
    let rightcol = document.querySelector(".col-md-8");
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "assignAll()");
    btn.classList.add("btn-primary", "assign-all");
    btn.innerText = "Assign All";
    rightcol.appendChild(btn);
  }
}

let randomTeamIndex = Math.floor(Math.random() * teamsArr.length);

function assignUser(node, user) {
  if (teamsArr[0].users !== undefined) {
    teamsArr[randomTeamIndex].users.push(user);
    let currentTeam = document.getElementById(teamsArr[randomTeamIndex].name);
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = user;
    currentTeam.appendChild(li);
    removeFreeAgent(node, user);
  } else {
    alert("Error! Select number of teams");
  }
}

function assignAll() {}

// Clearing list node and array
function removeFreeAgent(node, user) {
  node.remove();
  let i = freeAgents.indexOf(user);
  return freeAgents.splice(i, 1);
}
