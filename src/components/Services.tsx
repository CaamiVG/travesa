import { Map, TreePine, FileSearch, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import gisImage from "@/assets/service-gis.jpg";
import studiesImage from "@/assets/service-studies.jpg";
import restorationImage from "@/assets/service-restoration.jpg";
import monitoringImage from "@/assets/service-monitoring.jpg";

const Services = () => {
  const services = [
    {
      icon: Map,
      title: "Servicios Técnicos",
      description:
        "Cartografía ambiental, análisis territorial y gestión forestal con tecnología de punta y profesionales acreditados.",
      features: [
        "Cartografía ambiental y georreferenciación predial",
        "Diagnóstico de paisajes degradados y fragmentación ecológica",
        "Planes de manejo (bosque nativo, conservación, restauración)",
        "Detección de corta ilegal o uso no autorizado con drones",
        "Inventario y tasación de predios forestales",
      ],
      image: gisImage,
    },
    {
      icon: Activity,
      title: "Servicios de Monitoreo y Análisis",
      description:
        "Monitoreo ambiental avanzado con drones, sensores y análisis de parámetros fisicoquímicos en ecosistemas terrestres y acuáticos.",
      features: [
        "Monitoreo ambiental con drones y sensores",
        "Instalación y análisis de estaciones meteorológicas",
        "Análisis de parámetros fisicoquímicos en cuerpos de agua y fiordos",
        "Evaluación de servicios ecosistémicos y modelación espacial",
      ],
      image: monitoringImage,
    },
    {
      icon: FileSearch,
      title: "Servicios de Planificación",
      description:
        "Planificación estratégica y diseño de paisajes funcionales basados en estándares internacionales y análisis territorial.",
      features: [
        "Identificación de áreas prioritarias de conservación",
        "Diseño de paisajes funcionales y corredores ecológicos",
        "Simulaciones y modelaciones espaciales",
        "Estudios de línea base ambiental",
      ],
      image: studiesImage,
    },
    {
      icon: TreePine,
      title: "Servicios de Capacitación y Apoyo Institucional",
      description:
        "Fortalecimiento de capacidades locales mediante educación ambiental y asistencia técnica especializada.",
      features: [
        "Talleres de educación ambiental y SIG aplicado",
        "Capacitación en herramientas de conservación y análisis territorial",
        "Apoyo técnico a municipios, ONGs o empresas en gestión ambiental",
      ],
      image: restorationImage,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones ambientales integrales adaptadas a las necesidades de cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
