import react from "react";
import './neckband.css';
import Products from './product';
import { Link } from "react-router-dom";

export const Neckband=()=>{

   const products = [
    
    
  { id: "181", name: "Boat N1 SWS", img: "p1.jpg", price: "₹2,999", discount: "20% Off", rating: 5 },
  { id: "182", name: "Boat Buds VS104", img: "p2.jpg", price: "₹1,199", discount: "10% Off", rating: 4 },
  { id: "183", name: "Boat Buds N1", img: "p3.jpg", price: "₹1899", discount: "15% Off", rating: 4 },
  { id: "184", name: "Boat Buds N1", img: "p4.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "185", name: "Boat Buds 124", img: "p5.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "186", name: "Boat Buds N1 Pro", img: "p6.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "187", name: "Boat Buds N1 Pro Gold", img: "p7.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "188", name: "Boat Airdrops joy", img: "p89.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "189", name: "Boat Master Buds", img: "p9.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "190", name: "Boat Buds N1 Pro", img: "p10.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "191", name: "Boat Buds VS601", img: "p11.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "192", name: "Boat Buds VS601", img: "p12.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "193", name: "Boat Buds VS112", img: "p13.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "194", name: "Boat Buds VS104", img: "p14.webp", price: "₹3799", discount: "30% Off", rating: 3 },
  { id: "195", name: "Boat Buds VS155", img: "p15.webp", price: "₹2899", discount: "15% Off", rating: 4 },
  { id: "196", name: "Boat Buds N1 Pro", img: "p16.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "197", name: "Boat Buds VS601", img: "p17.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "198", name: "Boat Buds VS601", img: "p18.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "199", name: "Boat Buds VS112", img: "p19.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "200", name: "Boat Buds VS104", img: "p20.jpg", price: "₹3799", discount: "30% Off", rating: 3 }
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
