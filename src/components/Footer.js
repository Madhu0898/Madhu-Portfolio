// src/components/Footer.js
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Madhu Muddala. All rights reserved.</p>
      <p>
        Built with ❤️ using React •
        <a href="mailto:madhumuddala74@gmail.com">Email me</a>
      </p>
    </footer>
  );
};

export default Footer;
