import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Flutter", "CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Laravel","MySQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Firebase","GitHub Actions", "Vercel"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "Postman", "Agile/Scrum"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
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
