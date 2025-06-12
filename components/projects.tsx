import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Community ResQ App",
      description:
        "A multilingual emergency response app promoting community support and real-time resource coordination. Designed with accessibility in mind; supports offline use and user-friendly UI.",
      technologies: ["Flutter", "Laravel", "Firebase", "MySQL"],
      githubUrl: "https://github.com/KikyCodes/CommunityResQ",
    },
    {
      title: "Referee Game App",
      description: "A multi-user game platform with real-time score moderation and admin control.",
      technologies: ["React", "Node.js"],
      githubUrl: "https://github.com/KikyCodes?tab=repositories",
    },
    {
      title: "My Portfolio",
      description: "A responsive portfolio website showcasing projects and skills with modern design.",
      technologies: ["TypeScript", "React", "Next.js"],
      githubUrl: "https://github.com/KikyCodes/my_portfolio",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/placeholder.svg?height=200&width=400" alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
