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
  if (!(window.blockInformationSeperator)) {
    window.blockInformationSeperator = "|";
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
  var saveCode = {"blockInformation": window.blocks};
  var SsaveCode = JSON.stringify(saveCode);
  var savePrompt = prompt("Copy your save code from here:",SsaveCode);
}
