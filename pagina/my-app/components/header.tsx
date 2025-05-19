"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navItems = [
  {
    title: "Alumnos",
    href: "/alumnos",
    description: "Servicios académicos, calificaciones y trámites estudiantiles",
  },
  {
    title: "Docentes",
    href: "/docentes",
    description: "Información para profesores y personal académico",
  },
  {
    title: "Aspirantes",
    href: "/aspirantes",
    description: "Proceso de admisión y oferta académica",
  },
  {
    title: "Egresados",
    href: "/egresados",
    description: "Servicios para ex-alumnos y titulación",
  },
  {
    title: "Público en general",
    href: "/publico",
    description: "Eventos, noticias e información institucional",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-xs">
              UAM
            </div>
            <span className="hidden font-bold sm:inline-block">Universidad Autónoma de México</span>
            <span className="font-bold sm:hidden">UAM</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px]">
                      <div className="flex flex-col gap-1">
                        <Link href={item.href} passHref legacyBehavior>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                        </Link>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <Link key={i} href="#" className="group rounded-md border p-2 hover:bg-accent">
                            <div className="text-sm font-medium">Subenlace {i}</div>
                            <div className="text-xs text-muted-foreground">Descripción breve</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="#">SIIAU</Link>
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex bg-blue-800 hover:bg-blue-900">
            <Link href="#">Iniciar Sesión</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href} className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                ))}
                <div className="mt-4 space-y-2">
                  <Button asChild className="w-full">
                    <Link href="#">Iniciar Sesión</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#">SIIAU</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
