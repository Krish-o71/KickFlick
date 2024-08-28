const wrapper = document.querySelector(".sliderWrapper")

const menuItem = document.querySelectorAll(".menuItem")

const product=[
  {
  id: 1,
  title: "AIR JORDAN",
  price: "12,000",
  colors:[
    {
    code:"black",
    img: "./img/air.png"
  },
  {
    code:"dark blue",
    img:"./img/air2.png"
  },
  ],
},
{
  id:2,
  title:"Air force",
  price:"15,000",
  colors:[
    {
      code:"lightgray",
      img:"./img/airforce2.png"
    },
    {
      code:"green",
      img: "./img/jordan2.png",

    },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: "6,990",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer1.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Balenciaga",
    price: "12,000",
    colors: [
      {
        code: "black",
        img: "./img/balenciaga1.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Dunk",
    price: "11,895",
    colors: [
      {
        code: "gray",
        img: "./img/dunk.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct=product[0]

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

menuItem.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    //change the currrent slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change the choosen product
    choosenProduct=product[index]
   
    //change text of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assining new colors

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
 });
});


currentProductColors.forEach((color,index) => {
  color.addEventListener("click",()=>{
    currentProductImg.src=choosenProduct.colors[index].img
  })
});

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
     currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white"
      size.style.color="black"
     });
    size.style.backgroundColor="black"
    size.style.color="white"
  });

});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(" .payment");
const close = document.querySelector(" .close");

productButton.addEventListener("click",() => {
  payment.style.display="flex";
});
 close.addEventListener("click",() => {
  payment.style.display="none";

 });