import { Award, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamWorkCollage from "@/assets/team-work-collage.jpg";

const Milestones = () => {
  const stats = [
    {
      icon: Award,
      number: "10+",
      label: "Proyectos técnicos ejecutados por su equipo profesional",
    },
    {
      icon: TrendingUp,
      number: "3+",
      label: "Años de experiencia en conservación, cartografía y monitoreo ambiental",
    },
    {
      icon: Award,
      number: "6+",
      label: "Capacitaciones y certificaciones ambientales especializadas",
    },
    {
      icon: Users,
      number: "2",
      label: "Profesionales fundadores con experiencia en gestión ambiental y SIG",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Fundación de TRAVESA Consultora Ambiental",
      description: "Creación de la consultora en Castro, Chiloé, orientada a soluciones territoriales basadas en ciencia y conservación ecológica.",
    },
    {
      year: "2024",
      title: "Restauración y manejo forestal — CONAF / IFOP",
      description: "Participación en proyectos de recuperación post incendios y monitoreo ambiental costero, aplicando SIG, drones y análisis de datos oceanográficos.",
    },
    {
      year: "2023",
      title: "Estudio de Protección Ambiental de Humedales Urbanos (Municipalidad de Concepción)",
      description: "Elaboración de diagnósticos ecológicos y cartografía ambiental bajo la metodología internacional de los Estándares Abiertos para la Conservación.",
    },
    {
      year: "2022",
      title: "Propuesta de Manejo para el Bosque Templado Lluvioso del Valle de Cochamó",
      description: "Investigación de Camila Gandulfo que integra conservación, cartografía SIG y planificación ecológica.",
    },
    {
      year: "2021",
      title: "Investigaciones en Cambio Ambiental Global (ECCALab / SECOS)",
      description: "Proyecto de Sebastián Sepúlveda sobre análisis de varazones, monitoreo marino y aplicación de datos satelitales.",
    },
    {
      year: "2019",
      title: "Movilización Internacional – Universidad Nacional del Litoral (Argentina)",
      description: "Experiencia de Sebastián en restauración ecológica y control de especies invasoras.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Nuestros Hitos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Logros que reflejan la trayectoria y experiencia técnica de nuestro equipo fundador.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardContent className="pt-8 pb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[2.4rem] top-1 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                <Card className="border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold text-primary mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Card className="mt-12 bg-muted/50 border-none overflow-hidden">
          <CardContent className="p-0">
            <img 
              src={teamWorkCollage} 
              alt="Equipo Travesa trabajando en proyectos ambientales" 
              className="w-full h-auto object-cover max-h-[400px]"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Milestones;
