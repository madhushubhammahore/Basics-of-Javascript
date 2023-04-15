let namasteBtn = document.querySelector ('button');
namasteBtn.addeventlistener ('click' , inputMsg);

function inputMsg(){
    let name = prompt ('enter name of student ');
    namasteBtn.textContent = 'roll no. 1: ' + name;
    
}