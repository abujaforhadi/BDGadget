import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "/logo.png";

function Footer() {
  return (
    <footer className="footer footer-center p-3">
      <aside className="flex flex-col items-center">
        <img className="w-1/6" src={img} alt="Logo" />
        <p className="font-bold text-xl ml-2">
          <span className="text-red-300">BD</span>Gadget
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col  gap-4">
          <a href="https://github.com/abujaforhadi" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abujaforhadi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
