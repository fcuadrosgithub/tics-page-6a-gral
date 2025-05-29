import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Formando profesionales con excelencia académica y compromiso social
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/oferta-educativa">
                <Button>Conoce nuestras carreras</Button>
              </Link>
              <Link href="/egresados">
                <Button variant="outline">Comunidad de Egresados</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Bienvenido a ITSOEH</h2>
            <p className="text-muted-foreground md:text-lg mt-2">Conoce más sobre nuestra institución</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-primary/10 rounded-full">
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
                  className="h-10 w-10 text-primary"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Excelencia Académica</h3>
              <p className="text-muted-foreground">
                Programas educativos de calidad con reconocimiento nacional e internacional
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-primary/10 rounded-full">
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
                  className="h-10 w-10 text-primary"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Investigación e Innovación</h3>
              <p className="text-muted-foreground">
                Desarrollo de proyectos de investigación con impacto en la sociedad
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-primary/10 rounded-full">
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
                  className="h-10 w-10 text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Vinculación</h3>
              <p className="text-muted-foreground">
                Alianzas estratégicas con empresas e instituciones para el desarrollo profesional
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
