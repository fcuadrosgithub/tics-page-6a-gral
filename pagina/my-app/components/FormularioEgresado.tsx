// app/components/FormularioEgresado.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function FormularioEgresado() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    generacion: "",
    actividad: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegistroEgresado = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Registros"), form);
      alert("Egresado registrado correctamente");
      setForm({ nombre: "", correo: "", generacion: "", actividad: "", mensaje: "" });
    } catch (error) {
      alert("Error al registrar egresado");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleRegistroEgresado}
      className="space-y-4 bg-white p-6 rounded-2xl shadow"
    >
      <Input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre completo"
        required
      />
      <Input
        type="email"
        name="correo"
        value={form.correo}
        onChange={handleChange}
        placeholder="Correo electrónico"
        required
      />
      <Input
        type="text"
        name="generacion"
        value={form.generacion}
        onChange={handleChange}
        placeholder="Generación (ej. 2018-2022)"
        required
      />
      <Input
        type="text"
        name="actividad"
        value={form.actividad}
        onChange={handleChange}
        placeholder="Empresa actual o actividad"
      />
      <Textarea
        name="mensaje"
        value={form.mensaje}
        onChange={handleChange}
        placeholder="Mensaje o testimonio"
        className="resize-none"
      />
      <Button type="submit" className="w-full">
        Registrar
      </Button>
    </form>
  );
}
