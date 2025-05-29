"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Star, Quote, Plus, Calendar, Building, MapPin, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const testimoniosExistentes = [
  {
    id: 1,
    nombre: "Andrea Martínez",
    carrera: "Ing. en Sistemas",
    graduacion: "2020",
    empresa: "Microsoft",
    puesto: "Líder de Ciberseguridad",
    ubicacion: "Seattle, WA",
    testimonio:
      "Gracias a ITOESEH logré liderar proyectos globales en ciberseguridad. La formación que recibí me dio las bases sólidas para enfrentar los desafíos tecnológicos más complejos.",
    imagen: "/images/student1.png",
    rating: 5,
    fecha: "2025-04-15",
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    carrera: "Ing. Industrial",
    graduacion: "2019",
    empresa: "Tesla",
    puesto: "Director de Operaciones",
    ubicacion: "Austin, TX",
    testimonio:
      "Mi formación en ITOESEH me dio las herramientas para innovar en procesos industriales. Hoy lidero equipos internacionales y aplico metodologías aprendidas en la universidad.",
    imagen: "/images/student2.png",
    rating: 5,
    fecha: "2025-04-10",
  },
  {
    id: 3,
    nombre: "Laura Sánchez",
    carrera: "Ing. en Mecatrónica",
    graduacion: "2021",
    empresa: "RoboSolutions",
    puesto: "Fundadora y CEO",
    ubicacion: "Ciudad de México",
    testimonio:
      "ITOESEH me inspiró a crear soluciones robóticas para problemas reales. Fundé mi empresa con los conocimientos adquiridos y hoy empleamos a más de 50 personas.",
    imagen: "/images/student3.png",
    rating: 5,
    fecha: "2025-04-05",
  },
]

export default function TestimoniosPage() {
  const [testimonios, setTestimonios] = useState(testimoniosExistentes)
  const [nuevoTestimonio, setNuevoTestimonio] = useState({
    nombre: "",
    carrera: "",
    graduacion: "",
    empresa: "",
    puesto: "",
    ubicacion: "",
    testimonio: "",
    email: "",
    telefono: "",
  })
  const [dialogAbierto, setDialogAbierto] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const testimonioCompleto = {
      id: testimonios.length + 1,
      ...nuevoTestimonio,
      imagen: "/images/default-avatar.png",
      rating: 5,
      fecha: new Date().toISOString().split("T")[0],
    }

    setTestimonios([testimonioCompleto, ...testimonios])
    setNuevoTestimonio({
      nombre: "",
      carrera: "",
      graduacion: "",
      empresa: "",
      puesto: "",
      ubicacion: "",
      testimonio: "",
      email: "",
      telefono: "",
    })
    setDialogAbierto(false)

    // Aquí podrías enviar los datos a un servidor
    console.log("Nuevo testimonio enviado:", testimonioCompleto)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Testimonios de Egresados</h1>
        <p className="text-muted-foreground">Conoce las historias de éxito de nuestros egresados y comparte la tuya</p>
      </div>
      <div className="mb-6">
        <Link href="/egresados">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Regresar a Egresados
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="ver" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ver">Ver Testimonios</TabsTrigger>
          <TabsTrigger value="compartir">Compartir mi Historia</TabsTrigger>
        </TabsList>

        <TabsContent value="ver" className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Historias que Inspiran</h2>
            <Dialog open={dialogAbierto} onOpenChange={setDialogAbierto}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Agregar Testimonio
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Comparte tu Historia de Éxito</DialogTitle>
                  <DialogDescription>
                    Ayuda a inspirar a futuros egresados compartiendo tu experiencia profesional
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={nuevoTestimonio.nombre}
                        onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, nombre: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="carrera">Carrera *</Label>
                      <Select
                        value={nuevoTestimonio.carrera}
                        onValueChange={(value) => setNuevoTestimonio({ ...nuevoTestimonio, carrera: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu carrera" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Ing. en Sistemas">Ing. en Sistemas</SelectItem>
                          <SelectItem value="Ing. Industrial">Ing. Industrial</SelectItem>
                          <SelectItem value="Ing. en Mecatrónica">Ing. en Mecatrónica</SelectItem>
                          <SelectItem value="Ing. en Electrónica">Ing. en Electrónica</SelectItem>
                          <SelectItem value="Ing. en Gestión Empresarial">Ing. en Gestión Empresarial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="graduacion">Año de graduación *</Label>
                      <Input
                        id="graduacion"
                        type="number"
                        min="2000"
                        max="2025"
                        value={nuevoTestimonio.graduacion}
                        onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, graduacion: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="empresa">Empresa actual *</Label>
                      <Input
                        id="empresa"
                        value={nuevoTestimonio.empresa}
                        onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, empresa: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="puesto">Puesto actual *</Label>
                      <Input
                        id="puesto"
                        value={nuevoTestimonio.puesto}
                        onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, puesto: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="ubicacion">Ubicación</Label>
                      <Input
                        id="ubicacion"
                        placeholder="Ciudad, País"
                        value={nuevoTestimonio.ubicacion}
                        onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, ubicacion: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="testimonio">Tu historia de éxito *</Label>
                    <Textarea
                      id="testimonio"
                      placeholder="Comparte cómo ITOESEH te ayudó en tu carrera profesional..."
                      value={nuevoTestimonio.testimonio}
                      onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, testimonio: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email de contacto</Label>
                      <Input
                        id="email"
                        type="email"
                        value={nuevoTestimonio.email}
                        onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        value={nuevoTestimonio.telefono}
                        onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, telefono: e.target.value })}
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setDialogAbierto(false)}>
                      Cancelar
                    </Button>
                    <Button type="submit">Enviar Testimonio</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.map((testimonio) => (
              <Card key={testimonio.id} className="hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonio.imagen || "/placeholder.svg"}
                        alt={testimonio.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{testimonio.nombre}</CardTitle>
                      <CardDescription>{testimonio.carrera}</CardDescription>
                      <div className="flex items-center gap-1 mt-1">{renderStars(testimonio.rating)}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        {testimonio.empresa}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {testimonio.graduacion}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary">{testimonio.puesto}</Badge>
                      {testimonio.ubicacion && (
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {testimonio.ubicacion}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <Quote className="h-4 w-4 text-muted-foreground mb-2" />
                      <p className="text-sm italic leading-relaxed">{testimonio.testimonio}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs text-muted-foreground">
                      {new Date(testimonio.fecha).toLocaleDateString()}
                    </span>
                    <Button variant="link" size="sm">
                      Leer historia completa
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compartir" className="mt-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Comparte tu Historia de Éxito</CardTitle>
              <CardDescription>Tu experiencia puede inspirar a otros egresados y estudiantes actuales</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre-form">Nombre completo *</Label>
                    <Input
                      id="nombre-form"
                      value={nuevoTestimonio.nombre}
                      onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, nombre: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="carrera-form">Carrera *</Label>
                    <Select
                      value={nuevoTestimonio.carrera}
                      onValueChange={(value) => setNuevoTestimonio({ ...nuevoTestimonio, carrera: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu carrera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ing. en Sistemas">Ing. en Sistemas</SelectItem>
                        <SelectItem value="Ing. Industrial">Ing. Industrial</SelectItem>
                        <SelectItem value="Ing. en Mecatrónica">Ing. en Mecatrónica</SelectItem>
                        <SelectItem value="Ing. en Electrónica">Ing. en Electrónica</SelectItem>
                        <SelectItem value="Ing. en Gestión Empresarial">Ing. en Gestión Empresarial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="graduacion-form">Año de graduación *</Label>
                    <Input
                      id="graduacion-form"
                      type="number"
                      min="2000"
                      max="2025"
                      value={nuevoTestimonio.graduacion}
                      onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, graduacion: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa-form">Empresa actual *</Label>
                    <Input
                      id="empresa-form"
                      value={nuevoTestimonio.empresa}
                      onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, empresa: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="puesto-form">Puesto actual *</Label>
                    <Input
                      id="puesto-form"
                      value={nuevoTestimonio.puesto}
                      onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, puesto: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="ubicacion-form">Ubicación</Label>
                    <Input
                      id="ubicacion-form"
                      placeholder="Ciudad, País"
                      value={nuevoTestimonio.ubicacion}
                      onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, ubicacion: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="testimonio-form">Tu historia de éxito *</Label>
                  <Textarea
                    id="testimonio-form"
                    placeholder="Comparte cómo ITOESEH te ayudó en tu carrera profesional..."
                    value={nuevoTestimonio.testimonio}
                    onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, testimonio: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email-form">Email de contacto</Label>
                    <Input
                      id="email-form"
                      type="email"
                      value={nuevoTestimonio.email}
                      onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono-form">Teléfono</Label>
                    <Input
                      id="telefono-form"
                      value={nuevoTestimonio.telefono}
                      onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, telefono: e.target.value })}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Enviar Testimonio
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
