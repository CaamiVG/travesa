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
      title: "Cartografía Ambiental, Análisis y Gestión Territorial",
      description:
        "Desarrollamos productos cartográficos y diagnósticos ambientales de alta precisión, orientados a la planificación ecológica y la gestión sustentable del territorio.",
      features: [
        "Elaboración de cartografía ambiental y georreferenciación predial",
        "Diagnóstico de paisajes degradados y análisis de fragmentación ecológica",
        "Diseño e implementación de planes de manejo de bosque nativo, conservación y restauración",
        "Detección de cortas ilegales y usos no autorizados mediante drones y teledetección",
        "Inventario, evaluación y tasación de predios forestales",
        "Análisis geomorfológico e hidrológico de cuencas: obtención de parámetros morfométricos (área, pendiente, red hídrica, orden de Strahler, balance hídrico, etc.) mediante herramientas SIG y modelación climática.",
      ],
      image: gisImage,
    },
    {
      icon: Activity,
      title: "Monitoreo y Análisis Ambiental",
      description:
        "Realizamos campañas de monitoreo ambiental terrestre y acuático, aplicando metodologías estandarizadas y equipamiento tecnológico para la recolección y análisis de datos ambientales.",
      features: [
        "Monitoreo ambiental con drones y sensores",
        "Instalación, operación y análisis de datos de estaciones meteorológicas",
        "Medición y análisis de parámetros fisicoquímicos en cuerpos de agua continentales como fiordos, lagos, ríos, etc.",
        "Evaluación de servicios ecosistémicos, calidad ambiental y modelación espacial de variables ecológicas",
        "Monitoreo y diagnóstico de humedales continentales: levantamiento en terreno, delimitación geoespacial, caracterización físico-química y diseño de planes de gestión y restauración ecológica.",
      ],
      image: monitoringImage,
    },
    {
      icon: FileSearch,
      title: "Planificación y Evaluación Ambiental",
      description:
        "Diseñamos estrategias y herramientas de planificación ecológica con base científica, orientadas a la conservación y gestión integral del territorio.",
      features: [
        "Identificación de áreas prioritarias de conservación",
        "Diseño de paisajes funcionales y corredores biológicos",
        "Simulaciones y modelaciones ecológicas, hidrológicas y espaciales",
        "Estudios de línea base ambiental, caracterización ecosistémica y evaluación de impactos",
        "Elaboración de Planes de Gestión Integrada de Humedales (PGI) y Estudios de Protección Ambiental, incorporando estrategias de restauración ecológica y diseño de intervenciones sostenibles.",
      ],
      image: studiesImage,
    },
    {
      icon: TreePine,
      title: "Capacitación y Apoyo Institucional",
      description:
        "Fortalecemos capacidades locales y técnicas mediante programas de formación, asesorías y acompañamiento especializado a instituciones, comunidades y empresas.",
      features: [
        "Talleres de educación ambiental y SIG aplicado",
        "Capacitación en herramientas de conservación, monitoreo y análisis territorial",
        "Asesorías técnicas a municipios, ONGs y empresas en gestión y planificación ambiental",
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
