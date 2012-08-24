function(doc) {
  if (doc._id.substr(0, 5) === "food:"){
    emit(doc._id, { 
    	"itemName": doc.itemName[1],
        "ownerName": doc.ownerName[1],
        "ownerLocation": doc.ownerLocation[1],
        "favorite": doc.favorite[1],
        "itemCategory": doc.itemCategory[1],
        "perish": doc.perish[1],
        "itemAmount": doc.itemAmount[1],
        "extraInfo": doc.extraInfo[1],
    });
  }
};