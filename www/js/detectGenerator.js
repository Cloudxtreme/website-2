<<<<<<< HEAD
function generateVars() {
  var entitySelector = document.getElementById("entitySelector").value;                                                                     
  var scoreEntitySelector = document.getElementById("scoreEntitySelector").value;                                                           
  var detectObjective = document.getElementById("detectObjective").value;                                                                   
  var detectAmt = document.getElementById("detectAmt").value;                                                                               
  var entityData = document.getElementById("entityData").value;                                                                             
  var blockInformationSeperator = document.getElementById("blockInformationSeperator").value;                                               
  var blockInformation = document.getElementById("blockInformation").value.split("\n");                                                     
  var blocks = [];                                                                                                                          
  var mainComm = ""; 
}

function generateDetectCommand() {
  if (!(window.blockInformationSeperator)) {
    window.blockInformationSeperator = "|";
=======
function generateDetectCommand() {
  var entitySelector = document.getElementById("entitySelector").value;
  var scoreEntitySelector = document.getElementById("scoreEntitySelector").value;
  var detectObjective = document.getElementById("detectObjective").value;
  var detectAmt = document.getElementById("detectAmt").value;
  var entityData = document.getElementById("entityData").value;
  var blockInformationSeperator = document.getElementById("blockInformationSeperator").value;
  var blockInformation = document.getElementById("blockInformation").value.split("\n");
  var blocks = [];
  var mainComm = "";

  if (!(blockInformationSeperator)) {
    blockInformationSeperator = "|";
>>>>>>> parent of 0256411... save
  }

  for (var i = 0; i < window.blockInformation.length; i++) {
    var singleBlockInformation = blockInformation[i].split(blockInformationSeperator);
    var newId = singleBlockInformation[0];
    var newData = singleBlockInformation[1];
    var newLoc = singleBlockInformation[2];
    window.blocks.push({"bname": newId, "dv": newData, "loc": newLoc});
  }

  for (var j = 0; j < window.blocks.length; j++) {
    window.mainComm += "execute " + window.entitySelector + " ~ ~ ~ detect " + window.blocks[j].loc + " " + window.blocks[j].bname + " " + window.blocks[j].dv + " ";
  }

  if (entityData) {
    window.mainComm += "scoreboard players set " + window.scoreEntitySelector + " " + window.detectObjective + " " + window.detectAmt + " " + window.entityData;
  } else {
    window.mainComm += "scoreboard players set " + window.scoreEntitySelector + " " + window.detectObjective + " " + window.detectAmt;
  }

  document.getElementById("commandOutput").innerHTML = window.mainComm;
}

function exportGeneration() {
  // alert("Coming Soon to My Website Near You!");
<<<<<<< HEAD
  var saveCode = {"blockInformation": window.blocks};
=======
  var saveCode = {"blockInformation": [blocks]};
>>>>>>> parent of 0256411... save
  var SsaveCode = JSON.stringify(saveCode);
  var savePrompt = prompt("Copy your save code from here:",SsaveCode);
}
