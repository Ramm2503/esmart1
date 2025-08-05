import react from "react";
import'./middle.css';
import { Link } from "react-router-dom";
import Products from './product';

export const Middle=()=>{
     const products = [
    
    {
        id: "21",
        name: "Noise N1",
        img: "w21.webp",
        price: "₹2,999",
        discount: "20% Off",
        rating: 5
    },
    {
        id: "22",
        name: "Noise New launched",
        img: "w22.webp",
        price: "₹3,199",
        discount: "10% Off",
        rating: 4
    },
    {
        id: "23",
        name: "Fossil Gen 6",
        img: "w23.webp",
        price: "₹3,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "24",
        name: "Titan Smart 3 ",
        img: "w24.webp",
        price: "₹2,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "25",
        name: "FireBlout g3",
        img: "w25.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "26",
        name: "Noise ",
        img: "w26.webp",
        price: "₹9,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "27",
        name: "boat",
        img: "w27.webp",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "28",
        name: "Noise g16 ",
        img: "w28.webp",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "29",
        name: "Titan ",
        img: "w29.webp",
        price: "₹14,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "30",
        name: "Noise N1 ",
        img: "w30.webp",
        price: "₹11,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "31",
        name: "Fossil WE2",
        img: "w31.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "32",
        name: "Blout",
        img: "w32.webp",
        price: "₹1,599",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "33",
        name: "Noise g44",
        img: "w33.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "34",
        name: "Fossil F1",
        img: "w1.webp",
        price: "₹12,799",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "35",
        name: "Titan",
        img: "w35.webp",
        price: "₹4,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "36",
        name: "Titan New One",
        img: "w36.webp",
        price: "₹3,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "37",
        name: "Fossil",
        img: "w7.webp",
        price: "₹8,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "38",
        name: "Titan ",
        img: "w38.webp",
        price: "₹7,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "39",
        name: "Fossil F3",
        img: "w12.webp",
        price: "₹4,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "40",
        name: "Noise VS",
        img: "w22.webp",
        price: "₹5,899",
        discount: "15% Off",
        rating: 4
    }
];


    
  

  return (
   <div>
    <h1 className="h1d">Middle Range <br /> collections</h1>
    <div className="product-grid">
      
      {products.map((item, index) => (
        <div className="card1" key={index.id}>
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