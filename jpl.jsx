import react from "react";
import './jpl.css';
import Products from './product';
import { Link } from "react-router-dom";

export const Jpl=()=>{
    const products = [
    
    
  { id: "246", name: "JPL N1 SWS", img: "jpl14.webp", price: "₹12,999", discount: "20% Off", rating: 5 },
  { id: "247", name: "JPL VS104", img: "jpl2.webp", price: "₹1,199", discount: "10% Off", rating: 4 },
  { id: "248", name: "JPL Buds N1", img: "jpl3.webp", price: "₹899", discount: "15% Off", rating: 4 },
  { id: "249", name: "JPL Buds N1", img: "jpl4.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "250", name: "JPL Buds Nord", img: "jpl5.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "251", name: "JPL Buds N1 Pro", img: "jpl6.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "252", name: "JPL Buds N1 Pro", img: "jpl7.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "253", name: "JPL Airdrops Joy", img: "jpl8.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "254", name: "JPL Master Buds", img: "jpl9.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "255", name: "JPL Buds N1 Pro", img: "jpl10.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "256", name: "JPL Buds VS601", img: "jpl11.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "257", name: "JPL Buds VS601", img: "jpl15.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "258", name: "JPL Buds VS112", img: "jpl16.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "259", name: "JPL Buds VS104", img: "jpl17.webp", price: "₹799", discount: "30% Off", rating: 3 },
  { id: "260", name: "JPL Buds VS155", img: "jpl18.webp", price: "₹899", discount: "15% Off", rating: 4 }
];

    

  return (
    <div>
      <h1 className="h1d">JPL Earbuds</h1>
    <div className="product-grid">
      
      {products.map((item, index) => (
        <div className="card1" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="price">{item.price}</div>
          <div className="discount">{item.discount}</div>
          <div className="rating">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="delivery"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btn">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};