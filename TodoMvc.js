var newTask= document.querySelector('#task'); 
newTask.addEventListener('keyup', function(event){
  
    if (event.key === 'Enter') {
         event.preventDefault();
        let textValue = document.querySelector('#task').value;
        return addInput(textValue);

    }
}); 

newTask.addEventListener('keyup', function(event){
  
    if (event.key === 'Enter')
     {
        let textValue = document.querySelector('#task').value = '';
     }
}); 

function addInput(textValue){

//    let input = document.querySelector('#task').value; 
   var main = document.querySelector('main');
   let label = document.createElement('label');  
   let inputt = document.createElement('input');
   let para = document.createElement('p'); 
   let deleteButton = document.createElement('button')
   inputt.setAttribute('type', 'checkbox');
   inputt.setAttribute('class', 'check');
   deleteButton.setAttribute('onclick', 'deleteLabel()');
   label.appendChild(inputt);
   para.textContent = textValue;
   label.appendChild(para);
   label.appendChild(deleteButton);
   if(mode == "completed") {
       label.style.display = 'none';
   }
   main.appendChild(label);

   
   deleteButton.addEventListener('click', () => {
   
           label.remove();
   
   });

   test();
   
} 
var mode;

function test () {
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));   
    listOfCheckbox.forEach(element => {

        element.addEventListener('change', function(e) {
            var lab = e.target.parentNode
            if(element.checked == true){
               
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









    


