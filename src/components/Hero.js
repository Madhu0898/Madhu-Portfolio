// src/components/Hero.js
import "../styles/Hero.css";

const Hero = () => {
  const profileSrc = process.env.PUBLIC_URL + "/assets/IMG_20220105_125149.jpg";
  const resumeSrc = process.env.PUBLIC_URL + "/assets/resume.pdf";

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={profileSrc} alt="Madhu Muddala" className="profile-pic" />
        <h1>Madhu Muddala</h1>
        <p className="title">Frontend Developer</p>
        <p className="contact">
          <a href="tel:+918431356126">+91 8431356126</a> |
          <a href="mailto:madhumuddala74@gmail.com">madhumuddala74@gmail.com</a>{" "}
          | Bengaluru, India
        </p>
        <a href={resumeSrc} target="_self" className="btn-download">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
