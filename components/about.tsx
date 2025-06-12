import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack software engineer with experience of building web applications and distributed
              systems. I love solving complex problems and turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My journey in software development started with a curiosity about how things work under the hood. This
              curiosity has driven me to continuously learn new technologies and best practices, always striving to
              write better code and build better products.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me contributing to open source projects, writing technical blog posts,
              or exploring the latest developments in AI and machine learning.
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎓 Computer Science Degree</li>

                <li>🌍 Remote Work Enthusiast</li>

                <li>📚 Continuous Learner</li>
                <li>🎯 Problem Solver</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
