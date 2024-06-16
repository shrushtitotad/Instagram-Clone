var like=document.querySelector("#like");
var post=document.querySelector("#post");
like.addEventListener("dblclick",function(){
    like.style.opacity="1";
    like.style.animation="bounce linear infinite 2s";
    setTimeout(function(){
        like.style.opacity="0";
        
    }, 5000);
});