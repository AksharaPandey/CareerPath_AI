
import React, { useState } from 'react';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import AssessmentForm from '@/components/AssessmentForm';
import CareerRecommendations, { CareerRecommendation } from '@/components/CareerRecommendations';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Assessment = () => {
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [recommendations, setRecommendations] = useState<{
    recommendations: CareerRecommendation[];
    userProfile: {
      strengths: string[];
      interests: string[];
      aptitudes: {
        name: string;
        score: number;
      }[];
    };
  } | null>(null);

  const handleAssessmentComplete = (results: any) => {
    setRecommendations(results);
    setAssessmentComplete(true);
    window.scrollTo(0, 0);
  };

  const sections = [
    "Basic Information",
    "Skills & Interests",
    "Strengths & Aptitudes",
    "Self-Assessment",
    "Goals & Challenges"
  ];

  const handleSectionChange = (sectionIndex: number) => {
    setActiveSection(sectionIndex);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {!assessmentComplete ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Career Assessment
                </h1>
                <p className="mt-2 text-xl text-gray-600">
                  Complete this assessment to get personalized career recommendations
                </p>
              </div>
              
              <div className="mb-6">
                <Tabs 
                  defaultValue={sections[activeSection]} 
                  onValueChange={(value) => handleSectionChange(sections.indexOf(value))}
                  value={sections[activeSection]}
                >
                  <TabsList className="w-full grid grid-cols-5 mb-4">
                    {sections.map((section, index) => (
                      <TabsTrigger key={index} value={section} className="text-xs md:text-sm">
                        {index + 1}. {section.split(' ')[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              
              <AssessmentForm onComplete={handleAssessmentComplete} initialStep={activeSection} />
            </>
          ) : (
            <div>
              {recommendations && (
                <CareerRecommendations
                  recommendations={recommendations.recommendations}
                  userProfile={recommendations.userProfile}
                />
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;
