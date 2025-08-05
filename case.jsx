import react from "react";
import './case.css';
import Products from './product';
import { Link } from "react-router-dom";

export const  Case=()=>{
      
   const products = [
    
    
  { id: "161", name: "Iphone 16", img: "i161.webp", price: "₹2,999", discount: "20% Off", rating: 5 },
  { id: "162", name: "Iphone 16+", img: "i164.webp", price: "₹1,199", discount: "10% Off", rating: 4 },
  { id: "163", name: "Iphone 14", img: "i165.webp", price: "₹1899", discount: "15% Off", rating: 4 },
  { id: "164", name: "Iphone 13", img: "i166.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "165", name: "Iphone 11", img: "i167.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "166", name: "Oneplus 9r", img: "9r3.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "167", name: "Oneplus 9r", img: "9r4.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "168", name: "Oneplus 9r", img: "9r5.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "169", name: "Oneplus 9r", img: "9r7.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "170", name: "Oneplus 9r", img: "9r8.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "171", name: "Samgung", img: "a1.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "172", name: "Samgung", img: "a2.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "173", name: "Samgung", img: "a3.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "174", name: "Samgung", img: "a4.webp", price: "₹3799", discount: "30% Off", rating: 3 },
  { id: "175", name: "Samgung", img: "a5.webp", price: "₹2899", discount: "15% Off", rating: 4 },
  { id: "176", name: "Oneplus 11R", img: "11r1.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "177", name: "Oneplus 11R", img: "11r2.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "178", name: "Oneplus 11R", img: "11r3.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "179", name: "Oneplus 11R", img: "11r4.webp", price: "₹3799", discount: "30% Off", rating: 3 },
  { id: "180", name: "Oneplus 11R", img: "11r5.webp", price: "₹2899", discount: "15% Off", rating: 4 }
];

    
    
  

  return (
    <div>
    <h1 className="h1d">Mobile Case</h1>
    <div className="product-grid1">
      
      {products.map((item, index) => (
        <div className="card2" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="price1">{item.price}</div>
          <div className="discount1">{item.discount}</div>
          <div className="rating1">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="delivery1"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btn1">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};
