import react from "react";
import './drone.css';
import { Link } from "react-router-dom";
import Products from './product';

export const Drone=()=>{

const products = [
    
        { id:"407",
            name: "Noise N1",
            img: "tro1.webp",
            price: "₹2,999",
            discount: "20% Off",
            rating: 5
        },

        {
           id:"408",
            name: "Noise New launched",
            img: "tro2.webp",
            price: "₹3,199",
            discount: "10% Off",
            rating: 4
        },

        {
           id:"409",
            name: "Fossil Gen 6",
            img: "tro3.jpg",
            price: "₹3,899",
            discount: "15% Off",
            rating: 4
        },
        {
           id:"409",
            name: "Fossil Gen 6",
            img: "tro4.jpg",
            price: "₹3,899",
            discount: "15% Off",
            rating: 4
        }

    
  ];

  return (
   <div>
    <h1 className="h1d">Drone</h1>
    <div className="product-griddrone">
      
      {products.map((item, index) => ( 
        
        <div className="carddrone" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name}/>
          <h2>{item.name}</h2>
          <div className="pricedrone">{item.price}</div>
          <div className="discountdrone">{item.discount}</div>
          <div className="ratingdrone">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverydrone"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btndrone">Add to Cart</button>
          </Link>
        </div>
        
      ))}
      
    </div>
  
    </div>
    
  );
};
