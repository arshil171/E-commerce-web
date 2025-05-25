// const addCartButtons = document.querySelector(".cart")



//   addCartButtons.forEach(button => {
//     button.addEventListener("click",event=>{
//         const productBox = event.target.closet(".pro")
//         addToCart(productBox)
//     })
// });
// console.log(addCartButtons)
// const cartContent = document.querySelector("table")
// const addToCart = productBox =>{
//     const productImgSrc = document.querySelector("img").src;
//     const productTitle = document.querySelector(".product-title").textContents;
//     const productPrice = document.querySelector(".price1").textContents;

//     const cartBox = document.createElement("div")
//     cartBox.classList.add("cart-box")
//     cartBox.innerHTML = `
//      <tbody>
//             <tr>
//                 <td><a href=""><i class="far fa-times-circle"></i></a></td>
//                 <td><img src="${productImgSrc}" alt=""></td>
//                 <td>${productTitle}</td>
//                 <td class="cart-price">${productPrice}</td>
//                 <td class="cart-quantity"><button id="decrement">-</button><span class="number">1</span><button id="increment">+</button></td>
//                 <td>$118</td>
//             </tr>
//         </tbody> `;

//         cartContent.appendChild(cartBox)
// }









// <!-- const btn = document.getElementById("cart")
//     const productImgSrc = document.querySelector("img").src;
//     const productTitle = document.querySelector(".product-title").textContents;
//     const productPrice = document.querySelector(".price1").textContents;


// let cart = []

// btn.addEventListener("click",  () => {
//     console.log("hello")
//     // if (cart.some((element)=>element.name==product.name)) {
//     //   alert("product already in cart");
//     //   return;
//     // }
//     <!-- let quantity = 1;
//     cart.push(productImgSrc ,productTitle ,productPrice);
//     localStorage.setItem("cartData", JSON.stringify(cart));
//     alert("product added to cart");
//     console.log(cart); -->
//   }); -->

// <!-- let btn = document.querySelectorAll(".btn");
//     let cart1 = [];
//     const productImgSrc = document.querySelector("img").src;
//     const productTitle = document.querySelector(".product-title");
//     const productPrice = document.querySelector(".price1"); -
   
//     function showdata(){
//       btn.addEventListener( (element)=>{
//         console.log(element.productTitle)
//         console.log(element.productImgSrc)
//         console.log(element.productPrice)
//         cart1.push(element.productImgSrc ,element.productTitle ,element.productPrice )
//         console.log(cart1)
//       })
//     }
//     showdata(); -->




//  <!-- const product = this.closest(".pro");

//         const productImg = product.querySelector("img").getAttribute("src");
//         const title = product.querySelector(".product-title").innerText;
//         const price = product.querySelector(".price1").innerText;

//         const item = {
//             image: productImg,
//             title: title,
//             price: price
//         };
//          console.log(item)
//          console.log(item.title)
//          console.log(title)
//         cartItems.push(item);
//         if(item.title!=title){
//             alert("product already in cart")
//             return;
//             localStorage.setItem("cart", JSON.stringify(cartItems));

//         alert(`${title} added to cart`);
//         }