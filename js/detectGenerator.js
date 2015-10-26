function generateVars() {
  window.entitySelector = document.getElementById("entitySelector").value;                                                                     
  window.scoreEntitySelector = document.getElementById("scoreEntitySelector").value;                                                           
  window.detectObjective = document.getElementById("detectObjective").value;                                                                   
  window.detectAmt = document.getElementById("detectAmt").value;                                                                               
  window.entityData = document.getElementById("entityData").value;                                                                             
  window.blockInformationSeperator = document.getElementById("blockInformationSeperator").value;                                               
  window.blockInformation = document.getElementById("blockInformation").value.split("\n");                                                     
  window.blocks = [];                                                                                                                          
  window.mainComm = ""; 
}

function generateDetectCommand() {
  if (!(blockInformationSeperator)) {
    blockInformationSeperator = "|";
  }

  for (var i = 0; i < blockInformation.length; i++) {
    var singleBlockInformation = blockInformation[i].split(blockInformationSeperator);
    var newId = singleBlockInformation[0];
    var newData = singleBlockInformation[1];
    var newLoc = singleBlockInformation[2];
    blocks.push({"bname": newId, "dv": newData, "loc": newLoc});
  }

  for (var j = 0; j < blocks.length; j++) {
    mainComm += "execute " + entitySelector + " ~ ~ ~ detect " + blocks[j].loc + " " + blocks[j].bname + " " + blocks[j].dv + " ";
  }

  if (entityData) {
    mainComm += "scoreboard players set " + scoreEntitySelector + " " + detectObjective + " " + detectAmt + " " + entityData;
  } else {
    mainComm += "scoreboard players set " + scoreEntitySelector + " " + detectObjective + " " + detectAmt;
  }

  document.getElementById("commandOutput").innerHTML = mainComm;
}

function exportGeneration() {
  // alert("Coming Soon to My Website Near You!");
  var saveCode = {"blockInformation": blocks};
  var SsaveCode = JSON.stringify(saveCode);
  var savePrompt = prompt("Copy your save code from here:",SsaveCode);
}
