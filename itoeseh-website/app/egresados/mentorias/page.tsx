"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Users, MessageCircle, Calendar, MapPin, Star, Plus, Search, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const mentores = [
  {
    id: 1,
    nombre: "Andrea Martínez",
    puesto: "Líder de Ciberseguridad",
    empresa: "Microsoft",
    carrera: "Ing. en Sistemas",
    graduacion: "2020",
    especialidades: ["Ciberseguridad", "Liderazgo Técnico", "Desarrollo de Carrera"],
    experiencia: "5 años",
    ubicacion: "Seattle, WA",
    rating: 4.9,
    sesiones: 23,
    disponibilidad: "Fines de semana",
    imagen: "/images/student1.png",
    descripcion:
      "Especialista en ciberseguridad con experiencia en equipos globales. Me apasiona ayudar a otros profesionales a crecer en el área de seguridad informática.",
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    puesto: "Director de Operaciones",
    empresa: "Tesla",
    carrera: "Ing. Industrial",
    graduacion: "2019",
    especialidades: ["Gestión de Operaciones", "Lean Manufacturing", "Liderazgo"],
    experiencia: "6 años",
    ubicacion: "Austin, TX",
    rating: 4.8,
    sesiones: 31,
    disponibilidad: "Tardes",
    imagen: "/images/student2.png",
    descripcion:
      "Director de operaciones con experiencia en manufactura automotriz. Ayudo a profesionales a optimizar procesos y desarrollar habilidades de liderazgo.",
  },
  {
    id: 3,
    nombre: "Laura Sánchez",
    puesto: "Fundadora y CEO",
    empresa: "RoboSolutions",
    carrera: "Ing. en Mecatrónica",
    graduacion: "2021",
    especialidades: ["Emprendimiento", "Robótica", "Innovación Tecnológica"],
    experiencia: "4 años",
    ubicacion: "Ciudad de México",
    rating: 5.0,
    sesiones: 18,
    disponibilidad: "Mañanas",
    imagen: "/images/student3.png",
    descripcion:
      "Emprendedora en el sector de robótica. Comparto mi experiencia en crear startups tecnológicas y liderar equipos de innovación.",
  },
]

export default function MentoriasPage() {
  const [solicitudMentoria, setSolicitudMentoria] = useState({
    mentorId: "",
    tema: "",
    objetivos: "",
    experiencia: "",
    disponibilidad: "",
    modalidad: "",
    mensaje: "",
  })
  const [dialogAbierto, setDialogAbierto] = useState(false)
  const [mentorSeleccionado, setMentorSeleccionado] = useState<any>(null)

  const handleSolicitud = (mentor: any) => {
    setMentorSeleccionado(mentor)
    setSolicitudMentoria({ ...solicitudMentoria, mentorId: mentor.id.toString() })
    setDialogAbierto(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Solicitud de mentoría enviada:", solicitudMentoria)
    setDialogAbierto(false)
    setSolicitudMentoria({
      mentorId: "",
      tema: "",
      objetivos: "",
      experiencia: "",
      disponibilidad: "",
      modalidad: "",
      mensaje: "",
    })
    // Aquí se enviaría la solicitud al servidor
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Programa de Mentorías</h1>
        <p className="text-muted-foreground">
          Conecta con egresados exitosos de ITOESEH para acelerar tu desarrollo profesional
        </p>
      </div>
      <div className="mb-6">
        <Link href="/egresados">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Regresar a Egresados
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="mentores" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mentores">Encontrar Mentor</TabsTrigger>
          <TabsTrigger value="ser-mentor">Ser Mentor</TabsTrigger>
          <TabsTrigger value="mis-mentorias">Mis Mentorías</TabsTrigger>
        </TabsList>

        <TabsContent value="mentores" className="mt-6">
          <div className="mb-6">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <Input placeholder="Buscar por especialidad, empresa o nombre..." />
              </div>
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentores.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-all">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={mentor.imagen || "/placeholder.svg"}
                        alt={mentor.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{mentor.nombre}</CardTitle>
                      <CardDescription>{mentor.puesto}</CardDescription>
                      <p className="text-sm text-muted-foreground">{mentor.empresa}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      {renderStars(mentor.rating)}
                      <span className="text-sm ml-1">{mentor.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{mentor.sesiones} sesiones</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Especialidades:</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.especialidades.map((esp, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {esp}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium">Carrera:</span>
                      <p className="text-muted-foreground">{mentor.carrera}</p>
                    </div>
                    <div>
                      <span className="font-medium">Graduación:</span>
                      <p className="text-muted-foreground">{mentor.graduacion}</p>
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin className="h-3 w-3" />
                      <span>{mentor.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>Disponible: {mentor.disponibilidad}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{mentor.descripcion}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSolicitud(mentor)} className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Solicitar Mentoría
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ser-mentor" className="mt-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Únete como Mentor</CardTitle>
              <CardDescription>
                Comparte tu experiencia y ayuda a otros egresados a crecer profesionalmente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre-mentor">Nombre completo</Label>
                    <Input id="nombre-mentor" required />
                  </div>
                  <div>
                    <Label htmlFor="email-mentor">Email</Label>
                    <Input id="email-mentor" type="email" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="empresa-mentor">Empresa actual</Label>
                    <Input id="empresa-mentor" required />
                  </div>
                  <div>
                    <Label htmlFor="puesto-mentor">Puesto actual</Label>
                    <Input id="puesto-mentor" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="carrera-mentor">Carrera en ITOESEH</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu carrera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sistemas">Ing. en Sistemas</SelectItem>
                        <SelectItem value="industrial">Ing. Industrial</SelectItem>
                        <SelectItem value="mecatronica">Ing. en Mecatrónica</SelectItem>
                        <SelectItem value="electronica">Ing. en Electrónica</SelectItem>
                        <SelectItem value="gestion">Ing. en Gestión Empresarial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="graduacion-mentor">Año de graduación</Label>
                    <Input id="graduacion-mentor" type="number" min="2000" max="2025" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="especialidades-mentor">Especialidades (separadas por comas)</Label>
                  <Input
                    id="especialidades-mentor"
                    placeholder="Ej: Liderazgo, Gestión de Proyectos, Desarrollo de Software"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="experiencia-mentor">Años de experiencia</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-3">2-3 años</SelectItem>
                      <SelectItem value="4-5">4-5 años</SelectItem>
                      <SelectItem value="6-10">6-10 años</SelectItem>
                      <SelectItem value="10+">Más de 10 años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="disponibilidad-mentor">Disponibilidad</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu disponibilidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mañanas">Mañanas</SelectItem>
                      <SelectItem value="tardes">Tardes</SelectItem>
                      <SelectItem value="noches">Noches</SelectItem>
                      <SelectItem value="fines-semana">Fines de semana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="motivacion-mentor">¿Por qué quieres ser mentor?</Label>
                  <Textarea
                    id="motivacion-mentor"
                    placeholder="Comparte tu motivación para ayudar a otros egresados..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Aplicar como Mentor
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mis-mentorias" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mentorías Activas</CardTitle>
                <CardDescription>Tus sesiones de mentoría programadas y en curso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No tienes mentorías activas en este momento</p>
                  <Button variant="outline" className="mt-4">
                    Buscar Mentor
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historial de Mentorías</CardTitle>
                <CardDescription>Sesiones completadas y evaluaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Aún no has completado ninguna sesión de mentoría</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Dialog para solicitar mentoría */}
      <Dialog open={dialogAbierto} onOpenChange={setDialogAbierto}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Solicitar Mentoría con {mentorSeleccionado?.nombre}</DialogTitle>
            <DialogDescription>Completa la información para solicitar una sesión de mentoría</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="tema">Tema principal de la mentoría</Label>
              <Select
                value={solicitudMentoria.tema}
                onValueChange={(value) => setSolicitudMentoria({ ...solicitudMentoria, tema: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desarrollo-carrera">Desarrollo de carrera</SelectItem>
                  <SelectItem value="liderazgo">Liderazgo</SelectItem>
                  <SelectItem value="habilidades-tecnicas">Habilidades técnicas</SelectItem>
                  <SelectItem value="emprendimiento">Emprendimiento</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="objetivos">Objetivos de la mentoría</Label>
              <Textarea
                id="objetivos"
                placeholder="¿Qué esperas lograr con esta mentoría?"
                value={solicitudMentoria.objetivos}
                onChange={(e) => setSolicitudMentoria({ ...solicitudMentoria, objetivos: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="experiencia-actual">Tu experiencia actual</Label>
              <Textarea
                id="experiencia-actual"
                placeholder="Cuéntanos sobre tu experiencia profesional actual..."
                value={solicitudMentoria.experiencia}
                onChange={(e) => setSolicitudMentoria({ ...solicitudMentoria, experiencia: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="disponibilidad-solicitud">Tu disponibilidad</Label>
                <Select
                  value={solicitudMentoria.disponibilidad}
                  onValueChange={(value) => setSolicitudMentoria({ ...solicitudMentoria, disponibilidad: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mañanas">Mañanas</SelectItem>
                    <SelectItem value="tardes">Tardes</SelectItem>
                    <SelectItem value="noches">Noches</SelectItem>
                    <SelectItem value="fines-semana">Fines de semana</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="modalidad-solicitud">Modalidad preferida</Label>
                <Select
                  value={solicitudMentoria.modalidad}
                  onValueChange={(value) => setSolicitudMentoria({ ...solicitudMentoria, modalidad: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="videollamada">Videollamada</SelectItem>
                    <SelectItem value="presencial">Presencial</SelectItem>
                    <SelectItem value="telefono">Teléfono</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="mensaje-adicional">Mensaje adicional</Label>
              <Textarea
                id="mensaje-adicional"
                placeholder="¿Hay algo más que te gustaría compartir con tu mentor?"
                value={solicitudMentoria.mensaje}
                onChange={(e) => setSolicitudMentoria({ ...solicitudMentoria, mensaje: e.target.value })}
                rows={3}
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogAbierto(false)}>
                Cancelar
              </Button>
              <Button type="submit">Enviar Solicitud</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
