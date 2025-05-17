import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, User } from "lucide-react"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params Promise first
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const project = Array.isArray(projects)
    ? projects.find((p) => p.id === id)
    : undefined;

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/#projects" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-[300px] md:h-[400px] w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={project.image || `/placeholder.svg?height=400&width=800`}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-600 text-white">{project.status}</Badge>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="outline" className="text-blue-600 border-blue-600">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

              {project.fullDescription.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Challenges
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Results
                </h3>
                <ul className="space-y-2">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Project Lead</h3>
                <div className="flex items-center">
                  <User className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{project.teamLead}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Status</h3>
                <Badge
                  className={`${
                    project.status === "Completed"
                      ? "bg-green-600"
                      : project.status === "Ongoing"
                      ? "bg-blue-600"
                      : "bg-amber-600"
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-blue-600 border-blue-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/#contact">Contact About This Project</Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                >
                  <Link href="/#donate">Support This Research</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
