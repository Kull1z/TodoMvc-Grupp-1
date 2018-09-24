var todoList = [];

// function insertText() {
//     var textHere = document.querySelector(' input ').value;
//     todoList.push(textHere);
//     updateShowList();
    
// }



function populateList () {
    var listtag = document.querySelector("todolist")
    while (listtag.firstChild) {

        listtag.removeChild(listtag.firstChild);
    }

            for (var i = 0; i < todoList.length; i++) {

                var node = document.createElement('LI')
                var text = document.createTextNode(todolist[i]);
                node.appendChild(text);
                listtag.appendChild(node);
            }

}


function clickPress(event) {

    if (event.keyCode == 13) {

        alert('ELENA FUNKAR DET?');
    }

}


// var inputString = document.querySelectorAll("input");
// inputString.addEventListner("keydown", function (e) {
    
//     if(e.keyCode === 13) {

//         alert('Roger');
//     }
// });

// function inputSubmit() {


//     for(i = 0; i >= 0; i++) {

        

//     }
    


// }