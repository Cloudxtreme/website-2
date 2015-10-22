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
