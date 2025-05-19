import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BriefcaseIcon, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface JobCardProps {
  company: string
  position: string
  location: string
  type: string
  description: string
  requirements: string[]
  link: string
}

export default function JobCard({ company, position, location, type, description, requirements, link }: JobCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{position}</h3>
            <p className="font-medium">{company}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4 text-blue-600" />
              {location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4 text-blue-600" />
              {type}
            </div>
          </div>
          <p className="text-muted-foreground">{description}</p>
          <div className="space-y-2">
            <p className="text-sm font-medium">Requisitos:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2">
            <Link href={link}>
              <Button variant="outline" className="w-full">
                <BriefcaseIcon className="mr-2 h-4 w-4" />
                Aplicar ahora
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
