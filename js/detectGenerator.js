function generateDetectCommand() {
  this.entitySelector = document.getElementById("entitySelector").value;
  this.scoreEntitySelector = document.getElementById("scoreEntitySelector").value;
  this.detectObjective = document.getElementById("detectObjective").value;
  this.detectAmt = document.getElementById("detectAmt").value;
  this.entityData = document.getElementById("entityData").value;
  this.txtBlockInformation = document.getElementById("blockInformation").value;
  var blockInformation = document.getElementById("blockInformation").value.split("\n");
  this.blocks = [];
  this.settings = {"entitySelector": this.entitySelector, "scoreEntitySelector": this.scoreEntitySelector, "detectObjective": this.detectObjective, "detectAmt": this.detectAmt, "entityData": this.entityData}
  var mainComm = "";

  for (var i = 0; i < blockInformation.length; i++) {
    var singleBlockInformation = blockInformation[i].split("#");
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
    document.getElementById("entitySelector").value = dataCode.settings.entitySelector;
    document.getElementById("scoreEntitySelector").value = dataCode.settings.scoreEntitySelector;
    document.getElementById("detectObjective").value = dataCode.settings.detectObjective;
    document.getElementById("detectAmt").value = dataCode.settings.detectAmt;
    document.getElementById("entityData").value = dataCode.settings.entityData;

    for (var k = 0; k < dataCode.blockInformation.length; k++) {
      document.getElementById("blockInformation").value += dataCode.blockInformation[k].txtId + "#" + dataCode.blockInformation[k].dv + "#" + dataCode.blockInformation[k].loc + "\n";
    }
  }
}
