import { Award, TrendingUp, Users, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Milestones = () => {
  const stats = [
    {
      icon: Award,
      number: "5+",
      label: "Proyectos Completados",
    },
    {
      icon: TrendingUp,
      number: "3+",
      label: "Años de Experiencia",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Expansión de Servicios",
      description: "Implementación de nuevas tecnologías SIG y drones para monitoreo ambiental",
    },
    {
      year: "2023",
      title: "Certificación ISO 9001",
      description: "Obtención de certificación de calidad en gestión ambiental",
    },
    {
      year: "2022",
      title: "Proyecto Regional Destacado",
      description: "Liderazgo en restauración ecológica de cuenca hidrográfica regional",
    },
    {
      year: "2021",
      title: "Alianzas Comunitarias",
      description: "Establecimiento de red de trabajo con comunidades indígenas locales",
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
            Logros que demuestran nuestro compromiso con la excelencia ambiental
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
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

        <Card className="mt-12 bg-muted/50 border-none">
          <CardContent className="p-8 text-center">
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold text-secondary">Personaliza esta sección:</span>{" "}
              Agrega tus propios hitos, proyectos destacados y logros específicos de Travesa.
              Esta es una plantilla que puedes actualizar con tu información real.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Milestones;
