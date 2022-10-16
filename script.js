console.log("welcome");


let turn="X";
let gameover=false;
// function to change the turn
const changeturn=()=>{
  return turn==="X"?"0":"X";
}
// to checkwin
const checkwin=()=>{
  let boxtext=document.getElementsByClassName('boxtext');
  let win=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [2,4,6,15,15,135],
    [0,4,8,5,15,45],
    [0,3,6,-5,15,90],
    
  ]
  win.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!==""))
    {
      document.querySelector('.info').innerText= "Our Winner is " + boxtext[e[0]].innerText
      gameover=true;
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='150px';
      
      document.querySelector('.line').style.width='20vw'
      document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]})deg)`;
    }
  })
}


reset.addEventListener('click', ()=>{
  let boxtexts=document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element=>{
    element.innerText="";
  });
  turn="X";
  document.getElementsByClassName("info")[0].innerText="turn for" + turn
  document.querySelector('.line').style.width='0vw'
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
})
// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
let boxtext=element.querySelector('.boxtext');
  element.addEventListener('click',()=>{
    if(boxtext.innerText==='')
      boxtext.innerText=turn;
    turn= changeturn();
    checkwin();
    if(!gameover){
    document.getElementsByClassName("info")[0].innerText="turn for "+ turn
    }
  })
})


