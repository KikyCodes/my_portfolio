import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "IT Specialist Intern",
      company: "Kenya Wildlife Service",
      period: "June 2024 - September 2024",
      description:
        "Streamlined network diagnostics, cutting downtime by 40%. Resolved daily system issues and supported end-user queries with precision.",
      technologies: ["Network Administration", "System Maintenance", "Technical Support"],
    },
    {
      title: "Freelance Web Developer",
      company: "Fiverr",
      period: "2023 - 2024",
      description:
        "Built responsive web applications from scratch. Implemented modern UI/UX designs and optimized application performance for various clients.",
      technologies: ["HTML", "CSS", "JavaScript", "Flutter", "Laravel"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="mt-2 sm:mt-0">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
