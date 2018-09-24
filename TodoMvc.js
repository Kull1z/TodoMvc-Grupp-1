var newTask= document.querySelector('#task'); 
newTask.addEventListener('keyup', function(event){
  
    if (event.key === 'Enter') {
         event.preventDefault();
        var textValue = document.querySelector('#task').value;
        return addInput(textValue);
         
    }
    
}); 


function addInput(textValue){
   
//    let input = document.querySelector('#task').value; 
   var main = document.querySelector('main');
   let label = document.createElement('label');  
   let inputt = document.createElement('input');
   let para = document.createElement('p') 
   inputt.setAttribute('type', 'checkbox');
   inputt.setAttribute('class', 'check');
   label.appendChild(inputt);
   para.textContent = textValue;
   label.appendChild(para);
   main.appendChild(label);
   
  

} 