$(document).ready(function() {
	console.log("ready");
	
	userCheck = false;
	imgCheck = false;
	movieCheck = false;
	commentCheck = false;
	
});


function up(itself) {
	
	var userRegExp = /^[A-Za-z0-9]{8,15}$/
	var imgRegExp = /[.](jpg|png|gif)$/
	var movieRegExp = /^[A-Za-z ]{0,20}$/
	var commentRegExp = /^[A-Za-z0-9 .,?\!]{0,100}$/

	
	var id = itself.id;
	
	if (id === "TopInp") {
		var regEx = userRegExp;
	}
	else if (id === "imgInp") {
		var regEx = imgRegExp;
	}
	else if (id === "movieInp") {
		var regEx = movieRegExp;
	}
	else if (id === "BottomInp") {
		var regEx = commentRegExp;
	}
	else {
		console.log("error");
	}
	
	console.log(regEx);
	
	var inp = itself.value;
	
	if (regEx.test(inp)) {
		console.log("GoodToGo");
		itself.style.border = "solid grey 1px"
		itself = 1;
		console.log(itself);
		
		if (id === "TopInp") {
			userCheck = true;
		}
		else if (id === "imgInp") {
			imgCheck = true;
		}
		else if (id === "movieInp") {
			movieCheck = true;
		}
		else if (id === "BottomInp") {
			commentCheck = true;
		}
		else {
			console.log("error");
		}
	}
	else {
		console.log("ERROR");
		itself.style.border = "solid red 3px"
		
		if (id === "TopInp") {
			userCheck = false;
		}
		else if (id === "imgInp") {
			imgCheck = false;
		}
		else if (id === "movieInp") {
			movieCheck = false;
		}
		else if (id === "BottomInp") {
			commentCheck = false;
		}
		else {
			console.log("error");
		}
	}

}

function createNew() {
	userInp = document.getElementById("TopInp");
	imgInp = document.getElementById("imgInp");
	movieInp = document.getElementById("movieInp");
	bottomInp = document.getElementById("BottomInp");
	newArea = document.getElementById("newItem");	
	
	outer = document.createElement("div");
	outer.setAttribute("ID", "outer");
	newArea.appendChild(outer);
	
	newComment = document.createElement("div");
	newComment.setAttribute("ID", "comment");
	newComment.innerHTML = bottomInp.value;
	outer.appendChild(newComment);
	
	newImage = document.createElement("div");
	newImage.setAttribute("ID", "image");
	newImage.style.backgroundImage = "url('" + imgInp.value + "')";
	outer.appendChild(newImage);
	
	newMovie = document.createElement("div");
	newMovie.setAttribute("ID", "movie");
	
	$.ajax({
		url: "https://www.omdbapi.com/?t=" + movieInp.value,
		dataType: "jsonp",
		
		success: function(resp) {
			newMovie.style.backgroundImage = "url('" + resp.Poster + "')";
			console.log(resp.Poster)
		}
	});
	
	
	outer.appendChild(newMovie);
	
	
		
	newElement = document.createElement("div")
	newElement.setAttribute("ID", "username")
	newElement.innerHTML = userInp.value;
	outer.appendChild(newElement);
}

function submit() {
	console.log("button works")
	if ((userCheck === true) && (imgCheck === true) && (movieCheck === true) && (commentCheck === true)) {
		console.log("working");
		createNew()

	}
	else {
		console.log("Invalid");

	}
}

