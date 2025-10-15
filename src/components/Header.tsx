import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary backdrop-blur-sm border-b border-secondary/30 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Travesa - Consultora Ambiental" className="h-16 w-auto object-contain" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
            >
              Solicitar Presupuesto
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-foreground" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-secondary/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-left text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-left text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground py-2"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left text-sm font-medium text-secondary-foreground/90 hover:text-secondary-foreground py-2"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              Solicitar Presupuesto
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
