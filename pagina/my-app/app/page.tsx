import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap, Users, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Ingeniería en Tecnologías de la Información y Comunicaciones
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Formando profesionales con excelencia académica y compromiso social en el Instituto Tecnológico
                  Superior del Occidente del Estado de Hidalgo.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/aspirantes">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                    Conoce nuestra oferta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] bg-white/10 rounded-full p-4">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Logo de la carrera"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Principales */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explora Nuestras Secciones</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Información relevante para cada perfil de nuestra comunidad académica
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Link href="/estudiantes" className="no-underline">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <BookOpen className="h-12 w-12 text-blue-600" />
                  <h3 className="text-2xl font-bold">Estudiantes</h3>
                  <p className="text-muted-foreground">
                    Recursos académicos, horarios, eventos y servicios para nuestros estudiantes actuales.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/egresados" className="no-underline">
              <Card className="h-full transition-all hover:shadow-lg border-blue-600 bg-blue-50 dark:bg-blue-950">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <GraduationCap className="h-12 w-12 text-blue-600" />
                  <h3 className="text-2xl font-bold">Egresados</h3>
                  <p className="text-muted-foreground">
                    Red de egresados, bolsa de trabajo, testimonios y seguimiento profesional.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/aspirantes" className="no-underline">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-blue-600" />
                  <h3 className="text-2xl font-bold">Aspirantes</h3>
                  <p className="text-muted-foreground">
                    Proceso de admisión, plan de estudios, becas y toda la información para futuros estudiantes.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/publico" className="no-underline">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Globe className="h-12 w-12 text-blue-600" />
                  <h3 className="text-2xl font-bold">Público General</h3>
                  <p className="text-muted-foreground">
                    Noticias, eventos, proyectos y colaboraciones con la comunidad y el sector empresarial.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para ser parte de nuestra comunidad?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre todo lo que la carrera de Ingeniería en TIC del ITSOEH tiene para ofrecerte
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contacto">
                <Button size="lg">Contáctanos</Button>
              </Link>
              <Link href="/oferta-educativa">
                <Button size="lg" variant="outline">
                  Ver oferta educativa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
