function generateDetectCommand() {
  var entitySelector = document.getElementById("entitySelector").value;
  var detectObjective = document.getElementById("detectObjective").value;
  var detectAmt = document.getElementById("detectAmt").value;
  var entityData = document.getElementById("entityData").value;
  var blockInformation = document.getElementById("blockInformation").value.split("\n");
  var blocks = [];
  var mainComm = "";

  for (var i = 0; i < blockInformation.length; i++) {
    var singleBlockInformation = blockInformation[i].split("|");
    var newId = singleBlockInformation[0];
    var newData = singleBlockInformation[1];
    var newLoc = singleBlockInformation[2];
    blocks.push({"id": newId, "data": newData, "loc": newLoc});
    mainComm += "execute " + 
  }
}
