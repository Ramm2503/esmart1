import react from "react";
import './realme.css';
import { Link } from "react-router-dom";
import Products from './product';

export const Realme=()=>{
   const products = [
    
    
  { id: "261", name: "Realme N1 SWS", img: "real1.webp", price: "₹2,999", discount: "20% Off", rating: 5 },
  { id: "262", name: "Realme Buds VS104", img: "real2.webp", price: "₹1,199", discount: "10% Off", rating: 4 },
  { id: "263", name: "Realme Buds N1", img: "real3.webp", price: "₹1899", discount: "15% Off", rating: 4 },
  { id: "264", name: "Realme Buds N1", img: "real4.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "265", name: "Realme Buds 124", img: "real5.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "266", name: "Realme Buds N1 Pro", img: "real5.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "267", name: "Realme Buds N1 Pro Gold", img: "real6.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "268", name: "Realme Airdrops joy", img: "real7.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "269", name: "Realme Master Buds", img: "real8.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "270", name: "Realme Buds N1 Pro", img: "real9.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "271", name: "Realme Buds VS601", img: "real10.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "272", name: "Realme Buds VS601", img: "real11.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "273", name: "Realme Buds VS112", img: "real12.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "274", name: "Realme Buds VS104", img: "real13.webp", price: "₹3799", discount: "30% Off", rating: 3 },
  { id: "275", name: "Realme Buds VS155", img: "real14.webp", price: "₹2899", discount: "15% Off", rating: 4 }
];

    
  

  return (
    <div>
      <h1 className="h1d">Realme Earbuds</h1>
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
