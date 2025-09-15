"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

import React from 'react'

export function openCalendly() {
}

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-primary">
          Calder Tutoring
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-about"
          >
            About Jon
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-pricing"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
            data-testid="link-contact"
          >
            Contact
          </button>
        </nav>

        <Button 
          onClick={openCalendly}
          className="hidden md:flex"
          data-testid="button-schedule-header"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Session
        </Button>

        <Button
          onClick={openCalendly}
          size="sm"
          className="md:hidden"
          data-testid="button-schedule-mobile"
        >
          Schedule
        </Button>
      </div>
    </header>
  );
}

export default Header