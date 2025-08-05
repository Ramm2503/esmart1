import react from "react";
import './boult.css'
import { Link } from "react-router-dom";
import Products from './product';


export const Boult=()=>{
    
  const products = [
    
    
  { id: "216", name: "Boult Z60", img: "boult2.jpg", price: "₹12,999", discount: "20% Off", rating: 5 },
  { id: "217", name: "Boult Audio K40", img: "boult3.jpg", price: "₹1,199", discount: "10% Off", rating: 4 },
  { id: "218", name: "Boult Buds N1", img: "boult4.jpg", price: "₹1999", discount: "15% Off", rating: 4 },
  { id: "219", name: "Boult Buds N1", img: "boult5.jpg", price: "₹1099", discount: "30% Off", rating: 3 },
  { id: "220", name: "Boult Buds Nit 07", img: "boult6.webp", price: "₹999", discount: "30% Off", rating: 3 },
  { id: "221", name: "Boult Buds N1 Pro Green", img: "boult7.webp", price: "₹699", discount: "30% Off", rating: 3 },
  { id: "222", name: "Boult Buds N1 Pro Gold", img: "boult8.webp", price: "₹799", discount: "30% Off", rating: 3 },
  { id: "223", name: "Boult Z40 Sliver", img: "boult9.webp", price: "999", discount: "30% Off", rating: 3 },
  { id: "224", name: "Boult Master Buds", img: "boult10.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "225", name: "Boult Z40", img: "boult11.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "226", name: "Boult Buds VS601", img: "boult12.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "227", name: "Boult Buds VS601", img: "boult13.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "228", name: "Boult Buds VS112", img: "boult14.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "229", name: "Boult Buds VS104", img: "boult15.webp", price: "₹1799", discount: "30% Off", rating: 3 },
  { id: "230", name: "Boult Buds VS155", img: "boult16.webp", price: "₹1899", discount: "15% Off", rating: 4 }
];

    
  

  return (
    <div>
      <h1 className="h1d">Boult Earbuds</h1>
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
