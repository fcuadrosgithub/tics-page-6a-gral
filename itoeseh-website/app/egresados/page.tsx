import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  FileEdit,
  Mail,
  Users,
  Award,
  Trophy,
  Monitor,
  Briefcase,
  GraduationCap,
  Handshake,
  Gift,
  Calendar,
  MessageSquare,
  Rocket,
  Newspaper,
  UserCheck,
  Send,
  Download,
  Medal,
} from "lucide-react"

export default function EgresadosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/20 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Bienvenido(a) a la Comunidad de Egresados ITSOEH
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Mantente conectado, encuentra oportunidades y comparte tu historia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/egresados/oportunidades">
                  <Button className="gap-2">
                    <Search className="h-4 w-4" />
                    Buscar oportunidades
                  </Button>
                </Link>
                <Link href="/egresados/testimonios">
                  <Button variant="outline" className="gap-2">
                    <FileEdit className="h-4 w-4" />
                    Registrar testimonio
                  </Button>
                </Link>
                <Link href="/egresados/actualizar-datos">
                  <Button variant="outline" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Actualizar mis datos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/graduates.jpg"
                width={600}
                height={400}
                alt="Grupo de egresados ITSOEH celebrando con letras del instituto"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nuestros egresados, nuestro orgullo
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conoce las historias de éxito de quienes formaron parte de nuestra institución
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Testimonio 1 */}
            <Card className="bg-card hover:shadow-lg transition-all">
              <CardHeader className="pb-0">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image src="/images/andrea.jpg" alt="Andrea Martínez" fill className="object-cover" />
                  </div>
                </div>
                <CardTitle className="text-center">Andrea Martínez</CardTitle>
                <CardDescription className="text-center">Ing. en Sistemas</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 text-center">
                <p className="italic">"Gracias a ITSOEH logré liderar proyectos globales en ciberseguridad."</p>
                <p className="text-sm text-muted-foreground mt-2">Líder de Ciberseguridad en Microsoft</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/egresados/testimonios">
                  <Button variant="link" className="gap-1">
                    Ver más <span className="ml-1">➜</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Testimonio 2 */}
            <Card className="bg-card hover:shadow-lg transition-all">
              <CardHeader className="pb-0">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image src="/images/carlos.jpg" alt="Carlos Rodríguez" fill className="object-cover" />
                  </div>
                </div>
                <CardTitle className="text-center">Carlos Rodríguez</CardTitle>
                <CardDescription className="text-center">Ing. Industrial</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 text-center">
                <p className="italic">
                  "Mi formación en ITSOEH me dio las herramientas para innovar en procesos industriales."
                </p>
                <p className="text-sm text-muted-foreground mt-2">Director de Operaciones en Tesla</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/egresados/testimonios">
                  <Button variant="link" className="gap-1">
                    Ver más <span className="ml-1">➜</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Testimonio 3 */}
            <Card className="bg-card hover:shadow-lg transition-all">
              <CardHeader className="pb-0">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image src="/images/laura.jpg" alt="Laura Sánchez" fill className="object-cover" />
                  </div>
                </div>
                <CardTitle className="text-center">Laura Sánchez</CardTitle>
                <CardDescription className="text-center">Ing. en Mecatrónica</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 text-center">
                <p className="italic">"ITSOEH me inspiró a crear soluciones robóticas para problemas reales."</p>
                <p className="text-sm text-muted-foreground mt-2">Fundadora de RoboSolutions</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/egresados/testimonios">
                  <Button variant="link" className="gap-1">
                    Ver más <span className="ml-1">➜</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/egresados/testimonios">
              <Button variant="outline">Ver más historias</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impacto Profesional Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Impacto de nuestros egresados
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conoce el impacto de nuestros egresados en el mundo profesional
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">87%</h3>
              <p className="text-center text-muted-foreground">empleados en menos de 6 meses</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">35%</h3>
              <p className="text-center text-muted-foreground">trabajando en el extranjero</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Medal className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">120+</h3>
              <p className="text-center text-muted-foreground">egresados premiados por innovación tecnológica</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Sectores principales</h3>
              <p className="text-center text-muted-foreground">Software, Energía, Robótica, Industria 4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos para Egresados Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sigue creciendo con nosotros
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Aprovecha los recursos exclusivos para nuestra comunidad de egresados
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Bolsa de Trabajo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Vacantes exclusivas y seguimiento personalizado para tu desarrollo profesional
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/egresados/oportunidades">
                  <Button variant="outline" size="sm">
                    Explorar vacantes
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Educación Continua</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Acceso a certificaciones y cursos especializados con descuento exclusivo
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/egresados/cursos">
                  <Button variant="outline" size="sm">
                    Ver cursos
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Mentorías</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Conecta con profesionales ITSOEH y amplía tu red de contactos</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/egresados/mentorias">
                  <Button variant="outline" size="sm">
                    Conectar
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Gift className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Beneficios y Descuentos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Convenios con empresas y descuentos en programas de posgrado</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/egresados/beneficios">
                  <Button variant="outline" size="sm">
                    Ver beneficios
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/egresados/portal">
              <Button className="gap-2">
                <Users className="h-4 w-4" />
                Acceder al portal de servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Noticias y Eventos Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Mantente al día con la comunidad
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Eventos y noticias relevantes para nuestra comunidad de egresados
              </p>
            </div>
          </div>

          <Tabs defaultValue="eventos" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="eventos">Eventos</TabsTrigger>
              <TabsTrigger value="noticias">Noticias</TabsTrigger>
            </TabsList>
            <TabsContent value="eventos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card hover:shadow-lg transition-all">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/evento1.jpg"
                      width={400}
                      height={225}
                      alt="Semana del Egresado 2025"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">15 de Junio, 2025</span>
                    </div>
                    <CardTitle>Semana del Egresado 2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Una semana llena de actividades, conferencias y networking para nuestra comunidad de egresados.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Más información
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-all">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/evento2.jpg"
                      width={400}
                      height={225}
                      alt="Foro: Tecnología y futuro laboral"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">28 de Julio, 2025</span>
                    </div>
                    <CardTitle>Foro: "Tecnología y futuro laboral"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Expertos en tecnología y recursos humanos discutirán las tendencias del mercado laboral.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Más información
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-all">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/evento3.jpg"
                      width={400}
                      height={225}
                      alt="Lanzamiento del programa Egresado Emprende"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">10 de Agosto, 2025</span>
                    </div>
                    <CardTitle>Lanzamiento del programa "Egresado Emprende"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nuevo programa de apoyo para egresados emprendedores con mentorías y financiamiento.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Más información
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="noticias" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">5 de Mayo, 2025</span>
                    </div>
                    <CardTitle>Egresada ITSOEH gana premio internacional en IA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nuestra egresada Sofía Méndez recibió reconocimiento por su innovador algoritmo de IA.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Leer más
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">20 de Abril, 2025</span>
                    </div>
                    <CardTitle>Nueva alianza ITSOEH–Google para empleo tech</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Firmamos un convenio con Google para facilitar la contratación de nuestros egresados.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Leer más
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">15 de Marzo, 2025</span>
                    </div>
                    <CardTitle>Reencuentro de la generación 2015</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Exitoso reencuentro de la generación 2015 con más de 200 egresados participantes.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Leer más
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Conexión Alumni Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Siempre parte de ITSOEH</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Mantén tu conexión con la comunidad universitaria y aprovecha todos los beneficios
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="bg-primary-foreground text-primary hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <UserCheck className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-lg">Actualiza tus datos</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-2">
                <p className="text-muted-foreground text-sm">Mantén tu información de contacto actualizada</p>
              </CardContent>
              <CardFooter className="flex justify-center pt-2">
                <Link href="/egresados/actualizar-datos">
                  <Button variant="outline" size="sm" className="w-full">
                    Actualizar
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-primary-foreground text-primary hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-lg">Suscríbete</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-2">
                <p className="text-muted-foreground text-sm">Recibe nuestro boletín mensual</p>
              </CardContent>
              <CardFooter className="flex justify-center pt-2">
                <Link href="/egresados/boletin">
                  <Button variant="outline" size="sm" className="w-full">
                    Suscribirse
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-primary-foreground text-primary hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Download className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-lg">App ITSOEH Alumni</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-2">
                <p className="text-muted-foreground text-sm">Descarga nuestra aplicación móvil</p>
              </CardContent>
              <CardFooter className="flex justify-center pt-2">
                <Link href="/egresados/app">
                  <Button variant="outline" size="sm" className="w-full">
                    Descargar
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-primary-foreground text-primary hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Medal className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-lg">Egresado Destacado</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-2">
                <p className="text-muted-foreground text-sm">Postúlate como Egresado Destacado</p>
              </CardContent>
              <CardFooter className="flex justify-center pt-2">
                <Link href="/egresados/egresado-destacado">
                  <Button variant="outline" size="sm" className="w-full">
                    Postularme
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-primary-foreground text-primary hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-lg">Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-2">
                <div className="flex justify-center gap-4">
                  <Link href="#" className="text-primary hover:text-primary/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-primary hover:text-primary/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-primary hover:text-primary/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Seguirnos
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
