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
<<<<<<< HEAD
  
   
=======
   test();
>>>>>>> 67d819df06de3a2a4c37919fa96c8140183cfa15
} 


function test () {
    var listOfCheckbox = Array.from(document.querySelectorAll('.check'));
    listOfCheckbox.forEach(element => {

        element.addEventListener('change', function() {

            if(element.checked == true)

            alert('We sure do need some help')

        });

    });

}








    


