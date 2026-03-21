import "./About.css";

function About() {
  return (
    <div className="about">

      <h1>About GPU Store</h1>

      <p className="about-intro">
        GPU Store is a modern technology store dedicated to providing
        high-performance graphics cards for gamers, creators, and developers.
        We offer the latest GPUs from NVIDIA and AMD designed for gaming,
        AI, video editing, and high-performance computing.
      </p>

      <div className="about-section">

        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver powerful graphics hardware that helps
            gamers achieve maximum performance and enables creators to push
            the limits of visual computing.
          </p>
        </div>

        <div className="about-box">
          <h2>What We Offer</h2>
          <p>
            We provide a wide range of graphics cards including RTX 40 series,
            AMD RX series, and budget GPUs for every type of user.
          </p>
        </div>

        <div className="about-box">
          <h2>Why Choose Us</h2>
          <p>
            ✔ Latest GPUs from trusted brands  
            ✔ Competitive pricing  
            ✔ Fast delivery  
            ✔ Excellent customer support
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;