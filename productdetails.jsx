import react from "react";
import { Link, useParams } from "react-router-dom";
import products from "./product";
import './productdetails.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Products from "./product";


function ProductsDetails() {
  const navigate=useNavigate();
  const { id } = useParams();
  const products1 = products.find((p) => p.id === id);
  console.log(products1);

  if (!products1) return <p>Product not found</p>
   
  const handleAddToCart=()=>{
    navigate(`/addtocart/${products1.id}`)
  }

  const loadRazorpay = (order) => {
    const options = {
      key: "rzp_test_W0TqtXt0llvHgj", // ✅ Replace with your test key
      amount: order.amount,
      currency: order.currency,
      name: "E-S M A R T",
      description: "Fashion Purchase",
      order_id: order.id,
      handler: function (response) {
        alert("✅ Payment Successful!");
        console.log(response);
      },
      prefill: {
        name: "Customer Name",
        email: "email@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleBuyNow = async () => {
  try {
    const price = parseInt(products1.price); // ✅ Ensure price is number
    console.log("🟡 Creating order for ₹", price);

    const res = await axios.post("http://localhost:5000/create-order", {
      amount: price,
    });

    if (res.data && res.data.id) {
      console.log("🟢 Order Created:", res.data);
      loadRazorpay(res.data);
    } else {
      throw new Error("Invalid order data from server");
    }
  } catch (err) {
    console.error("🔴 Error creating Razorpay order:", err.response?.data || err.message);
    alert("Error creating payment order. Please check the server.");
  }

  }
  return (
    <div className="fullproduct">
      <div className="productsdetails">
        <img src={`/${products1.img}`} alt="" />
        <div className="subdiv">
          <h2 className="non">{products1.name}</h2>
          <p>{products1.details}</p>
          <p>Price:{products1.price}</p>
          <p>Discount:{products1.discount}</p>
          <p>Rating:{products1.rating}</p>

          

          <div class="service-features">
            <div class="feature-box">
              <i class="fas fa-exchange-alt"></i>
              <p>7 days<br /><span>Service Centre Replacement</span></p>
            </div>
            <div class="feature-box">
              <i class="fas fa-truck"></i>
              <p>Free<br /><span>Delivery</span></p>
            </div>
            <div class="feature-box">
              <i class="fas fa-shield-alt"></i>
              <p>1 Year<br /><span>Warranty</span></p>
            </div>
            <div class="feature-box">
              <i class="fas fa-money-bill-wave"></i>
              <p>Cash/Pay<br /><span>on Delivery</span></p>
            </div>
            <div class="feature-box">
              <i class="fas fa-tools"></i>
              <p>Installation<br /><span>available</span></p>
            </div>
          </div>



          <div className="flexbutton">
            <div> <button className="buttondiff" onClick={handleAddToCart}> Add to Cart</button></div>

            {/* <!-- From Uiverse.io by satyamchaudharydev -->  */}

            <div>
              <button class="buttonadd" onClick={handleBuyNow}> 
                Buy Now
                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
        
      </div>
      <div className="btndiv">
      {/* <button class="btnwatch">Watch</button> */}
      

      </div>
      {/* <Link to="/cart"><button class="buttondiv">list</button></Link> */}
    </div>
  )
};
export default ProductsDetails;  