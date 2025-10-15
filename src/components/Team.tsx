import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import camilaPhoto from "@/assets/camila-gandulfo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Camila Gandulfo",
      role: "Ingeniera Ambiental",
      title: "Directora Ejecutiva y Líder en Conservación Terrestre",
      description: "Co-fundadora. Ingeniera ambiental con experiencia en conservación de la biodiversidad, planificación territorial y análisis espacial. Especializada en SIG, áreas prioritarias de conservación y diseño de estrategias ecológicas en ecosistemas terrestres y humedales.",
      photo: camilaPhoto,
    },
    {
      name: "Sebastián Sepúlveda",
      role: "Ingeniero Ambiental",
      title: "Director Técnico y Líder en Sistemas Acuáticos y Datos Ambientales",
      description: "Co-fundador. Especialista en monitoreo de ecosistemas acuáticos y análisis de parámetros fisicoquímicos en cuerpos de agua. Su trabajo se orienta en la recolección, procesamiento y modelación de datos ambientales, integrando ciencia aplicada y gestión territorial.",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardContent className="pt-8 pb-6">
                {member.photo ? (
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-secondary mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-1 text-center">{member.role}</p>
                <p className="text-sm text-accent font-medium mb-4 text-center italic">{member.title}</p>
                <p className="text-sm text-foreground leading-relaxed text-center">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
