import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-secondary leading-tight">
                Travesa
              </span>
              <span className="text-xs text-muted-foreground">Consultora Ambiental</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              Solicitar Presupuesto
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-sm font-medium text-secondary hover:text-primary py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-left text-sm font-medium text-secondary hover:text-primary py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-sm font-medium text-secondary hover:text-primary py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-left text-sm font-medium text-secondary hover:text-primary py-2"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left text-sm font-medium text-secondary hover:text-primary py-2"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
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
