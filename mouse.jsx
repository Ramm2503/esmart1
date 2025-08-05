import react from "react";
import './mouse.css';
import Products from './product';
import { Link } from "react-router-dom";

export const Mouse=()=>{

 const products = [
    
        
    {
        id: "81",
        name: "Logitech M240",
        img: "mouse1.jpg",
        price: "₹12,999",
        discount: "20% Off",
        rating: 5
    },
    {
        id: "82",
        name: "Hyper Pulse Fire",
        img: "mouse2.jpg",
        price: "₹11,199",
        discount: "10% Off",
        rating: 4
    },
    {
        id: "83",
        name: "Zebronics Zeb-Power",
        img: "mouse3.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "84",
        name: "Dell MS116",
        img: "mouse4.jpg",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "85",
        name: "Hyper Pulse Fire",
        img: "mouse5.jpg",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "86",
        name: "Logitech M240",
        img: "mouse6.jpg",
        price: "₹9,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "87",
        name: "Zebronics Zeb-Power",
        img: "mouse7.jpg",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "88",
        name: "Hyper Pulse Fire",
        img: "mouse8.jpg",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "89",
        name: "Dell MS116",
        img: "mouse9.jpg",
        price: "₹14,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "90",
        name: "Hyper Pulse Fire",
        img: "mouse10.jpg",
        price: "₹11,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "91",
        name: "Hyper Pulse Fire",
        img: "mouse11.jpg",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "92",
        name: "Zebronics Zeb-Power",
        img: "mouse12.jpg",
        price: "₹1,599",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "93",
        name: "Logitech M240",
        img: "mouse13.jpg",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "94",
        name: "Zebronics Zeb-Power",
        img: "mouse14.jpg",
        price: "₹2,799",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "95",
        name: "Dell MS116",
        img: "mouse15.jpg",
        price: "₹12,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "96",
        name: "Zebronics Zeb-Power",
        img: "mouse16.jpg",
        price: "₹13,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "97",
        name: "Hyper Pulse Fire",
        img: "mouse17.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "98",
        name: "Hyper Pulse Fire",
        img: "mouse18.jpg",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "99",
        name: "Zebronics Zeb-Power",
        img: "mouse19.jpg",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "100",
        name: "Logitech M240",
        img: "mouse20.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    }
];


    
  

  return (
   <div>
    <h1 className="h1d1">Mouse</h1>
    <div className="product-gridmouse">
      
      {products.map((item, index) => (
        <div className="card1mouse" key={item.id}>
            <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricemouse">{item.price}</div>
          <div className="discountmouse">{item.discount}</div>
          <div className="ratingmouse">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverymouse"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btnmouse">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};