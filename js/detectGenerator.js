function generateDetectCommand() {
  this.entitySelector = document.getElementById("entitySelector").value;
  this.scoreEntitySelector = document.getElementById("scoreEntitySelector").value;
  this.detectObjective = document.getElementById("detectObjective").value;
  this.detectAmt = document.getElementById("detectAmt").value;
  this.entityData = document.getElementById("entityData").value;
  this.blockInformationSeperator = document.getElementById("blockInformationSeparator").value;
  var blockInformation = document.getElementById("blockInformation").value.split("\n");
  this.blocks = [];
  this.settings = {"entitySelector": this.entitySelector, "scoreEntitySelector": this.scoreEntitySelector, "detectObjective": this.detectObjective, "detectAmt": this.detectAmt, "entityData": this.entityData, "blockInformationSeparator": this.blockInformationSeparator}
  var mainComm = "";

  if (!(blockInformationSeperator)) {
    blockInformationSeperator = "|";
  }

  for (var i = 0; i < blockInformation.length; i++) {
    var singleBlockInformation = blockInformation[i].split(blockInformationSeperator);
    var newId = singleBlockInformation[0];
    var newData = singleBlockInformation[1];
    var newLoc = singleBlockInformation[2];
    this.blocks.push({"txtId": newId, "dv": newData, "loc": newLoc});
  }

  for (var j = 0; j < this.blocks.length; j++) {
    mainComm += "execute " + this.entitySelector + " ~ ~ ~ detect " + this.blocks[j].loc + " " + this.blocks[j].txtId + " " + this.blocks[j].dv + " ";
  }

  if (entityData) {
    mainComm += "scoreboard players set " + this.scoreEntitySelector + " " + this.detectObjective + " " + this.detectAmt + " " + this.entityData;
  } else {
    mainComm += "scoreboard players set " + this.scoreEntitySelector + " " + this.detectObjective + " " + this.detectAmt;
  }

  document.getElementById("commandOutput").innerHTML = mainComm;
}

function exportGeneration() {
  var saveCode = {"blockInformation": this.blocks, "settings": this.settings};
  prompt("Copy your save code from here:",JSON.stringify(saveCode));
}

function importGeneration() {
  var newSaveCode = prompt("Paste your save code here:","");
  if (newSaveCode) {
    var dataCode = JSON.parse(newSaveCode);
    this.entitySelector = dataCode.settings.entitySelector;
    this.scoreEntitySelector = dataCode.settings.scoreEntitySelector;
    this.detectObjective = dataCode.settings.detectObjective;
    this.detectAmt = dataCode.settings.detectAmt;
    this.entityData = dataCode.settings.entityData;
    this.blockInformationSeparator = dataCode.settings.blockInformationSeparator;
    
  }
}
