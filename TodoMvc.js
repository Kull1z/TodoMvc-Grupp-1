var newTask= document.querySelector('#task'); 
newTask.addEventListener('keyup', function(event){
  
    if (event.key === 'Enter') {
         event.preventDefault();
        var textValue = document.querySelector('#task').value;
        return addInput(textValue);
         
    }
    
}); 


function addInput(textValue){
   
   let input = document.querySelector('#task').value; 
   let label = document.createElement('label'); 
   label.textContent = textValue;
   var main = document.querySelector('main'); 
   let image = document.createElement('img'); 
   image.setAttribute('src', '"C:\Users\lena_\Desktop\VisualCode\ToDoMVC\checkbox-unchecked.svg"');
   label.appendChild(image);
   main.appendChild(label);
  

} 