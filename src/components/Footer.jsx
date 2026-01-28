import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col items-center gap-8 py-10 shadow-[0_-10px_15px_-3px] shadow-shadow">
      <a
        href="mailto:steffentveit@outlook.com"
        className="nav-link flex items-center gap-2 text-xs
      sm:text-base"
      >
        Email: neomarxcodes@gmail.com
      </a>
      <p
        className="text-xs
      sm:text-base"
      >
        © 2025 by Hermariya Stephens | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
