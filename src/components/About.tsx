import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Acerca de Travesa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consultora ambiental comprometida con el desarrollo sostenible y la protección
            del medio ambiente en Chile
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-foreground leading-relaxed mb-6">
                Travesa Consultora Ambiental Limitada es una empresa chilena especializada
                en consultoría ambiental integral. Ofrecemos soluciones innovadoras y
                sostenibles para empresas, instituciones públicas y comunidades que buscan
                desarrollar sus proyectos en armonía con el medio ambiente.
              </p>
              <p className="text-foreground leading-relaxed">
                Con un equipo multidisciplinario de profesionales altamente calificados,
                combinamos experiencia técnica, conocimiento local y compromiso ético para
                entregar servicios de excelencia en cartografía SIG, estudios de impacto
                ambiental, restauración ecológica y monitoreo ambiental.
              </p>
            </CardContent>
          </Card>
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
    </section>
  );
};

export default About;
