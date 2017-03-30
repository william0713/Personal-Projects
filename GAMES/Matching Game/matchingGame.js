var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body");


function generateFaces() {
    while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
    }

    for (count = 0; count < numberOfFaces; count +=1) {
        var imgSmile = document.createElement("img");
        var randomPosition = Math.floor(Math.random() * 400);
        var randomPosition2 = Math.floor(Math.random() * 400);
        imgSmile.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        imgSmile.style.top = randomPosition + "px";
        imgSmile.style.left = randomPosition2 + "px";
        imgSmile.style.height = 100 + "px";
        imgSmile.style.width = 100 + "px";
        theLeftSide.appendChild(imgSmile);
        leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
    }

    theLeftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 5;
        generateFaces();         
    }
}

theBody.onclick = function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
}

generateFaces();
