// Skapar ny task med enter kanppen
var newTask= document.querySelector('#task'); 
newTask.addEventListener('keyup', function(event){
  if (document.querySelector('#task').value != '') { //Skapar inte en ny task om paragrafen är tom

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

// För varje klick på enter knappen så skapas en ny task här
function addInput(textValue){
   let main = document.querySelector('main'); //
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
           itemsLeft();

   });

   checkTask();
   itemsLeft();
   checkAllBtnFunc();
  
} 

//Vilken av filterknapparna som är intryckt (active, all eller completed)
var mode;

// Uppdaterar för varje förändring på sidan itemsLeft
function itemsLeft() {

           let notChecked = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length; //
           document.querySelector('.todo-count').innerHTML = notChecked + " Items left";
         
            }      

// Knapp som tar bort alla completed syns bara när todolisten har i checkade checkboxes 
var buttonDeleted = document.querySelector('#cCdelete');
buttonDeleted.style.visibility="hidden";
buttonDeleted.addEventListener('click', function(){ 
    let listOfCheckbox = Array.from(document.querySelectorAll('.check')); //
    listOfCheckbox.forEach(element => {

        let lab = element.parentNode //
        if(element.checked == true){

            lab.remove(lab);
            itemsLeft();
            checkAllBtnFunc()
            buttonDeleted.style.visibility="hidden";
        }

    });
});


// Anropas för varje ny task för att lägga till eventlistener på checkboxarna, för att kunna manipulera tasken. Gör även Clear completed knappen synlig
function checkTask() {
    
    let listOfCheckbox = Array.from(document.querySelectorAll('.check'));  //
    listOfCheckbox.forEach(element => {

        element.addEventListener('change', function(e) {
            let lab = e.target.parentNode //

            if(element.checked == true){
                itemsLeft();
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

}


function ifAnyTaskIsChecked(){
    let anyCheckBox = document.querySelectorAll('input[type="checkbox"]:checked'); //
    if(anyCheckBox.length > 0 ){
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
    buttonAll.classList.remove('selected');
    buttonActive.classList.remove('selected');           //Tar bort border från de andra knapparna
    buttonCompleted.className += " " + 'selected';       //Lägger till en border till knappen när den är tryckt på.
    let listOfCheckbox = Array.from(document.querySelectorAll('.check')); 
    listOfCheckbox.forEach(element => {
        let lab = element.parentNode //
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
    buttonCompleted.classList.remove('selected');
    buttonActive.classList.remove('selected');                      //Tar bort border från de andra knapparna
    buttonAll.className += " " + 'selected';                       //Lägger till en border till knappen när den är tryckt på.
    let listOfCheckbox = Array.from(document.querySelectorAll('.check')); 
    listOfCheckbox.forEach(element => {
        let lab = element.parentNode //
        if(element.checked == false || element.checked == true ){
            lab.style.display = 'grid';
        }
    });

});

var buttonActive = document.querySelector('#active');
buttonActive.addEventListener('click', function(){
    mode = "active";
    buttonCompleted.classList.remove('selected');
    buttonAll.classList.remove('selected');                       //Tar bort border från de andra knapparna
    buttonActive.className += " " + 'selected';                   //Lägger till en border till knappen när den är tryckt på.
    let listOfCheckbox = Array.from(document.querySelectorAll('.check')); 
    listOfCheckbox.forEach(element => {
        let lab = element.parentNode //
        if(element.checked == false){
            lab.style.display = 'grid';
            
        }
        else{
            lab.style.display = 'none';
        }
    });
});

//Knappen som checkar i alla uppgifter
var checkAllBtn = document.querySelector('#checkAll');
checkAllBtn.style.visibility="hidden";

var footerHidden = document.querySelector('.footer') //Footern
footerHidden.style.visibility="hidden";

//Gör knappen osynlig om det inte finns några uppg och vv
function checkAllBtnFunc(){

var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
if(listOfCheckbox.length > 0){
    checkAllBtn.style.visibility="visible";      //Knappen som checkar i alla uppgifter ska bara synas när det finns någon task
    footerHidden.style.visibility="visible";    //Footern ska bara synas om det finns några tasks, annars visa inte.
}
else{
    checkAllBtn.style.visibility="hidden";
    footerHidden.style.visibility="hidden";
    buttonDeleted.style.visibility="hidden"; 
}
                             }

checkAllBtn.addEventListener('click', function(){ 
    let listOfCheckbox = Array.from(document.querySelectorAll('.check')); 
    let checkedCheckBox = document.querySelectorAll('input[type="checkbox"]:checked'); 
    let noCheckedCheckBox = document.querySelectorAll('input[type="checkbox"]:not(:checked)'); 
   
        if(checkedCheckBox.length >= 0 && noCheckedCheckBox.length != 0){ 
            
        listOfCheckbox.forEach(element => {
             element.checked = true;
            let lab = element.parentNode; //
            lab.setAttribute('class', 'lab');
            if(mode=='active'){
                lab.style.display = 'none';
            }
            else{
                lab.style.display = 'grid';
            }
        })          
            buttonDeleted.style.visibility="visible";
            itemsLeft();
        }
        else {
            listOfCheckbox.forEach(element => {
            element.checked = false;
            let lab = element.parentNode; //
            lab.removeAttribute('class');
            if(mode=='completed'){
                lab.style.display = 'none';
            }
            else{
                lab.style.display = 'grid';
            }

            })
            buttonDeleted.style.visibility="hidden";
            itemsLeft();
        }
});














    


