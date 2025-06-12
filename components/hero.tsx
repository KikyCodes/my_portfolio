import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            CVK
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Cynthia Virginia Kikechi</h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">Full-Stack Software Engineer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about creating innovative solutions and building scalable applications. Experienced in modern web
            technologies and app development.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg">
            <Link href="+254 797299786">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="file:///C:/Users/hp/Downloads/Kikechi's%20Resume%20(1).pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/KikyCodes" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/cynthia-kikechi-82a795268/" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:kikechiv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
