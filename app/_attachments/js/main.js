//Alex Behannon
//08/9/2012
//Project 2

//initial variables

$(document).ready(function(){

    //button toggles
    function toggleControls(x){
        var dN = { 'display': 'none' };
        var dI = { 'display': 'inline' };
        var dB = { 'display': 'block' };
        
        switch(x){
            case "on":
            $("addItem").css(dN)
            $('clearData').css(dI)
            $("displayData").css(dN)
            $("addNew").css(dI)
            break;
            case "off":
            $("addItem").css(dB)
            $('clearData').css(dI)
            $("displayData").css(dI)
            $("addNew").css(dN)
            $("items").css(dN)
            break;
            default:
            return false;
        }
    }

    //Data storage
    function storeData(key){
        console.log(key);
            var id = Math.floor(Math.random()*1000000001);

        var item = {};
	item._id = 		"item:" + id;
        item.ownerName =        ["Owner Name:", $("#ownerName").val()];
        item.ownerLocation =    ["Owner Location:", $("#ownerLocation").val()];
        item.itemName =         ["Item Name:", $("#itemName").val()];
        item.itemCategory =     ["Item Category:", $("#itemCategory").val()];
        item.amount =           ["Item Amount:", $("#itemAmount").val()];
        item.extraInfo =        ["Other Info:", $("#extraInfo").val()];
        console.log(item);
	$couch.db('asdcouch').saveDoc(item, {
	    success: function(data){
		alert("Item Added!");
	    }
	})
    }
    
    //validation
    function validate(){
        var parseItemForm = function(data){
            storeData(data);
        };
        $(document).ready(function(){
            var iForm = $("#registerItemForm");
            iForm.validate({
                invalidHandler: function(form, validator){},
                submitHandler: function(){

                    var data = iForm.serializeArray();
                    parseItemForm(data);
                }
            });
        });
    }
    
    //edit item
    function editItem(){
	var value = localStorage.getItem(this.key);
	item = JSON.parse(value);
	console.log(value);
	console.log(item);

	toggleControls("off");
    
	console.log(item);
        $("ownerLocation").value = item.ownerLocation[1]);
        $("itemName").value = item.itemName[1]);
        $("itemCategory").value = item.itemCategory[1]);
        $("#itemAmount").value = item.itemAmount[1]);
        $("#extraInfo").value = item.extraInfo[1]);
    
	save.off("click", storeData);
	$('#save').val("Edit Item");
	var editSubmit = $('#saveData');
	save.one("click", function(){
	    storeData(key);
	});
    editSubmit.attr("key", this.key);
    };

    function deleteItem(){
	var ask = confirm("Are you sure you want to delete this item?");
	if(ask){
	    localStorage.removeItem(this.key);
	    alert("Item was not deleted.");
	    window.location.reload();
	}else{
	    alert("Item was deleted.");
	}
    };
    
    //edit items
    function editItem(){
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

        toggleControls("off");

        $("ownerName").val(item.ownerName[1]);
        $("ownerLocation").val(item.ownerLocation[1]);
        $("itemName").val(item.itemName[1]);
        $("itemCategory").val(item.itemCategory[1]);
        $("#itemAmount").val( item.itemAmount[1]);
        $("#extraInfo").val(item.extraInfo[1]);

        saveData.unbind("click", storeData);

        $("#saveData").val("Edit Item");
        var editSubmit = $("#saveData");

        editSubmit.bind("click", validate);
        editSubmit.key = this.key;
    }

    //delete item
    function deleteItem(){
        var ask = confirm("Are you sure you wish to delete this item?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("The item has been removed from your inventory.");
            window.location.reload();
        } else {
            alert("The item will remain in the inventory.");
        }
    }

    //JSON auto fill
    function autoFillData(){
        for(var n in json){
            var id = Math.floor(Math.random()*1000000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    }

    //adds image to saved info
    function getImage(categoryName, makeSubList){
        var imageLi = $("<li></li>");
        makeSubList.append(imageLi);
        var newImage = $("<img />");
        newImage.attr("src", "imgs/" + categoryName + ".png");
        imageLi.append(newImage);
    }

    
    //creates individual item links
    function makeItemLinks(key, linksLi){
    	var editLink = $('<a>');
	editLink.attr("href", "#");
	editLink.attr("key", key);
	var editText = "Edit Item";
	editLink.on("click", editItem);
	editLink.text(editText);
	linksLi.appendChild(editLink[0]);

        var breakTag = $('<br>');
        linksLi.append(breakTag[0]);

	var deleteLink = $('<a>');
	deleteLink.attr("href", "#");
	deleteLink.attr("key", key);
	var deleteText = "Delete Item";
	deleteLink.on("click", deleteItem);
	deleteLink.text(deleteText);
	linksLi.appendChild(deleteLink[0]);
    };
    
    //grabs data
    function getData(){
	$.couch.db('asdcouch').view("app/items", {
	    success: function(data){
		console.log(data);
		$.each(dta.rows, function(index, item){
		    var iType = item.value.itemType;
		    var iCat = item.value.itemCategory;
		    var iName = item.value.itemName;
		    var iAmount = item.value.itemAmount;
		    var iInfo = item.value.extraInfo;
		    var oName = item.value.ownerName;
		    var oLoc = item.value.ownerLocation;
			$('itemData').append(
			    $('<li>').text(iName),
			    $('<li>').text(iCat),
			    $('<li>').text(iType),
			    $('<li>').text(oName),
			    $('<li>').text(oLoc),
			    $('<li>').text(iAmount),
			    $('<li>').text(iInfo),
			    $('<p></p>')
			)
			makeItemLinks(item.value._id, $('#itemData')[0]);
		})
	    }
	    error: function(status) {
		console.log(status);
		    $('#registerItemForm').empty();
	    }
	};
	
        toggleControls("on");
        if(localStorage.length === 0){
            var ask = confirm("There are no items in the inventory. Would you like to autofill it?");
            if(ask){
                autoFillData();
            } else {
                window.location.reload();
            }
        };

    //deletes data
    function eraseData(){
        if(localStorage.length === 0){
            alert("There are currently no items in the inventory.");
        } else {
            var ask = confirm("Are you sure you wish to purge the inventory?");
            if(ask){
                localStorage.clear();
                alert("The inventory has been erased.");
                window.location.reload();
                return false;
            } else {
                alert("The inventory will not be erased.");
                window.location.reload();
            }
        }
    }
    
    //makeDiv
    var makeDiv = document.createElement('div');
	makeDiv.setAttribute("id", "items");
	var makeList = document.createElement('ul');
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);
	    for(var i=0, len=localStorage.length; i<len;i++){
	    var makeLi = document.createElement('li');
	    var linksLi = document.createElement('li');
	    makeList.appendChild(makeLi);
	    var key = localStorage.key(i);
	    var value = localStorage.getItem(key);
	    var obj = JSON.parse(value);
	    var makeSubList = document.createElement('ul');
	    makeLi.appendChild(makeSubList);
	    getImage(obj.group[1], makeSubList);
	    for(var n in obj){
		var makeSubLi = document.createElement('li');
		makeSubList.appendChild(makeSubLi);
		var optSubText = obj[n][0]+" "+obj[n][1];
		makeSubLi.innerHTML = optSubText;
		makeSubLi.appendChild(linksLi);
	    }
	}
    
    //form reset
    function resetForm(){
	window.location.reload();
    }
    
    //buttons
    var errMsg = $('#errors');
    var displayData = $('#displayData');
    var clearData = $('#clearData');
    $('#clearData').on("click", eraseData);
    $('#displayData').on("click", getData);
    $('#resetForm').on("click", resetForm);
});
    var save = $('#saveData');
    save.on("click", validate);