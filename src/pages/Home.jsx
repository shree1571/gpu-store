import "./Home.css";
import { Link } from "react-router-dom";
import rx7900 from "../gpu images/7900XTX.jpg"
function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Ultimate Graphics Power</h1>
          <p>
            Discover the latest NVIDIA and AMD graphics cards for gaming,
            AI and high performance computing.
          </p>

          <Link to="/products">
  <button className="shop-btn">Shop Now</button>
</Link>
        </div>

        <img
          src="https://www.bleepstatic.com/content/hl-images/2023/09/07/graphics-card.jpg"
          alt="GPU"
          className="hero-image"
        />
      </section>


      {/* Featured GPUs */}
      <section className="featured">
        <h2>Featured Graphics Cards</h2>

        <div className="gpu-grid">

          <div className="gpu-card">
            <img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7" />
            <h3>NVIDIA RTX 4090</h3>
            <p>Ultimate gaming performance</p>
          </div>

          <div className="gpu-card">
            <img src="https://images.unsplash.com/photo-1625842268584-8f3296236761" />
            <h3>RTX 4080</h3>
            <p>Powerful ray tracing</p>
          </div>

          <div className="gpu-card">
            <img src={rx7900} />
            <h3>AMD RX 7900 XTX</h3>
            <p>Extreme 4K gaming</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;