import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users } from "lucide-react";
import tutorImage from "../../public/calder_tutor_headshot.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Your Tutor, Jon!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know Jon Calder, your dedicated math tutor committed to your success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Jon Calder</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    With over 8 years of experience in mathematics and helping students succeed, I specialize in making complex mathematical concepts digestible and engaging. My approach focuses on building on your foundational understanding of the topics and connecting the dots to the area your are struggling with.
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I currently work as a Civil Engineer, using math nearly every day, and have successfully helped countless students improve their grades and develop a genuine appreciation for mathematics. My teaching philosophy centers on personalized learning plans tailored to each student&apos;s unique needs and learning style.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-foreground">BS | Civil Engineering</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Passionate Math Tutor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-foreground">8+ Years Teaching Experience</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-medium text-foreground mb-3">Age Groups:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" data-testid="badge-algebra">High School</Badge>
                      <Badge variant="secondary" data-testid="badge-geometry">Undergraduate</Badge>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-medium text-foreground mb-3">Tutoring Subjects:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" data-testid="badge-calculus">Calculus</Badge>
                      <Badge variant="secondary" data-testid="badge-algebra">Algebra</Badge>
                      <Badge variant="secondary" data-testid="badge-geometry">Geometry</Badge>
                      <Badge variant="secondary" data-testid="badge-precalculus">Pre-Calculus</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <Image 
                  src={tutorImage}
                  alt="Jon Calder - Professional Math Tutor"
                  className="w-100 h-120 object-cover rounded-lg shadow-lg"
                  data-testid="img-tutor"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                  Expert Tutor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}