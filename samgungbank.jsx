import react from "react";
import './samgungbank.css';
import Products from './product';
import { Link } from "react-router-dom";

export const Samgungbank=()=>{
    
        const products = [
    
        {
            id:"316",
            name: "Noise N1",
            img: "sam1.webp",
            price: "₹2,999",
            discount: "20% Off",
            rating: 5
        },

        {
            id:"317",
            name: "Noise New launched",
            img: "sam2.webp",
            price: "₹3,199",
            discount: "10% Off",
            rating: 4
        }

    
  ];

  return (
   <div>
    <h1 className="h1dbank1">Samgung Power Bank's</h1>
    <div className="product-gridbank1">
      
      {products.map((item, index) => (
        <div className="cardbank1" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricebank1">{item.price}</div>
          <div className="discountbank1">{item.discount}</div>
          <div className="ratingbank1">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverybank1"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btnbank1">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};


    
        