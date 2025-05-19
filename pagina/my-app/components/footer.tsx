import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Ingeniería en TIC - ITSOEH</h3>
            <p className="text-sm text-muted-foreground">
              Formando profesionales con excelencia académica y compromiso social en el Instituto Tecnológico Superior
              del Occidente del Estado de Hidalgo.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Secciones</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/estudiantes" className="text-muted-foreground hover:text-blue-600">
                  Estudiantes
                </Link>
              </li>
              <li>
                <Link href="/egresados" className="text-muted-foreground hover:text-blue-600">
                  Egresados
                </Link>
              </li>
              <li>
                <Link href="/aspirantes" className="text-muted-foreground hover:text-blue-600">
                  Aspirantes
                </Link>
              </li>
              <li>
                <Link href="/publico" className="text-muted-foreground hover:text-blue-600">
                  Público General
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/oferta-educativa" className="text-muted-foreground hover:text-blue-600">
                  Oferta Educativa
                </Link>
              </li>
              <li>
                <Link href="/investigacion" className="text-muted-foreground hover:text-blue-600">
                  Investigación
                </Link>
              </li>
              <li>
                <Link href="/vinculacion" className="text-muted-foreground hover:text-blue-600">
                  Vinculación
                </Link>
              </li>
              <li>
                <Link href="/instalaciones" className="text-muted-foreground hover:text-blue-600">
                  Instalaciones
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-muted-foreground">
                  Paseo del Agrarismo 2000, Mixquiahuala de Juárez, Hidalgo, México
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-muted-foreground">+52 (738) 123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-muted-foreground">tic@itsoeh.edu.mx</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
