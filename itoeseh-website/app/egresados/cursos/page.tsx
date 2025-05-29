"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Star, Calendar, Filter, BookOpen, Award, Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

const cursos = [
  {
    id: 1,
    titulo: "Certificación en Ciberseguridad Avanzada",
    instructor: "Dr. Miguel Hernández",
    categoria: "Tecnología",
    nivel: "Avanzado",
    duracion: "40 horas",
    modalidad: "En línea",
    precio: "$2,500",
    precioEgresado: "$1,875",
    descuento: "25%",
    rating: 4.8,
    estudiantes: 156,
    descripcion: "Curso completo de ciberseguridad con enfoque en amenazas actuales y técnicas de protección.",
    fechaInicio: "2025-06-15",
    fechaFin: "2025-07-15",
    imagen: "/images/curso-ciberseguridad.png",
    certificacion: true,
  },
  {
    id: 2,
    titulo: "Gestión de Proyectos con Metodologías Ágiles",
    instructor: "Ing. Ana López",
    categoria: "Gestión",
    nivel: "Intermedio",
    duracion: "30 horas",
    modalidad: "Híbrido",
    precio: "$2,000",
    precioEgresado: "$1,500",
    descuento: "25%",
    rating: 4.9,
    estudiantes: 203,
    descripcion: "Aprende Scrum, Kanban y otras metodologías ágiles para gestionar proyectos exitosos.",
    fechaInicio: "2025-06-01",
    fechaFin: "2025-06-30",
    imagen: "/images/curso-agiles.png",
    certificacion: true,
  },
  {
    id: 3,
    titulo: "Inteligencia Artificial y Machine Learning",
    instructor: "Dr. Carlos Mendoza",
    categoria: "Tecnología",
    nivel: "Avanzado",
    duracion: "50 horas",
    modalidad: "En línea",
    precio: "$3,000",
    precioEgresado: "$2,250",
    descuento: "25%",
    rating: 4.7,
    estudiantes: 89,
    descripcion: "Domina los fundamentos de IA y ML con aplicaciones prácticas en Python.",
    fechaInicio: "2025-07-01",
    fechaFin: "2025-08-15",
    imagen: "/images/curso-ia.png",
    certificacion: true,
  },
  {
    id: 4,
    titulo: "Liderazgo y Desarrollo Organizacional",
    instructor: "Mtra. Patricia Ruiz",
    categoria: "Liderazgo",
    nivel: "Intermedio",
    duracion: "25 horas",
    modalidad: "Presencial",
    precio: "$1,800",
    precioEgresado: "$1,350",
    descuento: "25%",
    rating: 4.6,
    estudiantes: 124,
    descripcion: "Desarrolla habilidades de liderazgo y gestión de equipos de alto rendimiento.",
    fechaInicio: "2025-06-10",
    fechaFin: "2025-07-05",
    imagen: "/images/curso-liderazgo.png",
    certificacion: false,
  },
]

export default function CursosPage() {
  const [filtros, setFiltros] = useState({
    busqueda: "",
    categoria: "",
    nivel: "",
    modalidad: "",
  })
  const [cursosFiltrados, setCursosFiltrados] = useState(cursos)

  const aplicarFiltros = () => {
    const filtrados = cursos.filter((curso) => {
      const coincideBusqueda =
        curso.titulo.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        curso.instructor.toLowerCase().includes(filtros.busqueda.toLowerCase())
      const coincideCategoria = !filtros.categoria || curso.categoria === filtros.categoria
      const coincideNivel = !filtros.nivel || curso.nivel === filtros.nivel
      const coincideModalidad = !filtros.modalidad || curso.modalidad === filtros.modalidad

      return coincideBusqueda && coincideCategoria && coincideNivel && coincideModalidad
    })
    setCursosFiltrados(filtrados)
  }

  const limpiarFiltros = () => {
    setFiltros({ busqueda: "", categoria: "", nivel: "", modalidad: "" })
    setCursosFiltrados(cursos)
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
        <h1 className="text-3xl font-bold mb-4">Educación Continua</h1>
        <p className="text-muted-foreground">
          Cursos y certificaciones especializadas con descuentos exclusivos para egresados de ITOESEH
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

      {/* Filtros */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros de búsqueda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <Label htmlFor="busqueda">Buscar</Label>
              <Input
                id="busqueda"
                placeholder="Curso o instructor..."
                value={filtros.busqueda}
                onChange={(e) => setFiltros({ ...filtros, busqueda: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="categoria">Categoría</Label>
              <Select value={filtros.categoria} onValueChange={(value) => setFiltros({ ...filtros, categoria: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tecnología">Tecnología</SelectItem>
                  <SelectItem value="Gestión">Gestión</SelectItem>
                  <SelectItem value="Liderazgo">Liderazgo</SelectItem>
                  <SelectItem value="Finanzas">Finanzas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="nivel">Nivel</Label>
              <Select value={filtros.nivel} onValueChange={(value) => setFiltros({ ...filtros, nivel: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Básico">Básico</SelectItem>
                  <SelectItem value="Intermedio">Intermedio</SelectItem>
                  <SelectItem value="Avanzado">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="modalidad">Modalidad</Label>
              <Select value={filtros.modalidad} onValueChange={(value) => setFiltros({ ...filtros, modalidad: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="En línea">En línea</SelectItem>
                  <SelectItem value="Presencial">Presencial</SelectItem>
                  <SelectItem value="Híbrido">Híbrido</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end gap-2">
              <Button onClick={aplicarFiltros} className="flex-1">
                Buscar
              </Button>
              <Button variant="outline" onClick={limpiarFiltros}>
                Limpiar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursosFiltrados.map((curso) => (
          <Card key={curso.id} className="hover:shadow-lg transition-all">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
              <div className="h-full w-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{curso.categoria}</Badge>
                {curso.certificacion && (
                  <Badge variant="outline" className="gap-1">
                    <Award className="h-3 w-3" />
                    Certificación
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg leading-tight">{curso.titulo}</CardTitle>
              <CardDescription>Por {curso.instructor}</CardDescription>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {renderStars(curso.rating)}
                  <span className="ml-1">{curso.rating}</span>
                </div>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {curso.estudiantes}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{curso.descripcion}</p>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {curso.duracion}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {curso.modalidad}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground line-through">{curso.precio}</span>
                  <Badge variant="destructive">{curso.descuento} OFF</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">{curso.precioEgresado}</span>
                  <span className="text-xs text-muted-foreground">Precio egresado</span>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>Inicio: {new Date(curso.fechaInicio).toLocaleDateString()}</p>
                <p>Fin: {new Date(curso.fechaFin).toLocaleDateString()}</p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1">Inscribirse</Button>
              <Button variant="outline" size="icon">
                <Play className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {cursosFiltrados.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground">No se encontraron cursos que coincidan con tus filtros.</p>
            <Button variant="outline" onClick={limpiarFiltros} className="mt-4">
              Limpiar filtros
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
