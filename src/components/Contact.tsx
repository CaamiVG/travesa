import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Conecta con Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Impulsa tu proyecto con nuestro equipo experto en monitoreo, planificación y gestión de ecosistemas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-secondary mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:contacto@travesa.cl"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        contacto@travesa.cl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                      <a
                        href="tel:+56912345678"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +56 9 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                      <p className="text-foreground">Castro, Chile</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Horario de Atención</h3>
                <div className="space-y-2">
                  <p className="text-secondary-foreground/90">
                    Lunes a Viernes: 9:00 - 17:30
                  </p>
                  <p className="text-secondary-foreground/90">
                    Sábado: Cerrado
                  </p>
                  <p className="text-secondary-foreground/90">Domingo: Cerrado</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-secondary mb-6">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    className="w-full min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
