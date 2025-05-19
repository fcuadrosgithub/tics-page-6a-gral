import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { BriefcaseIcon, GraduationCap, Users, BarChart, MessageSquare } from "lucide-react"
import EgresadosHero from "@/components/egresados-hero"
import TestimonialCard from "@/components/testimonial-card"
import JobCard from "@/components/job-card"
import StatsCard from "@/components/stats-card"
import ContactForm from "@/components/contact-form"

export default function EgresadosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section para Egresados */}
      <EgresadosHero />

      {/* Tabs de Navegación */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="historias" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="historias">Historias de Éxito</TabsTrigger>
              <TabsTrigger value="oportunidades">Oportunidades Laborales</TabsTrigger>
              <TabsTrigger value="seguimiento">Seguimiento</TabsTrigger>
              <TabsTrigger value="testimonios">Testimonios</TabsTrigger>
              <TabsTrigger value="contacto">Contacto</TabsTrigger>
            </TabsList>

            {/* Historias de Éxito */}
            <TabsContent value="historias" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Foto de egresado"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Laura Martínez</h3>
                        <p className="text-sm text-muted-foreground">Generación 2018</p>
                        <p className="text-sm font-medium">Desarrolladora Senior en Microsoft</p>
                      </div>
                      <p className="text-muted-foreground">
                        "Mi formación en el ITSOEH me dio las bases para desarrollar mi carrera en una empresa líder en
                        tecnología. Las habilidades técnicas y blandas que adquirí fueron fundamentales."
                      </p>
                      <Button variant="outline" size="sm">
                        Leer historia completa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Foto de egresado"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Carlos Hernández</h3>
                        <p className="text-sm text-muted-foreground">Generación 2016</p>
                        <p className="text-sm font-medium">Fundador de TechMex Solutions</p>
                      </div>
                      <p className="text-muted-foreground">
                        "Emprender en el sector tecnológico fue un reto que pude superar gracias a la formación integral
                        que recibí. Hoy mi empresa da empleo a más de 20 personas."
                      </p>
                      <Button variant="outline" size="sm">
                        Leer historia completa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Foto de egresado"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Ana García</h3>
                        <p className="text-sm text-muted-foreground">Generación 2019</p>
                        <p className="text-sm font-medium">Líder de Ciberseguridad en BBVA</p>
                      </div>
                      <p className="text-muted-foreground">
                        "La especialización en seguridad informática que cursé en el ITSOEH me abrió las puertas al
                        sector financiero, donde ahora lidero un equipo de protección de datos."
                      </p>
                      <Button variant="outline" size="sm">
                        Leer historia completa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Button>Ver más historias de éxito</Button>
              </div>
            </TabsContent>

            {/* Oportunidades Laborales */}
            <TabsContent value="oportunidades" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <JobCard
                  company="Tecnologías Hidalgo"
                  position="Desarrollador Full Stack"
                  location="Pachuca, Hidalgo"
                  type="Tiempo Completo"
                  description="Buscamos desarrolladores con experiencia en React, Node.js y bases de datos SQL para unirse a nuestro equipo de desarrollo."
                  requirements={["2+ años de experiencia", "Conocimientos en React y Node.js", "Inglés intermedio"]}
                  link="#"
                />
                <JobCard
                  company="Soluciones Digitales MX"
                  position="Ingeniero DevOps"
                  location="Remoto"
                  type="Tiempo Completo"
                  description="Empresa líder en soluciones cloud busca ingeniero DevOps para gestionar infraestructura y automatizar procesos de despliegue."
                  requirements={["Experiencia con AWS/Azure", "Docker y Kubernetes", "CI/CD pipelines"]}
                  link="#"
                />
                <JobCard
                  company="Instituto Tecnológico Superior"
                  position="Docente de Programación"
                  location="Mixquiahuala, Hidalgo"
                  type="Medio Tiempo"
                  description="Se busca docente para impartir materias relacionadas con programación y desarrollo de software."
                  requirements={[
                    "Maestría en áreas de TI",
                    "Experiencia docente",
                    "Conocimientos actualizados en lenguajes de programación",
                  ]}
                  link="#"
                />
                <JobCard
                  company="Innovación Digital"
                  position="Analista de Datos"
                  location="Ciudad de México (Híbrido)"
                  type="Tiempo Completo"
                  description="Buscamos analista de datos para interpretar información y generar insights para la toma de decisiones."
                  requirements={[
                    "Conocimientos en Python y SQL",
                    "Experiencia con herramientas de visualización",
                    "Estadística aplicada",
                  ]}
                  link="#"
                />
              </div>
              <div className="mt-8 text-center">
                <Button>Ver más oportunidades</Button>
              </div>
            </TabsContent>

            {/* Seguimiento a Egresados */}
            <TabsContent value="seguimiento" className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Programa de Seguimiento a Egresados</h3>
                  <p className="text-muted-foreground mb-4">
                    El programa de seguimiento a egresados del ITSOEH tiene como objetivo mantener un vínculo permanente
                    con nuestros graduados, conocer su trayectoria profesional y retroalimentar nuestros programas
                    educativos.
                  </p>
                  <p className="text-muted-foreground mb-4">A través de este programa, ofrecemos:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-blue-600">•</div>
                      <span>Actualización profesional continua</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-blue-600">•</div>
                      <span>Vinculación con empresas y bolsa de trabajo</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-blue-600">•</div>
                      <span>Acceso a eventos y networking profesional</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-blue-600">•</div>
                      <span>Descuentos en programas de posgrado y educación continua</span>
                    </li>
                  </ul>
                  <Button>Actualizar mis datos</Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <StatsCard
                    icon={<GraduationCap className="h-8 w-8 text-blue-600" />}
                    title="Egresados"
                    value="1,200+"
                    description="Profesionales formados"
                  />
                  <StatsCard
                    icon={<BriefcaseIcon className="h-8 w-8 text-blue-600" />}
                    title="Empleabilidad"
                    value="92%"
                    description="Tasa de inserción laboral"
                  />
                  <StatsCard
                    icon={<Users className="h-8 w-8 text-blue-600" />}
                    title="Empresas"
                    value="150+"
                    description="Alianzas empresariales"
                  />
                  <StatsCard
                    icon={<BarChart className="h-8 w-8 text-blue-600" />}
                    title="Satisfacción"
                    value="4.8/5"
                    description="Calificación de empleadores"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Testimonios */}
            <TabsContent value="testimonios" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard
                  name="Miguel Ángel Rodríguez"
                  graduation="2017"
                  position="Arquitecto de Software"
                  company="Oracle"
                  testimonial="La formación técnica y humana que recibí en el ITSOEH ha sido fundamental para mi desarrollo profesional. Los proyectos prácticos me prepararon para enfrentar retos reales en la industria."
                  image="/placeholder.svg?height=100&width=100"
                />
                <TestimonialCard
                  name="Sofía Ramírez"
                  graduation="2018"
                  position="Gerente de Proyectos TI"
                  company="Grupo Bimbo"
                  testimonial="Gracias a la formación integral y al enfoque práctico de la carrera, pude desarrollar habilidades de liderazgo que hoy aplico en la gestión de proyectos tecnológicos de gran escala."
                  image="/placeholder.svg?height=100&width=100"
                />
                <TestimonialCard
                  name="Roberto Méndez"
                  graduation="2016"
                  position="Especialista en Ciberseguridad"
                  company="Secretaría de Seguridad"
                  testimonial="Los conocimientos adquiridos en seguridad informática me permitieron especializarme en un área con gran demanda. El ITSOEH siempre estuvo a la vanguardia en temas de ciberseguridad."
                  image="/placeholder.svg?height=100&width=100"
                />
                <TestimonialCard
                  name="Diana López"
                  graduation="2019"
                  position="Desarrolladora iOS"
                  company="Globant"
                  testimonial="Las bases de programación que adquirí en la carrera me permitieron adaptarme rápidamente a tecnologías específicas como Swift. Los profesores siempre nos motivaron a seguir aprendiendo."
                  image="/placeholder.svg?height=100&width=100"
                />
                <TestimonialCard
                  name="Javier Torres"
                  graduation="2015"
                  position="Emprendedor Tech"
                  company="DataMex"
                  testimonial="El espíritu emprendedor que se fomenta en el ITSOEH me inspiró a crear mi propia empresa de análisis de datos. Hoy trabajamos con clientes nacionales e internacionales."
                  image="/placeholder.svg?height=100&width=100"
                />
                <TestimonialCard
                  name="Mariana Flores"
                  graduation="2020"
                  position="UX/UI Designer"
                  company="Wizeline"
                  testimonial="Aunque mi enfoque actual es el diseño de experiencias, la base técnica que obtuve en la carrera me permite comunicarme efectivamente con los equipos de desarrollo."
                  image="/placeholder.svg?height=100&width=100"
                />
              </div>
              <div className="mt-8 text-center">
                <Button>Compartir mi testimonio</Button>
              </div>
            </TabsContent>

            {/* Contacto para Egresados */}
<TabsContent value="contacto" className="pt-6">
  <div className="grid gap-8 md:grid-cols-2">
    <div>
      <h3 className="text-2xl font-bold mb-4">Mantente Conectado</h3>
      <p className="text-muted-foreground mb-6">
        Queremos seguir siendo parte de tu desarrollo profesional. Completa el formulario para actualizar
        tus datos, compartir tu experiencia o solicitar información sobre nuestros programas para egresados.
      </p>
      <div className="space-y-4">
        <div className="flex items-start">
          <MessageSquare className="mr-2 mt-1 h-5 w-5 text-blue-600" />
          <div>
            <h4 className="font-medium">Coordinación de Seguimiento a Egresados</h4>
            <p className="text-sm text-muted-foreground">egresados.tic@itsoeh.edu.mx</p>
          </div>
        </div>
        <div className="flex items-start">
          <Users className="mr-2 mt-1 h-5 w-5 text-blue-600" />
          <div>
            <h4 className="font-medium">Redes Sociales</h4>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ContactForm />
    </div>
  </div>
</TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Eventos para Egresados */}
      <section className="w-full py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Próximos Eventos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mantente conectado con la comunidad ITSOEH a través de nuestros eventos
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium text-blue-600">15 de Junio, 2023</p>
                  <h3 className="text-xl font-bold">Feria del Empleo TIC 2023</h3>
                  <p className="text-muted-foreground">
                    Conecta con más de 30 empresas del sector tecnológico que buscan talento como el tuyo.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="sm">
                      Más información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium text-blue-600">22 de Julio, 2023</p>
                  <h3 className="text-xl font-bold">Webinar: Tendencias en IA</h3>
                  <p className="text-muted-foreground">
                    Actualiza tus conocimientos con nuestro webinar sobre las últimas tendencias en Inteligencia
                    Artificial.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="sm">
                      Registrarse
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium text-blue-600">10 de Agosto, 2023</p>
                  <h3 className="text-xl font-bold">Encuentro de Egresados 2023</h3>
                  <p className="text-muted-foreground">
                    Reencuéntrate con tus compañeros y profesores en nuestro evento anual de networking.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="sm">
                      Confirmar asistencia
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
