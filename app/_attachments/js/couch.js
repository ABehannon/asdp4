//Alex Behannon
//08/9/2012
//Project 2

$(document).ready(function(){
    $.ajax({
	"url": "_view/weapons",
	"dataType": "json",
	"success": function(data) {
	    $.each(data.rows, function(index, weapon){
		var itemName = weapon.value.itemName;
		var ownerName = weapon.value.ownerName;
		var ownerLocation = weapon.value.ownerLocation;
		var itemCategory = weapon.value.itemCategory;
		var perish = weapon.value.perish;
		var itemAmount = weapon.value.itemAmount;
		var extraInfo = weapon.value.extraInfo;
		$('#WeaponList').append(
		    $('<li>').text(itemName),
		    $('<li>').text(ownerName),
		    $('<li>').text(ownerLocation),
		    $('<li>').text(itemCategory),
		    $('<li>').text(perish),
		    $('<li>').text(itemAmount),
		    $('<li>').text(extraInfo),
		    $('<p></p>')
		    
		);
	    });
	}
    });
    
    $.ajax({
	"url": "_view/fooddrink",
	"dataType": "json",
	"success": function(data) {
	    $.each(data.rows, function(index, fooddrink){
		var itemName = fooddrink.value.itemName;
		var ownerName = fooddrink.value.ownerName;
		var ownerLocation = fooddrink.value.ownerLocation;
		var itemCategory = fooddrink.value.itemCategory;
		var perish = fooddrink.value.perish;
		var itemAmount = fooddrink.value.itemAmount;
		var extraInfo = fooddrink.value.extraInfo;
		$('#FoodDrinkList').append(
		    $('<li>').text(itemName),
		    $('<li>').text(ownerName),
		    $('<li>').text(ownerLocation),
		    $('<li>').text(itemCategory),
		    $('<li>').text(perish),
		    $('<li>').text(itemAmount),
		    $('<li>').text(extraInfo),
		    $('<p></p>')
		);
	    });
	}
    });
	
    $.ajax({
	"url": "_view/tools",
	"dataType": "json",
	"success": function(data) {
	    $.each(data.rows, function(index, tools){
		var itemName = tools.value.itemName;
		var ownerName = tools.value.ownerName;
		var ownerLocation = tools.value.ownerLocation;
		var itemCategory = tools.value.itemCategory;
		var perish = tools.value.perish;
		var itemAmount = tools.value.itemAmount;
		var extraInfo = tools.value.extraInfo;
		$('#ToolsList').append(
		    $('<li>').text(itemName),
		    $('<li>').text(ownerName),
		    $('<li>').text(ownerLocation),
		    $('<li>').text(itemCategory),
		    $('<li>').text(perish),
		    $('<li>').text(itemAmount),
		    $('<li>').text(extraInfo),
		    $('<p></p>')
		);
	    });
	}
    });
	
    $.ajax({
	"url": "_view/other",
	"dataType": "json",
	"success": function(data) {
	    $.each(data.rows, function(index, other){
		var itemName = other.value.itemName;
		var ownerName = other.value.ownerName;
		var ownerLocation = other.value.ownerLocation;
		var itemCategory = other.value.itemCategory;
		var perish = other.value.perish;
		var itemAmount = other.value.itemAmount;
		var extraInfo = other.value.extraInfo;
		$('#OthersList').append(
		    $('<li>').text(itemName),
		    $('<li>').text(ownerName),
		    $('<li>').text(ownerLocation),
		    $('<li>').text(itemCategory),
		    $('<li>').text(perish),
		    $('<li>').text(itemAmount),
		    $('<li>').text(extraInfo),
		    $('<p></p>')
		);
	    });
	}
    });
});