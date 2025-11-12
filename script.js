               //these are the js code for the project .
const products = [
  {
    id: 1,
    price: 29,
    image: "images/image-1.jpg",
    description: "Wireless Bluetooth headphones with noise cancellation",
    productName: "Premium Wireless Headphones"
  },
  {
    id: 2,
    price: 599,
    image: "images/image-2.jpg",
    description: "Latest smartphone with high-resolution camera and fast processor",
    productName: "Smartphone Pro Max"
  },
  {
    id: 3,
    price: 89,
    image: "images/image-3.jpg",
    description: "Fitness tracker with heart rate monitor and GPS",
    productName: "Fitness Smartwatch"
  },
  {
    id: 4,
    price: 49,
    image: "images/image-4.jpg",
    description: "Water-resistant backpack with laptop compartment",
    productName: "Urban Backpack"
  },
  {
    id: 5,
    price: 20,
    image: "images/image-5.jpg",
    description: "Ceramic coffee mug with ergonomic handle",
    productName: "Classic Coffee Mug"
  },
  {
    id: 6,
    price: 129,
    image: "images/image-6.jpg",
    description: "Portable Bluetooth speaker with 360° sound",
    productName: "Wireless Speaker"
  },
  {
    id: 7,
    price: 79,
    image: "images/image-7.jpg",
    description: "Mechanical gaming keyboard with RGB lighting",
    productName: "Gaming Keyboard"
  },
  {
    id: 8,
    price: 38,
    image: "images/image-8.jpg",
    description: "Insulated stainless steel water bottle",
    productName: "Thermal Water Bottle"
  },
  {
    id: 9,
    price: 190,
    image: "images/image-9.avif",
    description: "10-inch tablet with stylus support",
    productName: "Digital Tablet"
  },
  {
    id: 10,
    price: 24,
    image: "images/image-10.jpg",
    description: "LED desk lamp with adjustable brightness",
    productName: "Smart Desk Lamp"
  },
  {
    id: 11,
    price: 149,
    image: "images/image-11.jpg",
    description: "Compact digital camera for beginners",
    productName: "Digital Camera"
  },
  {
    id: 12,
    price: 69,
    image: "images/image-12.jpg",
    description: "Fast wireless charging pad for multiple devices",
    productName: "Wireless Charging Station"
  }
];
        

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
      <div class="item">
    <img width="100%" height="300" src=${image} alt="This is an image">
    <div class="details">
        <h3>${productName}</h3>
        <p>${description}</p>
        <div class="price_quantity">
            <h2>$ ${price}</h2>
            <div class="button">
                <i class="fa-solid fa-minus"></i>
                <div class="quantity">0</div>
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>
   </div>  `
    )
   }).join("")
  )
}

showCard();

