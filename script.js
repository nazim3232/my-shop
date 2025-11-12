               //these are the js code for the project .
const products = [
  {
    id: "one",
    price: 29,
    image: "images/image-1.jpg",
    description: "Wireless Bluetooth headphones with noise cancellation",
    productName: "Premium Wireless Headphones"
  },
  {
    id: "two",
    price: 599,
    image: "images/image-2.jpg",
    description: "Latest smartphone with high-resolution camera and fast processor",
    productName: "Smartphone Pro Max"
  },
  {
    id: "three",
    price: 89,
    image: "images/image-3.jpg",
    description: "Fitness tracker with heart rate monitor and GPS",
    productName: "Fitness Smartwatch"
  },
  {
    id: "four",
    price: 49,
    image: "images/image-4.jpg",
    description: "Water-resistant backpack with laptop compartment",
    productName: "Urban Backpack"
  },
  {
    id: "five",
    price: 20,
    image: "images/image-5.jpg",
    description: "Ceramic coffee mug with ergonomic handle",
    productName: "Classic Coffee Mug"
  },
  {
    id: "six",
    price: 129,
    image: "images/image-6.jpg",
    description: "Portable Bluetooth speaker with 360° sound",
    productName: "Wireless Speaker"
  },
  {
    id: "seven",
    price: 79,
    image: "images/image-7.jpg",
    description: "Mechanical gaming keyboard with RGB lighting",
    productName: "Gaming Keyboard"
  },
  {
    id: "eight",
    price: 38,
    image: "images/image-8.jpg",
    description: "Insulated stainless steel water bottle",
    productName: "Thermal Water Bottle"
  },
  {
    id: "nine",
    price: 190,
    image: "images/image-9.avif",
    description: "10-inch tablet with stylus support",
    productName: "Digital Tablet"
  },
  {
    id: "ten",
    price: 24,
    image: "images/image-10.jpg",
    description: "LED desk lamp with adjustable brightness",
    productName: "Smart Desk Lamp"
  },
  {
    id: "eleven",
    price: 149,
    image: "images/image-11.jpg",
    description: "Compact digital camera for beginners",
    productName: "Digital Camera"
  },
  {
    id: "twalep",
    price: 69,
    image: "images/image-12.jpg",
    description: "Fast wireless charging pad for multiple devices",
    productName: "Wireless Charging Station"
  }
];
  
const basket = [];


///this is the data in the product in the array ;
//console.log(products);
let shop = document.querySelector('#shop');
//console.log(shop);
//console.log(products[0].price + products[2].price);

//this is the function where I show the card dinamically with the javascript.
function showCard() 
{
  return (shop.innerHTML = products.map((x)=>{
    const { id , price , image , description, productName} = x;
    return (
        `
      <div  id ="pproduct-id-${id}" class="item">
    <img width="100%" height="300" src=${image} alt="This is an image">
    <div class="details">
        <h3>${productName}</h3>
        <p>${description}</p>
        <div class="price_quantity">
            <h2>$ ${price}</h2>
            <div class="button">
                <i onclick= "decrement(${id})"  class="fa-solid fa-minus"></i>
                <div  id=${id} class="quantity">0</div>
                <i onclick = "increment(${id})"  class="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>
   </div>  `
    )
   }).join("")
  )
}

showCard();

//this is the increment function 

let increment = (id)=>{
  let card = id;
  //console.log(card);
  //console.log("This is the increment function .");
let search = basket.find((a)=> a.id === card.id);
if(search=== undefined)
{
  basket.push({
    id : card.id,
    item : 1
  })
}
else{
  search.item += 1;
}

  //console.log(basket);
  update(card.id);
}

//this is the decrement function 
let decrement = (id)=>{
  let card =id;

  //console.log(card);
  //console.log("This is the increment function .");
let search = basket.find((a)=> a.id === card.id);
if(search.item=== 0) return ;
else{
  search.item -= 1;
}
//console.log(basket)
  //console.log(card.id);
  //console.log("This is the decrement function .")
   update(card.id);
}


//this is the update function 

let update = (a)=>{
   // console.log("This is the update function .")

     let search = basket.find((x)=>x.id ==a);
     document.getElementById(a).innerText = search.item;

  }










