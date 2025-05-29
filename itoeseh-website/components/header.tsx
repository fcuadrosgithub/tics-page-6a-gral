import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" width={40} height={40} alt="ITSOEH Logo" className="h-8 w-auto" />
          <Link href="/" className="font-bold">
            ITSOEH
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="/oferta-educativa" className="text-sm font-medium hover:text-primary transition-colors">
            Oferta Educativa
          </Link>
          <Link href="/estudiantes" className="text-sm font-medium hover:text-primary transition-colors">
            Estudiantes
          </Link>
          <Link
            href="/egresados"
            className="text-sm font-medium hover:text-primary transition-colors font-bold text-primary"
          >
            Egresados
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Iniciar Sesión
          </Button>
          <Button size="sm" className="hidden md:flex">
            Contacto
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
