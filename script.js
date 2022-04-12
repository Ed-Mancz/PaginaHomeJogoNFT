function mute(){
    let mute = document.getElementById('background_audio').muted;
    
    if(mute == true){
        document.getElementById('background_audio').muted = false;
        document.getElementById('img-audio').src = 'images/unmute.png';
        
    }else if(mute == false){

        document.getElementById('background_audio').muted = true;
        document.getElementById('img-audio').src = 'images/mute.png';
    }  
}
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');
let title = document.getElementById('gameplaytitle');
let text = document.getElementById('textgameplay');
let lileft = document.getElementById('lileft')
let liright = document.getElementById('liright')
function click1(){
    li1.style.color = 'white'
    li2.style.color = 'black'
    li3.style.color = 'black'
    title.innerHTML = 'Gameplay'
    text.innerHTML = 'Venture into the amazing world of Nightmare in dangerous races in PVM mode or in incredible duels in our PVP mode to become the master of Candys, will you miss this opportunity? or you will be a big winner!'
    
}

function click2(){
    li1.style.color = 'black'
    li2.style.color = 'white'
    li3.style.color = 'black'
    title.innerHTML = 'PVP'
    text.innerHTML = 'In our PVP mode you can bet Candys with another Player, the chances of winning are the same for everyone, and you will be able to communicate with your opponent throughout the duel!'
}
function click3(){
    li3.style.color = 'white'
    li1.style.color = 'black'
    li2.style.color = 'black'
    title.innerHTML = 'PVM'
    text.innerHTML = 'In our PVM mode you will do daily races in which you must guide your soul to the precious Candys and then return safely to your home, be careful not to fall into traps on the way because fail is not an option...'
}
/*Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iure. Ipsam quas libero officia explicabo similique ipsum adipisci? Ab vitae quisquam magni illum. Et reprehenderit iusto sequi quasi, cupiditate adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quia, impedit ipsam vitae dolorum nihil odio reprehenderit, saepe obcaecati voluptates vel asperiores totam ad praesentium provident illo autem aperiam. Temporibus! */

function clickleft(){
    if(li1.style.color == 'white'){
        title.innerHTML = 'PVM'
        text.innerHTML = 'In our PVM mode you will do daily races in which you must guide your soul to the precious Candys and then return safely to your home, be careful not to fall into traps on the way because fail is not an option...'
        li1.style.color = 'black'
        li2.style.color = 'black'
        li3.style.color = 'white'
    }else if(li3.style.color == 'white'){
        title.innerHTML = 'PVP'
        text.innerHTML = 'In our PVP mode you can bet Candys with another Player, the chances of winning are the same for everyone, and you will be able to communicate with your opponent throughout the duel!'
        li1.style.color = 'black'
        li2.style.color = 'white'
        li3.style.color = 'black'
    }else if(li2.style.color == 'white'){
        title.innerHTML = 'Gameplay'
        text.innerHTML = 'Venture into the amazing world of Nightmare in dangerous races in PVM mode or in incredible duels in our PVP mode to become the master of Candys, will you miss this opportunity? or you will be a big winner!'
        li1.style.color = 'white'
        li2.style.color = 'black'
        li3.style.color = 'black'
    }
}
function clickright(){
    if(li1.style.color == 'white'){
        title.innerHTML = 'PVP'
        text.innerHTML = 'In our PVP mode you can bet Candys with another Player, the chances of winning are the same for everyone, and you will be able to communicate with your opponent throughout the duel!'
        li1.style.color = 'black'
        li2.style.color = 'white'
        li3.style.color = 'black'
    }else if(li2.style.color == 'white'){
        title.innerHTML = 'PVM'
        text.innerHTML = 'In our PVM mode you will do daily races in which you must guide your soul to the precious Candys and then return safely to your home, be careful not to fall into traps on the way because fail is not an option...'
        li1.style.color = 'black'
        li2.style.color = 'black'
        li3.style.color = 'white'
    }else if(li3.style.color == 'white'){
        title.innerHTML = 'Gameplay'
        text.innerHTML = 'Venture into the amazing world of Nightmare in dangerous races in PVM mode or in incredible duels in our PVP mode to become the master of Candys, will you miss this opportunity? or you will be a big winner!'
        li1.style.color = 'white'
        li2.style.color = 'black'
        li3.style.color = 'black'
    }

}