// Skapar ny task med enter kanppen
var newTask= document.querySelector('#task'); 
newTask.addEventListener('keyup', function(event){
  
    if (event.key === 'Enter') {
         event.preventDefault();
        let textValue = document.querySelector('#task').value;
        return addInput(textValue);

    }
}); 

// Tar bort text i den första inputen efter varje enter (efter varje gång ny task skapas)
newTask.addEventListener('keyup', function(event){
  
    if (event.key === 'Enter')
     {
        let textValue = document.querySelector('#task').value = '';
     }
}); 

// För varje enter knapp så skapas en ny task här
function addInput(textValue){

//    let input = document.querySelector('#task').value; 
   var main = document.querySelector('main');
   let label = document.createElement('label');  
   let inputt = document.createElement('input');
   let para = document.createElement('p'); 
   let deleteButton = document.createElement('button');
   deleteButton.setAttribute('class', 'delete');
   inputt.setAttribute('type', 'checkbox');
   inputt.setAttribute('class', 'check');
   deleteButton.setAttribute('onclick', 'deleteLabel()');
   label.appendChild(inputt);
   para.textContent = textValue;
   label.appendChild(para);
   label.appendChild(deleteButton);
   if(mode == "completed") {
       label.style.display = 'none';
       label.remove.parentNode;
   }

   main.appendChild(label);

   deleteButton.addEventListener('click', () => {
   
           label.remove();
   
   });

   checkTask();  

} 

var mode;
document.querySelector('#cCdelete').style.visibility = "hidden";    

// Fråga hur man bara gör motsatt unchecked funkade ej.

function itemsLeft() {

            // var listOfCheckbox = Array.from(document.querySelectorAll('input[type="checkbox"]:checked').length);
            // document.querySelector('.todo-count').innerHTML = listOfCheckbox;
    
            alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
        
            //     document.querySelector('.todo-count').innerHTML = listOfCheckbox;
            //     alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
            }      


// Knapp som tar bort alla completed syns bara när todolisten har i checkade checkboxes

var buttonDeleted = document.querySelector('#cCdelete');
buttonDeleted.addEventListener('click', function(){
 
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {

        var lab = element.parentNode
        if(element.checked == true){

            lab.remove(lab);
        }

    });
});




// Anropas för varje ny task för att lägga till eventlistener på checkboxarna, för att kunna manipulera tasken. Gör även Clear completed knappen synlig
function checkTask() {

    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));   
    listOfCheckbox.forEach(element => {

        element.addEventListener('change', function(e) {
            var lab = e.target.parentNode
            if(element.checked == true){

                document.querySelector('#cCdelete').style.visibility = "visible"; 
                lab.setAttribute('class', 'lab');
                if(mode == "active"){
                    lab.style.display = 'none';
               
                }  

            }

            else{
            
                lab.removeAttribute('class', 'lab')
                if( mode == "completed"){
                    lab.style.display = 'none';
                }
            
            }

        });

    });

}


// Nedanstående knappar sorterar ut tasken utifrån alla, activa samt färdiga(icheckade)

var buttonCompleted = document.querySelector('#completed');
buttonCompleted.addEventListener('click', function(){
    mode = "completed";
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {
        var lab = element.parentNode
        if(element.checked == false){
            lab.style.display = 'none';
        }
        else{
            lab.style.display = 'grid'
        }

    });
});


var buttonAll = document.querySelector('#all');
buttonAll.addEventListener('click', function(){
    mode = "all";
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {
        var lab = element.parentNode
        if(element.checked == false || element.checked == true ){
            lab.style.display = 'grid';
        }

    });

});


var buttonActive = document.querySelector('#active');
buttonActive.addEventListener('click', function(){
    mode = "active";
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {
        var lab = element.parentNode
        if(element.checked == false){
            lab.style.display = 'grid';
            
        }
        else{
            lab.style.display = 'none';
        }

    });
});












    


