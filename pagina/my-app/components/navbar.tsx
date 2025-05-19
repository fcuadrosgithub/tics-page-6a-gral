"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
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
import { ModeToggle } from "./mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo ITSOEH"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="hidden font-bold sm:inline-block">Ingeniería en TIC - ITSOEH</span>
          </Link>
        </div>

        {isDesktop ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Inicio</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Secciones</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-teal-700 p-6 no-underline outline-none focus:shadow-md"
                          href="/egresados"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Egresados</div>
                          <p className="text-sm leading-tight text-white/90">
                            Red de egresados, bolsa de trabajo, testimonios y seguimiento profesional.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/estudiantes" title="Estudiantes">
                      Recursos académicos, horarios, eventos y servicios.
                    </ListItem>
                    <ListItem href="/aspirantes" title="Aspirantes">
                      Proceso de admisión, plan de estudios y becas.
                    </ListItem>
                    <ListItem href="/publico" title="Público General">
                      Noticias, eventos y colaboraciones.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/oferta-educativa" title="Oferta Educativa">
                      Plan de estudios, especialidades y perfil de egreso.
                    </ListItem>
                    <ListItem href="/investigacion" title="Investigación">
                      Proyectos, publicaciones y colaboraciones.
                    </ListItem>
                    <ListItem href="/vinculacion" title="Vinculación">
                      Convenios con empresas y prácticas profesionales.
                    </ListItem>
                    <ListItem href="/instalaciones" title="Instalaciones">
                      Laboratorios, biblioteca y espacios de aprendizaje.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contacto" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contacto</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-foreground/80 transition-colors" onClick={() => setOpen(false)}>
                  Inicio
                </Link>
                <Link
                  href="/estudiantes"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Estudiantes
                </Link>
                <Link
                  href="/egresados"
                  className="text-blue-600 dark:text-blue-400 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Egresados
                </Link>
                <Link
                  href="/aspirantes"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Aspirantes
                </Link>
                <Link
                  href="/publico"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Público General
                </Link>
                <Link
                  href="/oferta-educativa"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Oferta Educativa
                </Link>
                <Link
                  href="/contacto"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        )}

        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
