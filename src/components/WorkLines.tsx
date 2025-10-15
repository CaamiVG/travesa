import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Map, Droplet, FileText, Cpu } from "lucide-react";

const WorkLines = () => {
  const workLines = [
    {
      title: "Conservación de la Biodiversidad y Áreas Prioritarias",
      icon: Leaf,
      items: [
        "Identificación de áreas de alto valor ecológico",
        "Análisis de amenazas, gobernanza y diseño de estrategias de manejo.",
        "Aplicación de los Estándares Abiertos para la Práctica de la Conservación"
      ]
    },
    {
      title: "Dinámica del Paisaje y Conservación Ecológica",
      icon: Map,
      items: [
        "Evaluación de paisajes degradados y análisis de fragmentación ecológica.",
        "Análisis espacial de cambios de uso del suelo y pérdida de cobertura vegetal.",
        "Diseño de corredores biológicos"
      ]
    },
    {
      title: "Funcionalidad Ecosistémica y Análisis Espacial",
      icon: Droplet,
      items: [
        "Evaluación de servicios ecosistémicos (agua, carbono, biodiversidad)",
        "Modelación hidrológica y análisis de resiliencia ecológica",
        "Monitoreo de procesos ecosistémicos mediante tecnología geoespacial."
      ]
    },
    {
      title: "Planificación y Manejo Ambiental",
      icon: FileText,
      items: [
        "Elaboración de planes de manejo de conservación y uso sostenible.",
        "Asesoría técnica en manejo forestal (con profesionales acreditados).",
        "Diagnósticos prediales, caracterización ecológica y cartografía georreferenciada.",
        "Estrategias de restauración post-incendio y manejo del fuego, considerando la regeneración natural, resiliencia del suelo y recolonización vegetal."
      ]
    },
    {
      title: "Tecnología Aplicada a la Conservación",
      icon: Cpu,
      items: [
        "Uso de drones para monitoreo territorial y diagnóstico ecológico.",
        "Procesamiento y análisis de datos ambientales",
        "Desarrollo de modelos predictivos y simulaciones ambientales."
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Nuestras Líneas de Trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuestras líneas de trabajo combinan análisis espacial, monitoreo ambiental y planificación ecológica para generar conocimiento aplicable a la conservación y el uso sostenible de los ecosistemas del sur de Chile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {workLines.map((line, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <line.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary leading-tight">
                    {line.title}
                  </h3>
                </div>
                <ul className="space-y-2 ml-14">
                  {line.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
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

export default WorkLines;
