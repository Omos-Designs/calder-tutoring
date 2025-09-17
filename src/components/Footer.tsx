"use client";

import { Mail, Calendar } from "lucide-react";

export default function Footer() {
  const openCalendly = () => {
    window.open("https://calendly.com/joncalder-caldertutoring/30min", "_blank");
  };

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl text-primary mb-4">Calder Tutoring</h3>
              <p className="text-muted-foreground mb-4">
                Expert online math tutoring designed to help students build confidence and achieve academic success.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:joncalder@caldertutoring.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  joncalder@caldertutoring.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Algebra Tutoring</li>
                <li>Geometry Tutoring</li>
                <li>Calculus Tutoring</li>
                <li>Pre-Calculus Tutoring</li>
                <li>Exam Preparation</li>
                <li>Homework Help</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button 
                    onClick={openCalendly}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="link-footer-schedule"
                  >
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Schedule Session
                  </button>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Jon
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-primary transition-colors">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2025 Calder Tutoring. All rights reserved.
              <span className="mx-2">•</span>
              Designed & Developed by{" "}
              <a
                href="https://omosdesigns.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline-offset-4 hover:underline"
                aria-label="Visit Omos Designs website (opens in a new tab)"
              >
                Omos Designs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}