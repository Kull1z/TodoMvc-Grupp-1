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
   inputt.setAttribute('type', 'checkbox');
   inputt.setAttribute('class', 'check');
   label.appendChild(inputt);
   para.textContent = textValue;
   label.appendChild(para);
   main.appendChild(label);
   test();
} 


function test () {
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {

        element.addEventListener('change', function(e) {
            var lab = e.target.parentNode
            if(element.checked == true){
               
                lab.setAttribute('class', 'lab');
            }
            else{
                lab.removeAttribute('class', 'lab')
            }

        });

    });

}
var buttonCompleted = document.querySelector('#completed');
buttonCompleted.addEventListener('click', function(){
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {
        var lab = element.parentNode
        if(element.checked == false){
            lab.style.display = 'none';
        }

    });
})







    


