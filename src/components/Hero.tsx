import { Calculator, Calendar } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-bg from-primary/10 via-background to-chart-2/5 pb-12">
        <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calculator className="w-4 h-4 mr-2" />
                    Online Math Tutoring
            </div>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Struggling with Math?
            <span className="text-primary block">Let's Fix that!</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Personalized online math tutoring designed to build confidence, improve grades, and unlock your full potential in mathematics.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
                size="lg"
                className="text-lg px-8 py-6"
                data-testid="button-schedule-hero"
            >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free First Session
            </Button>
            <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                data-testid="button-learn-more-hero"
            >
                Learn More
            </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>
        </div>
        </div>
    </section>
  )
}
