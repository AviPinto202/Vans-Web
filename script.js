       console.log("str")
// ============================================
//Product Page Start


let shoppingCart = document.querySelector('.fa-shopping-cart')
shoppingCart.addEventListener(
    'click',
    function() {
        document.querySelector('.mini-cart').classList.toggle('show');
    }
)


close_MiniCart.addEventListener(
    'click',
    function() {
        document.querySelector('.mini-cart').classList.toggle('show');
    }
)


function addToCart(event){

    let cartCounter = document.querySelector('.top-navbar span'); // משתנה של העיגול האדום הקטן
    let itemCounter = document.querySelector('.product_page .amount input').value; // משתנה של הערך בכפתור של הפלוס והמינוס

    let curretCounter = Number(cartCounter.innerHTML);
    cartCounter.innerHTML = curretCounter + Number(itemCounter); // מכניס את המספר בכפתור פלוס מינוס לעיגול האדום

    cartCounter.classList.add('show');
    document.querySelector('.product_page .amount input').value = 1;

    let cartItem = {
    imageUrl : document.querySelector('#myimage1').src,
    productTitle : document.querySelector('.product_name h1').innerHTML,
    productPrice : document.querySelector('.product_price p span').innerHTML,
    productColor : document.querySelector('.product_color p').innerHTML,
    productquantity : itemCounter,
    productSize : document.querySelector('#sizes').value,
    productID : document.querySelector('#add_to_cart').dataset.productid,
    productSKU : document.querySelector('#add_to_cart').dataset.productsku
    }
    
    console.log(cartItem);

    createItem(cartItem);
    subTotalCalc(cartItem,cartItem.productquantity,cartItem.productPrice);
    miniCartToStorage();
    getStorage();
}

function createItem(cartItem){

    let contnetBlock = document.querySelector('.mini-cart .content');

    let contnetBlockParagraph = document.querySelector('.mini-cart .content p');
    contnetBlockParagraph.style.display = 'none';

    let productItem = '<div class="item">' + 
    '<div class="image">' + 
    '<img src="' + cartItem.imageUrl + '"width="100" height="100">' + '</div>' +
    '<div class="details">' + '<div class="title">' + cartItem.productTitle + '</div>' +
    '<div class="price">' + cartItem.productPrice + '</div>' + 
    '<div class="color">' + cartItem.productColor + '</div>' +
    '<div class="size">' + cartItem.productSize + '</div>' +
    '<div class="quantity">' + cartItem.productquantity + '</div>' +
    '</div>' + '</div>';

    contnetBlock.innerHTML += productItem;

    
}

function productToStorage(productID,productArray){

   let productItems = localStorage.getItem("productItems");

   if(productItems){

   } else {
       let newItem = [];
       newItem.push(productArray);
       console.log(newItem);

       localStorage.setItem('productItems',JSON.stringify(productArray))

   }
}

function miniCartToStorage(){
    localStorage.setItem('mini-cart' , document.querySelector('.content').innerHTML ) 
   }   

   function getStorage(){
       let miniCartFromStorage = localStorage.getItem("mini-cart");
       if(miniCartFromStorage){
        document.querySelector('.mini-cart .content').innerHTML = miniCartFromStorage;
       }
   }

   
getStorage();

 function subTotalCalc(cartItem,productquantity,productPrice){ // להמשיך מפה

    let subTotal = document.querySelector('.button_part .subTotal p');


     subTotal.innerHTML = (productquantity * productPrice);
     console.log(cartItem);
    }


function emptyCart(){
    let cartCounter = document.querySelector('.top-navbar span');
    cartCounter.innerHTML = '';
    cartCounter.classList.remove('show');
}

//פונקציה שמורידה את המספרים של הכמות
document.querySelector('.number-decrement').addEventListener(
    'click',
    function(){
        if (document.querySelector('.product_page .amount input').value > 0){
            document.querySelector('.product_page .amount input').value --
        }
    }
)

//פונקציה שמעלה את המספרים של הכמות
document.querySelector('.number-increment').addEventListener(
    'click',
    function(){
            document.querySelector('.product_page .amount input').value ++
    }
)

//-------------------------------------------------------------------------------
//פונקציה של החלפת תמונות התצוגה

let imgSlider = document.getElementsByClassName('img_slider')//יוצר משתנה לכל התמונות שבצד

let activeImg = document.getElementsByClassName('active')//יוצר משתנה שמוסיף את המילה אקטיב

for (let i = 0; i < imgSlider.length; i++) { // לולאה שעוברת על התמונות שבצד ומוסיפה להם את האווינט קליק 
    imgSlider[i].addEventListener('click' , function(){
        if (activeImg.length > 0){
            activeImg[0].classList.remove('active')
        }

        this.classList.add('active')
        document.getElementById('myimage').src = this.src
    })
    
}

//-------------------------------------------------------------------------------
//פונקציה של הוספת תגובה
document.querySelector('#commet_btn').addEventListener(
    'click'
    ,function(){
      let commentName = document.querySelector('#nameWriter').value;
      let NameInTitle = document.querySelector('.comment_title span');
      let commentbox = document.querySelector('#comment_box').value;
      let commentReviewArea = document.querySelector('.comment_review_area');

      let d = new Date();
      d.getFullYear(2020)
      //document.querySelector('.comment_time').innerHTML = d;

      document.querySelector('.no_comments').style.display = "none";

        NameInTitle.innerHTML += '<div class="comment_review">' + '<p class="comment_title">' + '<span>' + commentName + '</span>' + ' said:' + '</p>' +
         '<span class="comment_time">' + d +'</span>' +
        '<p class="comment_review_area">' + commentbox + '</p>' + '</div>';
      
    }
)

document.querySelector('.add_to_cart .btn_3').addEventListener(
       'click',
       addToCart,
)


console.log("finish")