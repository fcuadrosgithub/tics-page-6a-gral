import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap } from "lucide-react"

export default function EgresadosHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm">Sección Egresados</div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Red de Egresados TIC</h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Mantente conectado con tu alma mater, accede a oportunidades laborales y comparte tu experiencia
                profesional con la comunidad ITSOEH.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#oportunidades">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                  Ver oportunidades laborales
                </Button>
              </Link>
              <Link href="#contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Actualizar mis datos
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <GraduationCap className="h-48 w-48 text-white/80" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/30 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-4 border-dashed border-white/20 animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 rounded-full border-4 border-dashed border-white/10 animate-[spin_30s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
