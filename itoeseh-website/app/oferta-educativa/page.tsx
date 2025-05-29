import { Construction, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OfertaEducativaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Regresar al Inicio
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Construction className="h-16 w-16 text-orange-500" />
            </div>
            <CardTitle className="text-2xl">Sección en Mantenimiento</CardTitle>
            <CardDescription>Estamos actualizando nuestra información académica</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              La sección de Oferta Educativa estará disponible próximamente con información actualizada sobre nuestras
              carreras y programas académicos.
            </p>
            <div className="space-y-2">
              <Link href="/egresados">
                <Button className="w-full">Visitar Egresados</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
