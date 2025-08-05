import react from "react";
import './oneplus.css';
import Products from './product';
import { Link } from "react-router-dom";

export const Oneplus=()=>{
   
  const products = [
    
    
  { id: "231", name: "Oneplus N1 SWS", img: "oneplus1.webp", price: "₹12,999", discount: "20% Off", rating: 5 },
  { id: "232", name: "Oneplus VS104", img: "oneplus2.webp", price: "₹1,199", discount: "10% Off", rating: 4 },
  { id: "233", name: "Oneplus Buds N1", img: "oneplus3.webp", price: "₹899", discount: "15% Off", rating: 4 },
  { id: "234", name: "Oneplus Buds N1", img: "oneplus4.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "235", name: "Oneplus Buds Nord", img: "oneplus5.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "236", name: "Oneplus Buds N1 Pro", img: "oneplus6.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "237", name: "Oneplus Buds N1 Pro", img: "oneplus7.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "238", name: "Oneplus Airdrops Joy", img: "oneplus8.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "239", name: "Oneplus Master Buds", img: "oneplus9.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "240", name: "Oneplus Buds N1 Pro", img: "oneplus10.webp", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "241", name: "Oneplus Buds VS601", img: "oneplus11.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "242", name: "Oneplus Buds VS601", img: "oneplus12.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "243", name: "Oneplus Buds VS112", img: "oneplus13.jpg", price: "₹499", discount: "30% Off", rating: 3 },
  { id: "244", name: "Oneplus Buds VS104", img: "oneplus14.webp", price: "₹799", discount: "30% Off", rating: 3 },
  { id: "245", name: "Oneplus Buds VS155", img: "oneplus15.webp", price: "₹899", discount: "15% Off", rating: 4 }
];

    
    


  return (
    
    <div>
         <h1 className="h1d">Oneplus earbuds </h1>
    
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