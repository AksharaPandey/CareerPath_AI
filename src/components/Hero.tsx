
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" aria-hidden="true" />
      
      {/* Hero content */}
      <div className="relative pt-10 pb-20 sm:pt-16 lg:pt-24 lg:pb-28">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-career-purple tracking-wide uppercase">
                  Your Career Journey Starts Here
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Discover Your Ideal</span>
                  <span className="block bg-clip-text text-transparent bg-career-gradient">Career Path</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Our AI-powered career counseling system analyzes your skills, interests, and aptitudes 
                to provide personalized career recommendations that align with your strengths and passions.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Link to="/assessment">
                  <Button className="w-full sm:w-auto bg-career-gradient hover:opacity-90 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                    Start Your Assessment <ArrowRight className="ml-2 h-5 w-5 animate-bounce-gentle" />
                  </Button>
                </Link>
                <p className="mt-3 text-sm text-gray-500">
                  Free personalized guidance for your future career.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-career-blue">
                  <span className="relative rounded-lg overflow-hidden block">
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt="Students discussing career options"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-career-blue/30 to-career-purple/30" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
