import react from "react";
import './joy.css';
import { Link } from "react-router-dom";
import Products from './product';

export const Joy=()=>{
    const products = [
    
        
    {
        id: "61",
        name: "Claw Shoot Wired USB",
        img: "j1.webp",
        price: "₹12,999",
        discount: "20% Off",
        rating: 5
    },
    {
        id: "62",
        name: "Game Sir Nova Lite",
        img: "j2.webp",
        price: "₹11,199",
        discount: "10% Off",
        rating: 4
    },
    {
        id: "63",
        name: "Enter USB Game Pad",
        img: "j3.webp",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "64",
        name: "Zebronica Max ",
        img: "j5.webp",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "65",
        name: "Claw Shoot Wired USB",
        img: "j6.jpg",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "66",
        name: "Claw Shoot Wired USB ",
        img: "j7.jpg",
        price: "₹9,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "67",
        name: "Cosmic Byte",
        img: "j15.jpg",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "68",
        name: "Game Sir Nova Lite",
        img: "j18.jpg",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "69",
        name: "Zebronica Max",
        img: "j7.jpg",
        price: "₹14,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "70",
        name: "Cosmic Byte ",
        img: "j9.jpg",
        price: "₹11,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "71",
        name: "Game Sir Nova Lite",
        img: "j10.jpg",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "72",
        name: "Claw Shoot Wired USB",
        img: "j11.jpg",
        price: "₹1,599",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "73",
        name: "Enter USB Game Pad",
        img: "j12.jpg",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "74",
        name: "Cosmic Byte",
        img: "j13.jpg",
        price: "₹2,799",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "75",
        name: "Enter USB Game Pad",
        img: "j14.jpg",
        price: "₹12,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "76",
        name: "Zebronica Max",
        img: "j15.jpg",
        price: "₹13,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "77",
        name: "Cosmic Byte",
        img: "j16.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "78",
        name: "Claw Shoot Wired USB ",
        img: "j17.jpg",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "79",
        name: "Enter USB Game Pad",
        img: "j18.jpg",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "80",
        name: "Game Sir Nova Lite",
        img: "j19.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    }
];


    
  

  return (
   <div>
    <h1 className="h1d1">Joy Stick</h1>
    <div className="product-gridjoy">
      
      {products.map((item, index) => (
        <div className="card1joy" key={item.id}>
            <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricejoy">{item.price}</div>
          <div className="discountjoy">{item.discount}</div>
          <div className="ratingjoy">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliveryjoy"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btnjoy">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};