const button = document.querySelectorAll('.box');
const body = document.querySelector('body');
console.log(button)
button.forEach(function(tab){
    console.log(tab)
    tab.addEventListener('click',function(e){
        console.log(e.target)
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'black'){
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
            }
       
        
    });
});