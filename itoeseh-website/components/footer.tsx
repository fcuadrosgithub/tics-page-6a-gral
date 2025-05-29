import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ITOESEH</h3>
            <p className="text-sm">Instituto Tecnológico del Oeste del Estado de Hidalgo</p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>
                Paseo del Agrarismo 2000, Carr. Mixquiahuala - Tula, km 2.5, Mixquiahuala de Juárez, Hidalgo, C.P. 42700
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>01 (738) 73 54000</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>contacto@itoeseh.edu.mx</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/oferta-educativa" className="hover:underline">
                  Oferta Educativa
                </Link>
              </li>
              <li>
                <Link href="/estudiantes" className="hover:underline">
                  Estudiantes
                </Link>
              </li>
              <li>
                <Link href="/egresados" className="hover:underline">
                  Egresados
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Biblioteca Digital
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Calendario Académico
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Bolsa de Trabajo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Directorio
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Síguenos</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white/80">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Suscríbete a nuestro boletín</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-3 py-2 rounded-md text-sm bg-primary-foreground text-primary flex-1"
                />
                <button className="px-3 py-2 rounded-md text-sm bg-white text-primary font-medium">Enviar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Instituto Tecnológico del Oeste del Estado de Hidalgo. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
