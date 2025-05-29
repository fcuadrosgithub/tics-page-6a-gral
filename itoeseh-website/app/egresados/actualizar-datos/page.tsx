"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, Briefcase, GraduationCap, Settings, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ActualizarDatosPage() {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
    pais: "México",
  })

  const [datosAcademicos, setDatosAcademicos] = useState({
    carrera: "",
    anoGraduacion: "",
    numeroControl: "",
    especialidad: "",
    tituloTesis: "",
    promedio: "",
  })

  const [datosProfesionales, setDatosProfesionales] = useState({
    empresaActual: "",
    puestoActual: "",
    sectorIndustria: "",
    salarioRango: "",
    experienciaAnos: "",
    habilidades: "",
    certificaciones: "",
    linkedin: "",
    sitioWeb: "",
  })

  const [preferencias, setPreferencias] = useState({
    recibirOfertas: false,
    recibirEventos: false,
    recibirBoletin: false,
    participarMentorias: false,
    aparecerDirectorio: false,
  })

  const [guardado, setGuardado] = useState(false)
  const [error, setError] = useState("")

  const handleSubmitPersonales = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular guardado
    setGuardado(true)
    setTimeout(() => setGuardado(false), 3000)
    console.log("Datos personales guardados:", datosPersonales)
  }

  const handleSubmitAcademicos = (e: React.FormEvent) => {
    e.preventDefault()
    setGuardado(true)
    setTimeout(() => setGuardado(false), 3000)
    console.log("Datos académicos guardados:", datosAcademicos)
  }

  const handleSubmitProfesionales = (e: React.FormEvent) => {
    e.preventDefault()
    setGuardado(true)
    setTimeout(() => setGuardado(false), 3000)
    console.log("Datos profesionales guardados:", datosProfesionales)
  }

  const handleSubmitPreferencias = (e: React.FormEvent) => {
    e.preventDefault()
    setGuardado(true)
    setTimeout(() => setGuardado(false), 3000)
    console.log("Preferencias guardadas:", preferencias)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Actualizar mis Datos</h1>
        <p className="text-muted-foreground">
          Mantén tu información actualizada para recibir las mejores oportunidades y mantenerte conectado con la
          comunidad ITOESEH
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

      {guardado && (
        <Alert className="mb-6 border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">¡Datos guardados exitosamente!</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="personales" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personales" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Personales
          </TabsTrigger>
          <TabsTrigger value="academicos" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Académicos
          </TabsTrigger>
          <TabsTrigger value="profesionales" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Profesionales
          </TabsTrigger>
          <TabsTrigger value="preferencias" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Preferencias
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personales" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
              <CardDescription>Actualiza tu información personal de contacto</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitPersonales} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">Nombre(s) *</Label>
                    <Input
                      id="nombre"
                      value={datosPersonales.nombre}
                      onChange={(e) => setDatosPersonales({ ...datosPersonales, nombre: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="apellidos">Apellidos *</Label>
                    <Input
                      id="apellidos"
                      value={datosPersonales.apellidos}
                      onChange={(e) => setDatosPersonales({ ...datosPersonales, apellidos: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={datosPersonales.email}
                      onChange={(e) => setDatosPersonales({ ...datosPersonales, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      value={datosPersonales.telefono}
                      onChange={(e) => setDatosPersonales({ ...datosPersonales, telefono: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                    <Input
                      id="fechaNacimiento"
                      type="date"
                      value={datosPersonales.fechaNacimiento}
                      onChange={(e) => setDatosPersonales({ ...datosPersonales, fechaNacimiento: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pais">País</Label>
                    <Select
                      value={datosPersonales.pais}
                      onValueChange={(value) => setDatosPersonales({ ...datosPersonales, pais: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="México">México</SelectItem>
                        <SelectItem value="Estados Unidos">Estados Unidos</SelectItem>
                        <SelectItem value="Canadá">Canadá</SelectItem>
                        <SelectItem value="España">España</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input
                    id="direccion"
                    value={datosPersonales.direccion}
                    onChange={(e) => setDatosPersonales({ ...datosPersonales, direccion: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Input
                      id="ciudad"
                      value={datosPersonales.ciudad}
                      onChange={(e) => setDatosPersonales({ ...datosPersonales, ciudad: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="estado">Estado</Label>
                    <Input
                      id="estado"
                      value={datosPersonales.estado}
                      onChange={(e) => setDatosPersonales({ ...datosPersonales, estado: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="codigoPostal">Código Postal</Label>
                    <Input
                      id="codigoPostal"
                      value={datosPersonales.codigoPostal}
                      onChange={(e) => setDatosPersonales({ ...datosPersonales, codigoPostal: e.target.value })}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Guardar Información Personal
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academicos" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Información Académica</CardTitle>
              <CardDescription>Información sobre tu formación en ITOESEH</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitAcademicos} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="carrera">Carrera *</Label>
                    <Select
                      value={datosAcademicos.carrera}
                      onValueChange={(value) => setDatosAcademicos({ ...datosAcademicos, carrera: value })}
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
                  <div>
                    <Label htmlFor="anoGraduacion">Año de graduación *</Label>
                    <Input
                      id="anoGraduacion"
                      type="number"
                      min="2000"
                      max="2025"
                      value={datosAcademicos.anoGraduacion}
                      onChange={(e) => setDatosAcademicos({ ...datosAcademicos, anoGraduacion: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="numeroControl">Número de control</Label>
                    <Input
                      id="numeroControl"
                      value={datosAcademicos.numeroControl}
                      onChange={(e) => setDatosAcademicos({ ...datosAcademicos, numeroControl: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="promedio">Promedio</Label>
                    <Input
                      id="promedio"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={datosAcademicos.promedio}
                      onChange={(e) => setDatosAcademicos({ ...datosAcademicos, promedio: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="especialidad">Especialidad</Label>
                  <Input
                    id="especialidad"
                    value={datosAcademicos.especialidad}
                    onChange={(e) => setDatosAcademicos({ ...datosAcademicos, especialidad: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="tituloTesis">Título de tesis</Label>
                  <Input
                    id="tituloTesis"
                    value={datosAcademicos.tituloTesis}
                    onChange={(e) => setDatosAcademicos({ ...datosAcademicos, tituloTesis: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Guardar Información Académica
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profesionales" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Información Profesional</CardTitle>
              <CardDescription>Información sobre tu experiencia laboral actual</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitProfesionales} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="empresaActual">Empresa actual</Label>
                    <Input
                      id="empresaActual"
                      value={datosProfesionales.empresaActual}
                      onChange={(e) => setDatosProfesionales({ ...datosProfesionales, empresaActual: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="puestoActual">Puesto actual</Label>
                    <Input
                      id="puestoActual"
                      value={datosProfesionales.puestoActual}
                      onChange={(e) => setDatosProfesionales({ ...datosProfesionales, puestoActual: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sectorIndustria">Sector/Industria</Label>
                    <Select
                      value={datosProfesionales.sectorIndustria}
                      onValueChange={(value) =>
                        setDatosProfesionales({ ...datosProfesionales, sectorIndustria: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Tecnología">Tecnología</SelectItem>
                        <SelectItem value="Manufactura">Manufactura</SelectItem>
                        <SelectItem value="Automotriz">Automotriz</SelectItem>
                        <SelectItem value="Energía">Energía</SelectItem>
                        <SelectItem value="Consultoría">Consultoría</SelectItem>
                        <SelectItem value="Educación">Educación</SelectItem>
                        <SelectItem value="Gobierno">Gobierno</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experienciaAnos">Años de experiencia</Label>
                    <Select
                      value={datosProfesionales.experienciaAnos}
                      onValueChange={(value) =>
                        setDatosProfesionales({ ...datosProfesionales, experienciaAnos: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 años</SelectItem>
                        <SelectItem value="2-3">2-3 años</SelectItem>
                        <SelectItem value="4-5">4-5 años</SelectItem>
                        <SelectItem value="6-10">6-10 años</SelectItem>
                        <SelectItem value="10+">Más de 10 años</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="salarioRango">Rango salarial (opcional)</Label>
                  <Select
                    value={datosProfesionales.salarioRango}
                    onValueChange={(value) => setDatosProfesionales({ ...datosProfesionales, salarioRango: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20-30k">$20,000 - $30,000 MXN</SelectItem>
                      <SelectItem value="30-40k">$30,000 - $40,000 MXN</SelectItem>
                      <SelectItem value="40-50k">$40,000 - $50,000 MXN</SelectItem>
                      <SelectItem value="50-70k">$50,000 - $70,000 MXN</SelectItem>
                      <SelectItem value="70k+">Más de $70,000 MXN</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="habilidades">Habilidades principales</Label>
                  <Textarea
                    id="habilidades"
                    placeholder="Ej: JavaScript, Python, Project Management, etc."
                    value={datosProfesionales.habilidades}
                    onChange={(e) => setDatosProfesionales({ ...datosProfesionales, habilidades: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="certificaciones">Certificaciones</Label>
                  <Textarea
                    id="certificaciones"
                    placeholder="Ej: PMP, AWS Certified, Scrum Master, etc."
                    value={datosProfesionales.certificaciones}
                    onChange={(e) => setDatosProfesionales({ ...datosProfesionales, certificaciones: e.target.value })}
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      placeholder="https://linkedin.com/in/tu-perfil"
                      value={datosProfesionales.linkedin}
                      onChange={(e) => setDatosProfesionales({ ...datosProfesionales, linkedin: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sitioWeb">Sitio web personal</Label>
                    <Input
                      id="sitioWeb"
                      placeholder="https://tu-sitio.com"
                      value={datosProfesionales.sitioWeb}
                      onChange={(e) => setDatosProfesionales({ ...datosProfesionales, sitioWeb: e.target.value })}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Guardar Información Profesional
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferencias" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferencias de Comunicación</CardTitle>
              <CardDescription>Configura cómo quieres que ITOESEH se comunique contigo</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitPreferencias} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="recibirOfertas"
                      checked={preferencias.recibirOfertas}
                      onCheckedChange={(checked) =>
                        setPreferencias({ ...preferencias, recibirOfertas: checked as boolean })
                      }
                    />
                    <Label
                      htmlFor="recibirOfertas"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Recibir ofertas laborales exclusivas
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="recibirEventos"
                      checked={preferencias.recibirEventos}
                      onCheckedChange={(checked) =>
                        setPreferencias({ ...preferencias, recibirEventos: checked as boolean })
                      }
                    />
                    <Label
                      htmlFor="recibirEventos"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Notificaciones de eventos y actividades
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="recibirBoletin"
                      checked={preferencias.recibirBoletin}
                      onCheckedChange={(checked) =>
                        setPreferencias({ ...preferencias, recibirBoletin: checked as boolean })
                      }
                    />
                    <Label
                      htmlFor="recibirBoletin"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Boletín mensual de noticias
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="participarMentorias"
                      checked={preferencias.participarMentorias}
                      onCheckedChange={(checked) =>
                        setPreferencias({ ...preferencias, participarMentorias: checked as boolean })
                      }
                    />
                    <Label
                      htmlFor="participarMentorias"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Participar en programa de mentorías
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="aparecerDirectorio"
                      checked={preferencias.aparecerDirectorio}
                      onCheckedChange={(checked) =>
                        setPreferencias({ ...preferencias, aparecerDirectorio: checked as boolean })
                      }
                    />
                    <Label
                      htmlFor="aparecerDirectorio"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Aparecer en el directorio público de egresados
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Guardar Preferencias
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
