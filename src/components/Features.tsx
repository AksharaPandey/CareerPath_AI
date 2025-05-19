
import React from 'react';
import { 
  Brain, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Compass, 
  Lightbulb 
} from 'lucide-react';

const features = [
  {
    name: 'Personalized Recommendations',
    description: 'Get career suggestions tailored to your unique skills, interests, and aptitudes.',
    icon: Brain,
    color: 'bg-blue-100 text-career-blue'
  },
  {
    name: 'Skill Development Guidance',
    description: 'Discover courses and resources to help you build the skills you need for your dream career.',
    icon: BookOpen,
    color: 'bg-purple-100 text-career-purple'
  },
  {
    name: 'Industry Insights',
    description: 'Access up-to-date information about job prospects, salary ranges, and industry trends.',
    icon: TrendingUp,
    color: 'bg-blue-100 text-career-blue'
  },
  {
    name: 'Career Path Visualization',
    description: 'See clear pathways from where you are to where you want to be in your career journey.',
    icon: Compass,
    color: 'bg-purple-100 text-career-purple'
  },
  {
    name: 'Educational Requirements',
    description: 'Understand the qualifications and certifications needed for different career options.',
    icon: Award,
    color: 'bg-blue-100 text-career-blue'
  },
  {
    name: 'Action Plan Creation',
    description: 'Get a customized roadmap with concrete steps to achieve your career goals.',
    icon: Lightbulb,
    color: 'bg-purple-100 text-career-purple'
  }
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-career-purple tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need for career success
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our AI-driven platform offers comprehensive tools and insights to guide your career journey.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="career-card">
                <div className={`rounded-lg p-3 inline-flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
