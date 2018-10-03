// Skapar ny task med enter kanppen
var newTask= document.querySelector('#task'); 
newTask.addEventListener('keyup', function(event){
<<<<<<< HEAD
  
    if (event.key === 'Enter') {
         event.preventDefault();
        let textValue = document.querySelector('#task').value;
        // checkAllBtn.style.visibility="visible";
        return addInput(textValue);
=======
  if (document.querySelector('#task').value != '') {
>>>>>>> 79dd3c72e2f5d1255544cebe5a2a2196bf3fe865

    if (event.key === 'Enter')
    {
            event.preventDefault();
            let textValue = document.querySelector('#task').value;
            checkAllBtn.style.visibility="visible";
            return addInput(textValue);
    }
  }
}); 

// Tar bort text i den första inputen efter varje enter (efter varje gång ny task skapas)
newTask.addEventListener('keyup', function(event){
  
    if (event.key === 'Enter')
     {
        document.querySelector('#task').value = '';
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
           checkAllBtnFunc();
   
   });

   checkTask();
   itemsLeft();
   checkAllBtnFunc();
   footerHidden.style.visibility="visible";  

} 

var mode;

// Måste dock kunna försvinna när allting clears...

var footerHidden = document.querySelector('.footer')
footerHidden.style.visibility="hidden";
  

<<<<<<< HEAD
=======
// Uppdaterar för varje förändring på sidan itemsLeft
>>>>>>> 79dd3c72e2f5d1255544cebe5a2a2196bf3fe865

function itemsLeft() {

           var notChecked = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
           document.querySelector('.todo-count').innerHTML = notChecked + " Items left";
         
            }      


// Knapp som tar bort alla completed syns bara när todolisten har i checkade checkboxes 
var buttonDeleted = document.querySelector('#cCdelete');
buttonDeleted.style.visibility="hidden";
buttonDeleted.addEventListener('click', function(){ 
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {

        var lab = element.parentNode
        if(element.checked == true){

            lab.remove(lab);
            itemsLeft();
            buttonDeleted.style.visibility="hidden";
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
                itemsLeft();
               // buttonDeleted.style.visibility = "visible"; 
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
                itemsLeft();
              
              
            }
            ifAnyTaskIsChecked();

        });

    });

//    var itemsLeft = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length


}


function ifAnyTaskIsChecked(){
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    if(listOfCheckbox.includes(('input.check').checked )){
        buttonDeleted.style.visibility = "visible";
    }
    else{
        buttonDeleted.style.visibility = "hidden";

    }

   
    
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


//Knappen som checkar i alla uppg
var checkAllBtn = document.querySelector('#checkAll');
checkAllBtn.style.visibility="hidden";
//Gör knappen osynlig om det inte finns några uppg och vv
function checkAllBtnFunc(){

var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
if(listOfCheckbox.length > 0){
    checkAllBtn.style.visibility="visible";
}
else{
    checkAllBtn.style.visibility="hidden";
}

}


checkAllBtn.addEventListener('click', function(){ 
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {
        if(element.checked == false){
            element.checked = true;
            var lab = element.parentNode;
            lab.setAttribute('class', 'lab');
            buttonDeleted.style.visibility="visible";
            itemsLeft();

        }  
        else{
            element.checked = false;
            var lab = element.parentNode;
            lab.removeAttribute('class');
            buttonDeleted.style.visibility="hidden";
            itemsLeft();
        }  
    });
});


function dontAllowEmptyTasks() {

    if (document.querySelector('#task').value != 0) {


        
    }
}











    


