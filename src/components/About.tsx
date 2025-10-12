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
                Somos una empresa consultora ambiental nacida en el sur de Chile, con una profunda vocación por la conservación de la biodiversidad, la planificación territorial y la aplicación de tecnología avanzada para comprender y proteger los ecosistemas.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Nos inspiran los paisajes que habitamos —bosques, humedales, fiordos y montañas— y buscamos integrarlos en soluciones concretas para enfrentar los desafíos ambientales actuales y futuros.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                A través de un enfoque interdisciplinario y territorial, ofrecemos servicios que combinan conocimiento técnico con herramientas como los sistemas de información geográfica (SIG), el monitoreo con drones, el análisis de servicios ecosistémicos y la evaluación espacial de paisajes degradados.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Nuestra visión es avanzar progresivamente hacia la integración de modelos predictivos, modelación ecológica y climática, y simulaciones espacio-temporales que permitan tomar decisiones más informadas y estratégicas en conservación.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Estamos construyendo esta empresa paso a paso, con los pies en la tierra y la mirada en el futuro. Creemos que la tecnología, la ciencia y el territorio deben dialogar. Y eso es lo que nos mueve.
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
                    Brindamos soluciones ambientales integradas para la conservación de ecosistemas terrestres y acuáticos, combinando tecnología geoespacial, monitoreo ambiental y planificación ecológica. Actuamos desde los territorios del sur de Chile, con un enfoque interdisciplinario, riguroso y territorial, generando información clave para la toma de decisiones ambientales, la gestión sostenible y la protección de la biodiversidad.
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
                    Convertirnos en una empresa ambiental de referencia nacional e internacional, capaz de liderar proyectos de alta complejidad técnica y científica en conservación, modelación ecológica y planificación territorial. Aspiramos a integrar el conocimiento local con la ciencia aplicada, desarrollando innovación ambiental desde el sur de Chile para el mundo, y promoviendo una nueva forma de habitar y comprender los ecosistemas.
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
                    <span>Impulsar la conservación de ecosistemas terrestres y marinos mediante planificación estratégica y diagnósticos territoriales con base científica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Desarrollar e implementar herramientas tecnológicas (SIG, teledetección, drones, estaciones meteorológicas) para el monitoreo ambiental y la gestión sostenible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Identificar áreas prioritarias para la conservación utilizando estándares internacionales y enfoques participativos vinculados a los territorios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Promover la investigación aplicada y la innovación ambiental, incluyendo modelación espacial, ecológica e hidrológica a distintas escalas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fortalecer capacidades locales y redes de colaboración a través de la educación ambiental, asesorías técnicas y alianzas con comunidades, instituciones y centros de investigación</span>
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
