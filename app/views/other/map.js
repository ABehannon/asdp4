function(doc) {
  if (doc._id.substr(0, 13) === "weapon:other:"){
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
  else if (doc._id.substr(0, 11) === "food:other:"){
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
  else if (doc._id.substr(0, 11) === "tool:other:"){
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