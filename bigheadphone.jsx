import react from "react";
import './bigheadphone.css'
import { Link } from "react-router-dom";
import Products from "./product";

export const Bigheadphone=()=>{

const products = [
    
    {
        id: "101",
        name: "Logitech M240",
        img: "h1.jpg",
        price: "₹12,999",
        discount: "20% Off",
        rating: 5
    },
    {
        id: "102",
        name: "Hyper Pulse Fire",
        img: "h2.jpg",
        price: "₹11,199",
        discount: "10% Off",
        rating: 4
    },
    {
        id: "103",
        name: "Zebronics Zeb-Power",
        img: "h19.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "104",
        name: "Dell MS116",
        img: "h4.jpg",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "105",
        name: "Hyper Pulse Fire",
        img: "h20.jpg",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "106",
        name: "Logitech M240",
        img: "h6.jpg",
        price: "₹9,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "107",
        name: "Zebronics Zeb-Power",
        img: "h7.jpg",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "108",
        name: "Hyper Pulse Fire",
        img: "h8.jpg",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "109",
        name: "Dell MS116",
        img: "h9.jpg",
        price: "₹14,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "110",
        name: "Hyper Pulse Fire",
        img: "h10.jpg",
        price: "₹11,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "111",
        name: "Hyper Pulse Fire",
        img: "h2.jpg",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "112",
        name: "Zebronics Zeb-Power",
        img: "h12.jpg",
        price: "₹1,599",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "113",
        name: "Logitech M240",
        img: "h6.jpg",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "114",
        name: "Zebronics Zeb-Power",
        img: "h14.jpg",
        price: "₹2,799",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "115",
        name: "Dell MS116",
        img: "h15.jpg",
        price: "₹12,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "116",
        name: "Zebronics Zeb-Power",
        img: "h1.jpg",
        price: "₹13,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "117",
        name: "Hyper Pulse Fire",
        img: "h17.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "118",
        name: "Hyper Pulse Fire",
        img: "h18.jpg",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "119",
        name: "Zebronics Zeb-Power",
        img: "h19.jpg",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "120",
        name: "Logitech M240",
        img: "h20.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    }
];


    
  

  return (
   <div>
    <h1 className="h1d">Mouse</h1>
    <div className="product-gridbig">
      
      {products.map((item, index) => (
        <div className="card1big" key={index}>
            <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricebig">{item.price}</div>
          <div className="discountbig">{item.discount}</div>
          <div className="ratingbig">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverybig"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btnbig">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};