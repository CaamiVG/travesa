import { Map, TreePine, FileSearch, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Map,
      title: "Cartografía y SIG",
      description:
        "Elaboración de mapas temáticos, análisis espacial y gestión de bases de datos geográficas para proyectos ambientales y territoriales.",
      features: [
        "Levantamiento topográfico",
        "Análisis geoespacial",
        "Modelamiento territorial",
      ],
    },
    {
      icon: FileSearch,
      title: "Estudios Ambientales",
      description:
        "Evaluaciones de impacto ambiental, estudios de línea base y declaraciones de impacto ambiental para proyectos de diversos sectores.",
      features: [
        "EIA y DIA",
        "Línea base ambiental",
        "Planes de cumplimiento",
      ],
    },
    {
      icon: TreePine,
      title: "Restauración Ecológica",
      description:
        "Diseño e implementación de proyectos de restauración de ecosistemas degradados, recuperación de suelos y revegetación nativa.",
      features: [
        "Planes de restauración",
        "Revegetación nativa",
        "Recuperación de suelos",
      ],
    },
    {
      icon: Activity,
      title: "Monitoreo Ambiental",
      description:
        "Programas de seguimiento de flora, fauna, agua, aire y suelo para verificar el cumplimiento de compromisos ambientales.",
      features: [
        "Monitoreo de flora y fauna",
        "Control de calidad ambiental",
        "Informes de cumplimiento",
      ],
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
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
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
