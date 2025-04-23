import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-biomimicry-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 fill-current" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 17h10v-2H7v2zm0-4h10v-2H7v2zm0-4h10V7H7v2zm12-4h-4.18C14.4 3.84 13.3 3 12 3c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
          </svg>
          Биомимикрия
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-biomimicry-accent transition-colors">Главная</Link>
          <Link to="/gallery" className="hover:text-biomimicry-accent transition-colors">Галерея</Link>
          <Link to="/examples" className="hover:text-biomimicry-accent transition-colors">Примеры</Link>
          <Link to="/about" className="hover:text-biomimicry-accent transition-colors">О нас</Link>
        </div>
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-biomimicry-primary">
          Связаться
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
