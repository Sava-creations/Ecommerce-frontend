var MainImg=document.getElementById("MainImg");                               
var smallImg=document.getElementsByClassName("small-img");                      

smallImg[0].onclick=function(){                                                  //smallImg[0] this will refer to the first small image it its counted with index 
    MainImg.src=smallImg[0].src;                                                 //MainImg s image file path is replaced with small image s  file path
}
smallImg[1].onclick=function(){
    MainImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    MainImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    MainImg.src=smallImg[3].src;
}

// for (let i = 0; i < smallImg.length; i++) {
//     smallImg[i].onclick = function() {
//         MainImg.src = this.src;                                                 // "this" refers to the clicked small image
//     };
// }
