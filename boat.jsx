import react from "react";
import './boat.css';
import { Link } from "react-router-dom";
import Products from './product';
export const Boat=()=>{
   const products = [
    
    
    
  { id: "276", name: "Boat N1 SWS", img: "boat1.webp", price: "₹2,999", discount: "20% Off", rating: 5 },
  { id: "277", name: "Boat Buds VS104", img: "boat2.webp", price: "₹1,199", discount: "10% Off", rating: 4 },
  { id: "278", name: "Boat Buds N1", img: "boat3.webp", price: "₹1899", discount: "15% Off", rating: 4 },
  { id: "279", name: "Boat Buds N1", img: "boat4.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "280", name: "Boat Buds 124", img: "boat5.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "281", name: "Boat Buds N1 Pro", img: "boat6.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "282", name: "Boat Buds N1 Pro Gold", img: "boat7.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "283", name: "Boat Airdrops joy", img: "boat8.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "284", name: "Boat Master Buds", img: "boat9.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "285", name: "Boat Buds N1 Pro", img: "boat10.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "286", name: "Boat Buds VS601", img: "boat11.webp", price: "₹1499", discount: "30% Off", rating: 3 },
  { id: "287", name: "Boat Buds VS601", img: "boat13.webp", price: "₹1599", discount: "30% Off", rating: 3 },
  { id: "288", name: "Boat Buds VS112", img: "boat14.webp", price: "₹2499", discount: "30% Off", rating: 3 },
  { id: "289", name: "Boat Buds VS104", img: "boat15.webp", price: "₹3799", discount: "30% Off", rating: 3 },
  { id: "290", name: "Boat Buds VS155", img: "boat12.webp", price: "₹2899", discount: "15% Off", rating: 4 }
];

    
    
  

  return (
    <div>
      <h1 className="h1d">Boat earbuds</h1>
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
