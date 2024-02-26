console.log("I Am Here!");
function MoveTheObjectFreely(Cursor) {
    console.log("got to this point at least");
    var NewPositionX = Cursor.clientX - OldX;
    var NewPositionY = Cursor.clientY - OldY;
    MoveableElement[0].style.left = NewPositionX + "px";
    MoveableElement[0].style.top = NewPositionY + "px";
    /*
    for (let i = 0; i < (BlocksArray.length); i++) {
        MoveableElement.style.left = NewPositionX + "px";
        MoveableElement.style.top = NewPositionY + "px";
    }*/
}

function EndOfMovement() {
    document.removeEventListener('mousemove', MoveTheObjectFreely);
    document.removeEventListener('mouseup', EndOfMovement);
}

function StartMovement(Cursor) {
    console.log("Was clicked");
    OldX = Cursor.clientX
    OldY = Cursor.clientY;
    document.addEventListener("mousemove", MoveTheObjectFreely);
    document.addEventListener("mouseup", EndOfMovement);
}


function StatementCreator(ClickedElement) {
    MoveableElement.length = 0;
    MoveableElement.push(ClickedElement);
};

BlocksArray = [];
MoveableElement = [];
BlocksArray.push(BigBlock, MediumBlock, SmallBlock);
BlocksArray.forEach(function (entity, position) {
    entity.addEventListener("mousedown", StartMovement);
    entity.addEventListener("mousedown", () => {
        StatementCreator(entity);
    });
})





//var SmallBlock = documentGetElementById("SmallBlock");
//var Canvas = document.getElementById("BuildingCanvas");






// MediumBlock.addTheEntityListener("mousedown", StartMovement);
//SmallBlock.addTheEntityListener("mousedown", StartMovement);
/*
   var BoundaryLeft = Canvas.clientWidth - BigBlock.offsetWidth;
    var BoundaryTop = Canvas.clientHeight - BigBlock.offsetHeight;

    if (OldX < 0) {
        OldX = 0;
    } else if (OldX > BoundaryLeft) {
        OldX = BoundaryLeft;
    }

    if (OldY < 0) {
        OldY = 0;
    } else if (OldY > BoundaryTop) {
        OldY = BoundaryTop;
    }

    OldX = TheEntity.clientX;
    OldY = TheEntity.clientY;
*/