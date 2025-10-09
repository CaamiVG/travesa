import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                Acerca de Travesa
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Travesa Consultora Ambiental Limitada es una empresa chilena especializada
                en consultoría ambiental integral. Ofrecemos soluciones innovadoras y
                sostenibles para empresas, instituciones públicas y comunidades que buscan
                desarrollar sus proyectos en armonía con el medio ambiente.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Con un equipo multidisciplinario de profesionales altamente calificados,
                combinamos experiencia técnica, conocimiento local y compromiso ético para
                entregar servicios de excelencia en cartografía SIG, estudios de impacto
                ambiental, restauración ecológica y monitoreo ambiental.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Nuestro compromiso es con la travesía hacia la conservación de los ecosistemas del sur austral.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-hover)" }}>
                <img 
                  src={aboutImage} 
                  alt="Equipo Travesa trabajando en terreno"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    Nuestra Misión
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Proporcionar servicios de consultoría ambiental de excelencia que
                    promuevan el desarrollo sustentable, protegiendo los ecosistemas y
                    apoyando a las comunidades locales mediante soluciones técnicas
                    innovadoras y éticamente responsables.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    Nuestra Visión
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Ser reconocidos como la consultora ambiental líder en Chile por nuestra
                    capacidad de integrar conocimiento científico, tecnología avanzada y
                    participación comunitaria para generar impacto positivo y duradero en
                    el medio ambiente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>

          <Card className="bg-secondary text-secondary-foreground border-none">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Objetivos Estratégicos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Consolidar nuestro liderazgo en cartografía SIG y estudios ambientales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fortalecer alianzas estratégicas con comunidades locales e indígenas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Innovar constantemente en metodologías de restauración ecológica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Contribuir activamente a la educación y conciencia ambiental</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
