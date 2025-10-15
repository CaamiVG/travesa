import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg">Travesa</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Consultoría ambiental comprometida con el desarrollo sostenible y la
              protección del medio ambiente en Chile.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#nosotros"
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Equipo
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Castro, Chile</li>
              <li>
                <a
                  href="mailto:travesaconsultora@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  travesaconsultora@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+56912345678"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +56 9 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/80">
            <p>© {currentYear} Travesa Consultora Ambiental Limitada. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
