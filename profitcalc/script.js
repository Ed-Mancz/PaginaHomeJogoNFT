let numCommon = document.getElementById('numCommon');
let numRare = document.getElementById('numRare');
let numSuper = document.getElementById('numSuper');
let numEpic = document.getElementById('numEpic');
let numLegen = document.getElementById('numLegen');
let resultcost1 = document.getElementById('resultcost1');
let resultcost7 = document.getElementById('resultcost7');
let resultcost30 = document.getElementById('resultcost30');
let resultprofit1 = document.getElementById('resultprofit1');
let resultprofit7 = document.getElementById('resultprofit7');
let resultprofit30 = document.getElementById('resultprofit30');
let txttot = document.getElementById('totsoul');
let Common = Number(numCommon.innerHTML);
let Rare = Number(numRare.innerHTML);
let Super = Number(numSuper.innerHTML);
let Epic = Number(numEpic.innerHTML);
let Legen = Number(numLegen.innerHTML);
let tot = Common + Rare + Super + Epic + Legen;


let img2 = document.getElementById('nftmid');
let img3 = document.getElementById('nftright');
let img1 = document.getElementById('nftleft');
let li1 = document.getElementById('li1')
let li2 = document.getElementById('li2')
let li3 = document.getElementById('li3')
let li4 = document.getElementById('li4')

/*
a = gray
b = orange
c = yellow
d = purple

default

img1 = gray
img2 = orange
img3 = yellow

*/



function toleft(){
    if(li1.style.color == '--var(orange)'){
        img1.src='../images/test-01-b.png'
        img2.src='../images/test-01-c.png'
        img3.src='../images/test-01-d.png'
    }
    

}
function toright(){

}


function clean(){
    numCommon.innerHTML = 0
    numEpic.innerHTML = 0
    numLegen.innerHTML = 0
    numRare.innerHTML = 0
    numSuper.innerHTML = 0
    resultcost1.innerHTML = 0
    resultcost7.innerHTML = 0
    resultcost30.innerHTML = 0
    resultprofit1.innerHTML = 0
    resultprofit7.innerHTML = 0
    resultprofit30.innerHTML = 0
    if(Common == 0 && Rare == 0 && Super == 0 && Epic == 0 && Legen == 0){
        tot = 0
        txttot.innerHTML = String(tot)
    }
}

function mint(){
    let Common = Number(numCommon.innerHTML);
    let Rare = Number(numRare.innerHTML);
    let Super = Number(numSuper.innerHTML);
    let Epic = Number(numEpic.innerHTML);
    let Legen = Number(numLegen.innerHTML);
    
   
    if(tot < 10){
        Common = Common + 8
        Rare = Rare + 1
        Super = Super + 1
        tot = tot + 10
    }else if(tot < 20){
        Common = Common + 9
        Rare = Rare + 1
        tot = tot + 10
    }else if(tot < 30){
        Common = Common + 8
        Rare = Rare + 1
        Super = Super + 1
        tot = tot + 10
    }else if(tot < 40){
        Common = Common + 9
        Rare = Rare + 1
        tot = tot + 10
    }else if(tot < 50){
        Common = Common + 7
        Rare = Rare + 1
        Super = Super + 1
        Epic = Epic + 1
        tot = tot + 10
    }else if(tot < 60){
        Common = Common + 9
        Rare = Rare + 1
        tot = tot + 10
    }else if(tot < 70){
        Common = Common + 8
        Rare = Rare + 1
        Super = Super + 1
        tot = tot + 10
    }else if(tot < 80){
        Common = Common + 9
        Rare = Rare + 1
        tot = tot + 10
    }else if(tot < 90){
        Common = Common + 8
        Rare = Rare + 1
        Super = Super + 1
        tot = tot + 10
    }
    else if(tot < 91){
        Common = Common + 8
        Rare = Rare + 1
        Legen = Legen + 1
        tot = tot + 10
    }
    
    txttot.innerHTML = String(tot)
    numCommon.innerHTML = String(`${Common}`)
    numRare.innerHTML = String(`${Rare}`)
    numSuper.innerHTML = String(`${Super}`)
    numEpic.innerHTML = String(`${Epic}`)
    numLegen.innerHTML = String(`${Legen}`)
    
}
function check(){
    let Common = Number(numCommon.innerHTML);
    let Rare = Number(numRare.innerHTML);
    let Super = Number(numSuper.innerHTML);
    let Epic = Number(numEpic.innerHTML);
    let Legen = Number(numLegen.innerHTML);
    Common = Common * 2
    Rare = Rare * 4
    Super = Super * 6
    Epic = Epic * 8 
    Legen = Legen * 10
    resultcost1.innerHTML = `${String(Common + Rare + Super + Epic + Legen)}`
    resultcost7.innerHTML = `${String((Common + Rare + Super + Epic + Legen) * 7)}`
    resultcost30.innerHTML = `${String((Common + Rare + Super + Epic + Legen) * 30)}`

    let Common2 = Number(numCommon.innerHTML);
    let Rare2 = Number(numRare.innerHTML);
    let Super2 = Number(numSuper.innerHTML);
    let Epic2 = Number(numEpic.innerHTML);
    let Legen2 = Number(numLegen.innerHTML);
    Common2 = Common2 * 4
    Rare2 = Rare2 * 8
    Super2 = Super2 * 12
    Epic2 = Epic2 * 16 
    Legen2 = Legen2 * 20
    resultprofit1.innerHTML = `${String(Common2 + Rare2 + Super2 + Epic2 + Legen2)}`
    resultprofit7.innerHTML = `${String((Common2 + Rare2 + Super2 + Epic2 + Legen2) * 7)}`
    resultprofit30.innerHTML = `${String((Common2 + Rare2 + Super2 + Epic2 + Legen2) * 30)}`
}
function leftCommon(){
    
    let count = Number(numCommon.innerHTML)
    if(numCommon.innerHTML == 0){
        numCommon.innerHTML = 0
    }else{
        count--;
        tot = tot - 1
        txttot.innerHTML = String(tot)
    }
    numCommon.innerHTML = `${String(count)}`
    
}
function rightCommon(){
    let count = Number(numCommon.innerHTML)
    if((Number(numCommon.innerHTML) + Number(numRare.innerHTML) + Number(numSuper.innerHTML) + Number(numEpic.innerHTML) + Number(numLegen.innerHTML))  < 100){
        count++;
        tot = tot + 1
        numCommon.innerHTML = `${String(count)}`
        txttot.innerHTML = String(tot)
    }
    
    
}

function leftRare(){
    let count = Number(numRare.innerHTML)
    if(numRare.innerHTML == 0){
        numRare.innerHTML = 0
    }else{
        count--;
        tot = tot - 1
        txttot.innerHTML = String(tot)
    }
    numRare.innerHTML = `${String(count)}`

}
function rightRare(){
    let count = Number(numRare.innerHTML)
    if((Number(numCommon.innerHTML) + Number(numRare.innerHTML) + Number(numSuper.innerHTML) + Number(numEpic.innerHTML) + Number(numLegen.innerHTML))  < 100){
    count++;
    tot = tot + 1
    numRare.innerHTML = `${String(count)}`
    txttot.innerHTML = String(tot)
    }
}

function leftSuper(){
    let count = Number(numSuper.innerHTML)
    if(numSuper.innerHTML == 0){
        numSuper.innerHTML = 0
    }else{
        count--;
        tot = tot - 1
        txttot.innerHTML = String(tot)
    }
    numSuper.innerHTML = `${String(count)}`

}
function rightSuper(){
    let count = Number(numSuper.innerHTML)
    if((Number(numCommon.innerHTML) + Number(numRare.innerHTML) + Number(numSuper.innerHTML) + Number(numEpic.innerHTML) + Number(numLegen.innerHTML))  < 100){
    count++;
    tot = tot + 1
    numSuper.innerHTML = `${String(count)}`
    txttot.innerHTML = String(tot)
    }
}

function leftEpic(){
    let count = Number(numEpic.innerHTML)
    if(numEpic.innerHTML == 0){
        numEpic.innerHTML = 0
    }else{
        count--;
        tot = tot - 1
        txttot.innerHTML = String(tot)
    }
    numEpic.innerHTML = `${String(count)}`

}
function rightEpic(){
    let count = Number(numEpic.innerHTML)
    if((Number(numCommon.innerHTML) + Number(numRare.innerHTML) + Number(numSuper.innerHTML) + Number(numEpic.innerHTML) + Number(numLegen.innerHTML))  < 100){
    count++;
    tot = tot + 1
    numEpic.innerHTML = `${String(count)}`
    txttot.innerHTML = String(tot)
    }
}

function leftLegen(){
    let count = Number(numLegen.innerHTML)
    if(numLegen.innerHTML == 0){
        numLegen.innerHTML = 0
    }else{
        count--;
        tot = tot - 1
        txttot.innerHTML = String(tot)
    }
    numLegen.innerHTML = `${String(count)}`

}
function rightLegen(){
    let count = Number(numLegen.innerHTML)
    if((Number(numCommon.innerHTML) + Number(numRare.innerHTML) + Number(numSuper.innerHTML) + Number(numEpic.innerHTML) + Number(numLegen.innerHTML))  < 100){
    count++;
    tot = tot + 1
    numLegen.innerHTML = `${String(count)}`
    txttot.innerHTML = String(tot)
    }
}