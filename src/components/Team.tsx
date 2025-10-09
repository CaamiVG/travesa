import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Director/a General",
      role: "Liderazgo Estratégico",
      description: "Visión y dirección de la empresa",
    },
    {
      name: "Director/a Técnico",
      role: "Coordinación de Proyectos",
      description: "Supervisión técnica y calidad",
    },
    {
      name: "Especialista SIG",
      role: "Cartografía y Análisis Espacial",
      description: "Geomática y modelamiento territorial",
    },
    {
      name: "Biólogo/a Ambiental",
      role: "Estudios y Monitoreo",
      description: "Flora, fauna y ecosistemas",
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales comprometidos con la excelencia y el desarrollo sostenible
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="text-center border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-muted/50 border-none">
          <CardContent className="p-8 text-center">
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold text-secondary">Nota:</span> Esta sección
              está preparada para que agregues la información detallada y fotografías
              de tu equipo directivo. Puedes personalizar cada tarjeta con nombres reales,
              títulos profesionales, biografías y fotos del equipo.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Team;
