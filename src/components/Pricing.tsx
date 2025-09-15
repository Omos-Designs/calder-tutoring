"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Star } from "lucide-react";

export default function Pricing() {
  const openCalendly = () => {
    console.log('Opening Calendly for scheduling');
    // TODO: Remove mock functionality - integrate with actual Calendly
    window.open('https://calendly.com/jon-calder', '_blank');
  };

  const pricingPlans = [
    {
      title: "Initial Session",
      price: "Free",
    //   period: "per hour",
      description: "Perfect for occasional help or exam preparation",
      features: [
        "30 Minute Intro Session",
        "If it's not a fit, no charge",
        "No contracts or commitments",
      ],
      buttonText: "Book Initial Session",
      popular: false
    },
    {
      title: "4 Hour Tutoring Session(s)",
      price: "$180",
      period: "package",
      originalPrice: "$200",
      description: "Best value for ongoing learning and improvement",
      features: [
        "4 Hour Tutoring - Scheduled as needed",
        "Priority scheduling",
        "Personalized Help with Homework, Tests/Quizzes, and/or Concepts",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      title: "8 Hour Tutoring Session(s)",
      price: "$320",
      period: "package",
      originalPrice: "$400", 
      description: "Comprehensive support for challenging topics in mathematics",
      features: [
        "Everything in 4 Hour Package, plus:",
        "8 sessions scheduled at your convenience",
        "Guaranteed & priority scheduling",
        "Exam preparation"
      ],
      buttonText: "Get Started",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the tutoring package that fits your learning needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.title} 
                className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
                data-testid={`card-pricing-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-700 rounded-2xl">
                    <Badge className=" text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <span className="line-through">{plan.originalPrice}</span>
                        <span className="text-chart-2 ml-2 font-medium">
                          {plan.originalPrice === "$400" ? "Save 20%" : "Save 10%"}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <Button 
                    className="w-full mb-6" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={openCalendly}
                    data-testid={`button-pricing-${index}`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {plan.buttonText}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-chart-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All sessions include progress tracking & 1:1 personalized attention
            </p>
            <p className="text-sm text-muted-foreground">
              First session is always risk-free with our satisfaction guarantee. If it's not a fit, you don't pay a thing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}