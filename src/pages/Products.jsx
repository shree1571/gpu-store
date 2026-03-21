import "./Products.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import rtx3050 from "../gpu images/3050.jpg";
import rtx3060 from "../gpu images/3060.jpg"
import rtx3080 from "../gpu images/3080.jpg"
import rtx3090 from "../gpu images/3090.jpg"
import rtx4060 from "../gpu images/4060.jpg"
import rtx4070 from "../gpu images/4070.webp"
import rtx4080 from "../gpu images/4080.jpg"
import rtx4090 from "../gpu images/4090.jpg"
import rx6700 from "../gpu images/6700xt.jpg"
import rx6800 from "../gpu images/6800 xt.jpg"
import rx7700 from "../gpu images/7700xt.jpg"
import rx7800 from "../gpu images/7800xt.jpg"
import rx7900 from "../gpu images/7900XTX.jpg"
import rtx3070 from "../gpu images/rtx 3070.jpg"
import rx7600 from "../gpu images/rx7600.jpg"

function Products() {
const navigate = useNavigate();
const gpus = [
  { id:1 ,name: "RTX 4090", price: "$1599", image: rtx4090 ,link:"https://www.amazon.in/s?k=RTX+4090"},
  { id:2 ,name: "RTX 4080", price: "$1199", image: rtx4080 ,link:"https://www.amazon.in/s?k=RTX+4080"},
  { id:3 ,name: "RX 7900 XTX", price: "$999", image: rx7900, link:"https://www.amazon.in/s?k=RX+7900+XTX"},
  { id:4 ,name: "RTX 4070", price: "$599", image: rtx4070 ,link:"https://www.amazon.in/s?k=RTX+4070"},

  { id:5 ,name: "RTX 4060", price: "$399", image: rtx4060 ,link:"https://www.amazon.in/s?k=RTX+4060"},
  { id:6 ,name: "RTX 3050", price: "$249", image: rtx3050 ,link:"https://www.amazon.in/s?k=RTX+3050"},
  { id:7 ,name: "RX 7800 XT", price: "$649", image: rx7800 ,link:"https://www.amazon.in/s?k=RX+7800+XT"},
  { id:8 ,name: "RX 7700 XT", price: "$599", image: rx7700 ,link:"https://www.amazon.in/s?k=RX+7700+XT"},

  { id:9 ,name: "RTX 3060", price: "$329", image: rtx3060 ,link:"https://www.amazon.in/s?k=RTX+3060"},
  { id:10 ,name: "RTX 3070", price: "$499", image: rtx3070 ,link:"https://www.amazon.in/s?k=RTX+3070"},
  { id:11 ,name: "RX 6800 XT", price: "$579", image: rx6800 ,link:"https://www.amazon.in/s?k=RX+6800+XT"},
  { id:12 ,name: "RX 6700 XT", price: "$479", image: rx6700 ,link:"https://www.amazon.in/s?k=RX+6700+XT"},

  { id:13 ,name: "RTX 3080", price: "$699", image: rtx3080 ,link:"https://www.amazon.in/s?k=RTX+3080"},
  { id:14 ,name: "RTX 3090", price: "$1499", image: rtx3090 ,link:"https://www.amazon.in/s?k=RTX+3090"},
  { id:15 ,name: "RX 7600", price: "$269", image: rx7600,link:"https://www.amazon.in/s?k=RX+7600" }
];
  const [visible, setVisible] = useState(8);

  const loadMore = () => {
    setVisible(gpus.length);
  };

  return (
    <div className="products">

      <h1>Graphics Cards</h1>

      <div className="product-grid">
        {gpus.slice(0, visible).map((gpu, index) => (
          <div className="product-card" key={index}>
            <img src={gpu.image} alt={gpu.name} />
            <h3>{gpu.name}</h3>
            <p>{gpu.price}</p>
            <button
  className="buy-btn"
  onClick={() => navigate("/checkout", { state: gpu })}
>
  Buy Now
</button>
          </div>
        ))}
      </div>

      {visible < gpus.length && (
        <button className="load-btn" onClick={loadMore}>
          Load More
        </button>
      )}

    </div>
  );
}

export default Products;