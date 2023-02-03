let add = document.getElementById("addform");
let textadd = document.querySelector("[name='addtext']");
let content = document.querySelector(".list");
add.onsubmit= function (){
    console.log(textadd.value);
    let addDiv = document.createElement('div');
    addDiv.className = "item";
    let addP = document.createElement('p');
    let divCh = document.createElement('div');

    let Adone = document.createElement('a');
    let Adelet = document.createElement('a');
    let selcetion = document.createElement('select');
    let option = document.createElement('option');
    let image1 = document.createElement('img')
    let image2 = document.createElement('img')
    Adelet.className = 'delet';
    Adone.classname = 'done';
    content.appendChild(addDiv);
    addDiv.appendChild(addP);
    addDiv.appendChild(divCh);
    addP.innerText = textadd.value;
    divCh.appendChild(Adelet);
    divCh.appendChild(Adone);
    // divCh.appendChild(selcetion);
    // for (let i =0 ; i<=2;i++){
    //     selcetion.appendChild(option);
    // };
    Adone.appendChild(image1);
    image1.src = 'done2.png'
    Adelet.appendChild(image2)
    image2.src = 'remove2.png';

    textadd.value = "";

    let formItem = document.querySelector('.item')
    let delet = document.querySelector('.delet')
    
    delet.onclick = function (){
        formItem.remove();
        console.log('done')
    };
    
};

let deletall = document.getElementById('clear-all');
deletall.onclick = function (){
    content.innerHTML = null;
};