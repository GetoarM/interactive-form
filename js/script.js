const name = document.querySelector('#name');
name.focus()

const otherJobRole = document.querySelector('#other-job-role');
otherJobRole.style.display = 'none';

title.addEventListener('change', (e) => {

    if (e.target.value === 'other'){
        otherJobRole.style.display = '';
    } else {
        otherJobRole.style.display = 'none';
    }
});

const sizeSelectElement = document.querySelector('#size');
const designSelectElement = document.querySelector('#design');
const colorOptions = document.querySelector('#color').children;
const colorSelectElement = document.querySelector('#color');
colorSelectElement.disabled = true;

designSelectElement.addEventListener('change', (e) =>{
    colorSelectElement.disabled = false; 
    
    for (let i = 1; i < colorOptions.length; i++){
        const value = e.target.value;
        const theme = colorOptions[i].getAttribute('data-theme');
        //console.log(value);
        //console.log(theme);
        if (value === theme){
            colorOptions[i].hidden = false;
            theme.hidden = true;
        } else {
            colorOptions[i].hidden = true;
            theme.hidden = false;
        }
    }
});
