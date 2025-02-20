var MainImg=document.getElementById("MainImg");                               
var smallImg=document.getElementsByClassName("small-img");         
var price=document.getElementById("price");
var details=document.getElementById("details");             

smallImg[0].onclick=function(){                                                  //smallImg[0] this will refer to the first small image it its counted with index 
    MainImg.src=smallImg[0].src;                                                 //MainImg s image file path is replaced with small image s  file path
    price.innerHTML = "Rs. 1200"
    details.innerHTML = "A spicy and savory choice with generous pepperoni slices, mozzarella cheese, and tangy tomato sauce. A great option for those who love a little heat with their pizza."
}
smallImg[1].onclick=function(){
    MainImg.src=smallImg[1].src;
    price.innerHTML = "Rs. 1300"
    details.innerHTML = "Smoky barbecue sauce, tender grilled chicken, and melted cheese create a flavorful pizza with a rich and sweet twist. Perfect for fans of savory BBQ flavors"
}
smallImg[2].onclick=function(){
    MainImg.src=smallImg[2].src;
    price.innerHTML = "Rs. 900"
    details.innerHTML = "Loaded with fresh, healthy vegetables like bell peppers, onions, olives, and mushrooms, this pizza is topped with cheese and olive oil for a wholesome, delicious meal"
}
smallImg[3].onclick=function(){
    MainImg.src=smallImg[3].src;
    price.innerHTML = "Rs. 1500"
    details.innerHTML = "The Four Cheese Pizza is an irresistible choice for cheese enthusiasts. It combines mozzarella, cheddar, parmesan, and gorgonzola, giving you a rich, creamy, and sharp combination of flavors. The perfect choice for those who crave a decadent, cheese-filled pizza experience!"
}

// for (let i = 0; i < smallImg.length; i++) {
//     smallImg[i].onclick = function() {
//         MainImg.src = this.src;                                                 // "this" refers to the clicked small image
//     };
// }
