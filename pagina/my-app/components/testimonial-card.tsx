import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  name: string
  graduation: string
  position: string
  company: string
  testimonial: string
  image: string
}

export default function TestimonialCard({
  name,
  graduation,
  position,
  company,
  testimonial,
  image,
}: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src={image || "/placeholder.svg"} alt={`Foto de ${name}`} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-sm text-muted-foreground">Generación {graduation}</p>
            </div>
          </div>
          <div className="relative">
            <QuoteIcon className="absolute -top-2 -left-2 h-6 w-6 text-blue-200 dark:text-blue-900" />
            <p className="pl-4 text-muted-foreground">{testimonial}</p>
          </div>
          <div className="pt-2">
            <p className="text-sm font-medium">{position}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
