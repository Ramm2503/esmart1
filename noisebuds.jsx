import React from "react";
import './noisebads.css';
import Products from './product';
import { Link } from "react-router-dom";

export const Noisebads = () => {
  
  const products = [
    
    
  { id: "201", name: "NoisenBuds N1 SWS", img: "./noise1.jpg", price: "₹12,999", discount: "20% Off", rating: 5 },
  { id: "202", name: "Noise Buds VS104", img: "noise2.jpg", price: "₹1,199", discount: "10% Off", rating: 4 },
  { id: "203", name: "Noise Buds N1", img: "noise3.jpg", price: "₹899", discount: "15% Off", rating: 4 },
  { id: "204", name: "Noise Buds N1", img: "noise5.jpg", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "205", name: "Portable Fan", img: "noise6.jpg", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "206", name: "Noise Buds N1 Pro Green", img: "noise7.jpg", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "207", name: "Noise Buds N1 Pro Gold", img: "noise8.jpg", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "208", name: "Noise Airdrops joy", img: "noise9.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "209", name: "Noise Master Buds", img: "noise10.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "210", name: "Noise Buds N1 Pro", img: "noise11.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "211", name: "Noise Buds VS601", img: "noise12.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "212", name: "Noise Buds VS601", img: "noise13.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "213", name: "Noise Buds VS112", img: "noise14.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "214", name: "Noise Buds VS104", img: "noise15.webp", price: "₹799", discount: "30% Off", rating: 3 },
  { id: "215", name: "Noise Buds VS155", img: "noise3.jpg", price: "₹899", discount: "15% Off", rating: 4 }
];

    
    


  return (
   <div>
    <h1 className="h1d">Noise Earbuds </h1>
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
