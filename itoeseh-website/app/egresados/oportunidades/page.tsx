"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Clock, Building, DollarSign, Filter, ArrowLeft } from "lucide-react"
import Link from "next/link"

const oportunidades = [
  {
    id: 1,
    titulo: "Desarrollador Full Stack Senior",
    empresa: "TechCorp México",
    ubicacion: "Ciudad de México",
    tipo: "Tiempo completo",
    salario: "$45,000 - $60,000 MXN",
    descripcion: "Buscamos un desarrollador full stack con experiencia en React, Node.js y bases de datos.",
    requisitos: ["React", "Node.js", "MongoDB", "3+ años experiencia"],
    fechaPublicacion: "2025-05-15",
  },
  {
    id: 2,
    titulo: "Ingeniero de Sistemas",
    empresa: "Innovatech Solutions",
    ubicacion: "Guadalajara, Jalisco",
    tipo: "Tiempo completo",
    salario: "$40,000 - $55,000 MXN",
    descripcion: "Oportunidad para ingeniero de sistemas con conocimientos en infraestructura cloud.",
    requisitos: ["AWS", "Docker", "Kubernetes", "Linux"],
    fechaPublicacion: "2025-05-12",
  },
  {
    id: 3,
    titulo: "Especialista en Ciberseguridad",
    empresa: "SecureNet",
    ubicacion: "Monterrey, Nuevo León",
    tipo: "Tiempo completo",
    salario: "$50,000 - $70,000 MXN",
    descripcion: "Únete a nuestro equipo de ciberseguridad para proteger infraestructuras críticas.",
    requisitos: ["CISSP", "Ethical Hacking", "Firewall", "2+ años experiencia"],
    fechaPublicacion: "2025-05-10",
  },
  {
    id: 4,
    titulo: "Analista de Datos",
    empresa: "DataInsights",
    ubicacion: "Remoto",
    tipo: "Tiempo completo",
    salario: "$35,000 - $45,000 MXN",
    descripcion: "Analista de datos para trabajar con grandes volúmenes de información empresarial.",
    requisitos: ["Python", "SQL", "Tableau", "Machine Learning"],
    fechaPublicacion: "2025-05-08",
  },
]

export default function OportunidadesPage() {
  const [filtros, setFiltros] = useState({
    busqueda: "",
    ubicacion: "",
    tipo: "",
  })
  const [oportunidadesFiltradas, setOportunidadesFiltradas] = useState(oportunidades)

  const aplicarFiltros = () => {
    const filtradas = oportunidades.filter((oportunidad) => {
      const coincideBusqueda =
        oportunidad.titulo.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        oportunidad.empresa.toLowerCase().includes(filtros.busqueda.toLowerCase())
      const coincideUbicacion =
        !filtros.ubicacion || oportunidad.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase())
      const coincideTipo = !filtros.tipo || oportunidad.tipo === filtros.tipo

      return coincideBusqueda && coincideUbicacion && coincideTipo
    })
    setOportunidadesFiltradas(filtradas)
  }

  const limpiarFiltros = () => {
    setFiltros({ busqueda: "", ubicacion: "", tipo: "" })
    setOportunidadesFiltradas(oportunidades)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Oportunidades Laborales</h1>
        <p className="text-muted-foreground">
          Encuentra las mejores oportunidades laborales exclusivas para egresados de ITOESEH
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="busqueda">Buscar</Label>
              <Input
                id="busqueda"
                placeholder="Título o empresa..."
                value={filtros.busqueda}
                onChange={(e) => setFiltros({ ...filtros, busqueda: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="ubicacion">Ubicación</Label>
              <Input
                id="ubicacion"
                placeholder="Ciudad, estado..."
                value={filtros.ubicacion}
                onChange={(e) => setFiltros({ ...filtros, ubicacion: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="tipo">Tipo de empleo</Label>
              <Select value={filtros.tipo} onValueChange={(value) => setFiltros({ ...filtros, tipo: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tiempo completo">Tiempo completo</SelectItem>
                  <SelectItem value="Medio tiempo">Medio tiempo</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>
                  <SelectItem value="Prácticas">Prácticas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end gap-2">
              <Button onClick={aplicarFiltros} className="flex-1">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
              <Button variant="outline" onClick={limpiarFiltros}>
                Limpiar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resultados */}
      <div className="grid gap-6">
        {oportunidadesFiltradas.map((oportunidad) => (
          <Card key={oportunidad.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{oportunidad.titulo}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      {oportunidad.empresa}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {oportunidad.ubicacion}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {oportunidad.tipo}
                    </span>
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-600 font-semibold">
                    <DollarSign className="h-4 w-4" />
                    {oportunidad.salario}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Publicado: {new Date(oportunidad.fechaPublicacion).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{oportunidad.descripcion}</p>
              <div>
                <h4 className="font-semibold mb-2">Requisitos:</h4>
                <div className="flex flex-wrap gap-2">
                  {oportunidad.requisitos.map((requisito, index) => (
                    <Badge key={index} variant="secondary">
                      {requisito}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1">Aplicar ahora</Button>
              <Button variant="outline">Ver detalles</Button>
              <Button variant="outline">Guardar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {oportunidadesFiltradas.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground">No se encontraron oportunidades que coincidan con tus filtros.</p>
            <Button variant="outline" onClick={limpiarFiltros} className="mt-4">
              Limpiar filtros
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
