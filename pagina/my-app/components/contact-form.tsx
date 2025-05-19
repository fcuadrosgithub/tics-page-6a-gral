"use client"

import { useState, useRef } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [mensajeEnviado, setMensajeEnviado] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMensajeEnviado(false)
    setError("")

    const form = formRef.current
    if (!form) return

    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement)?.value,
      generacion: (form.elements.namedItem("generacion") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement)?.value,
      puesto: (form.elements.namedItem("puesto") as HTMLInputElement)?.value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement)?.value,
      fecha: new Date().toISOString(),
    }

    try {
      await addDoc(collection(db, "Registros"), data)
      setMensajeEnviado(true)
      form.reset()  // ✅ reset usando ref
    } catch (e) {
      console.error("Error detallado:", e)
      setError("Error al enviar el mensaje, intenta de nuevo.")
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium">Nombre completo</label>
          <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="generacion" className="text-sm font-medium">Generación</label>
          <Input id="generacion" name="generacion" placeholder="Año de egreso" required />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
        <Input id="email" name="email" type="email" placeholder="tu@ejemplo.com" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="empresa" className="text-sm font-medium">Empresa actual</label>
        <Input id="empresa" name="empresa" placeholder="Nombre de la empresa donde trabajas" />
      </div>
      <div className="space-y-2">
        <label htmlFor="puesto" className="text-sm font-medium">Puesto actual</label>
        <Input id="puesto" name="puesto" placeholder="Tu cargo o puesto" />
      </div>
      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-medium">Mensaje</label>
        <Textarea id="mensaje" name="mensaje" placeholder="Comparte tu experiencia o consulta" rows={4} />
      </div>
      {mensajeEnviado && (
        <p className="text-green-600 text-sm">¡Mensaje enviado con éxito!</p>
      )}
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
      <Button type="submit" className="w-full">Enviar mensaje</Button>
    </form>
  )
}
