console.log('Loaded!');
var element=document.getElementById('main text');
element.innerHTML='TRIVEE';
var img=document.getElementById('a');
function moveRight () {
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft +'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};