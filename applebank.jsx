import react from "react";
import './applebank.css';
import { Link } from "react-router-dom";
import products from './product';

export const Applebank=()=>{
   const products = [
    
  {
    id: "306",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank1.webp",
    price: "₹2,999",
    discount: "20% Off",
    rating: 5
  },
  {
    id: "307",
    name: "Boat New launch PB331",
    img: "bank2.webp",
    price: "₹3,199",
    discount: "10% Off",
    rating: 4
  },
  {
    id: "308",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank3.webp",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "309",
    name: "Boat New launch PB331",
    img: "bank4.webp",
    price: "₹2,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "310",
    name: "Boat New launch PB331",
    img: "bank5.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "311",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank6.webp",
    price: "₹9,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "312",
    name: "Boat New launch PB331",
    img: "bank7.webp",
    price: "₹10,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "313",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank8.webp",
    price: "₹12,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "314",
    name: "Boat New launch PB331",
    img: "bank9.webp",
    price: "₹14,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "315",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank10.webp",
    price: "₹11,499",
    discount: "30% Off",
    rating: 3
  }
];


    
  

  return (
   <div>
    <h1 className="h1dbank">Apple's Power Bank</h1>
    <div className="product-gridbank">
      
      {products.map((item, index) => (
        <div className="cardbank" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricebank">{item.price}</div>
          <div className="discountbank">{item.discount}</div>
          <div className="ratingbank">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverybank"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btnbank">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};


    