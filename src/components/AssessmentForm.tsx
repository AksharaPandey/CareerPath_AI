import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { generateCareerRecommendations } from '@/lib/career-ai';

type AssessmentStep = {
  title: string;
  description: string;
  fields: React.ReactNode;
};

interface AssessmentFormProps {
  onComplete: (recommendations: any) => void;
  initialStep?: number;
}

const AssessmentForm = ({ onComplete, initialStep = 0 }: AssessmentFormProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education: '',
    skills: '',
    interests: [],
    strengths: [],
    analytical: 50,
    creative: 50,
    social: 50,
    practical: 50,
    leadership: 50,
    technology: 50,
    challenges: '',
    futureGoals: '',
  });

  // Update current step when initialStep prop changes
  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const interestOptions = [
    "Technology & Computing",
    "Business & Finance",
    "Healthcare & Medicine",
    "Arts & Design",
    "Education & Teaching",
    "Science & Research",
    "Engineering",
    "Communication & Media",
    "Law & Public Policy",
    "Environment & Nature",
  ];

  const strengthOptions = [
    "Problem Solving",
    "Communication",
    "Leadership",
    "Creativity",
    "Analytical Thinking",
    "Technical Skills",
    "Teamwork",
    "Adaptability",
    "Attention to Detail",
    "Organization",
  ];

  const handleInterestChange = (interest: string) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleStrengthChange = (strength: string) => {
    setFormData(prev => {
      if (prev.strengths.includes(strength)) {
        return { ...prev, strengths: prev.strengths.filter(s => s !== strength) };
      } else {
        return { ...prev, strengths: [...prev.strengths, strength] };
      }
    });
  };

  const steps: AssessmentStep[] = [
    {
      title: "Basic Information",
      description: "Let's start with some basic information about you.",
      fields: (
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="Enter your age"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="education">Current/Highest Education Level</Label>
            <Input
              id="education"
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              placeholder="E.g., High School, Bachelor's Degree, etc."
            />
          </div>
        </div>
      ),
    },
    {
      title: "Skills & Interests",
      description: "Tell us about your skills and what interests you.",
      fields: (
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="skills">Key Skills</Label>
            <Textarea
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              placeholder="List your key skills, separated by commas"
              rows={4}
            />
          </div>
          <div className="grid gap-2">
            <Label>Areas of Interest (select all that apply)</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {interestOptions.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`interest-${interest}`}
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                    className="h-4 w-4 rounded border-gray-300 text-career-blue focus:ring-career-blue"
                  />
                  <label htmlFor={`interest-${interest}`} className="text-sm font-medium text-gray-700">
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Strengths & Aptitudes",
      description: "Help us understand your natural abilities and strengths.",
      fields: (
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label>Key Strengths (select all that apply)</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {strengthOptions.map((strength) => (
                <div key={strength} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`strength-${strength}`}
                    checked={formData.strengths.includes(strength)}
                    onChange={() => handleStrengthChange(strength)}
                    className="h-4 w-4 rounded border-gray-300 text-career-blue focus:ring-career-blue"
                  />
                  <label htmlFor={`strength-${strength}`} className="text-sm font-medium text-gray-700">
                    {strength}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Self-Assessment",
      description: "Rate yourself on the following dimensions",
      fields: (
        <div className="space-y-8">
          <div className="grid gap-4">
            <Label>Analytical vs. Intuitive Thinking</Label>
            <div className="flex flex-col space-y-2">
              <Slider
                value={[formData.analytical]}
                onValueChange={([value]) => setFormData({ ...formData, analytical: value })}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Intuitive</span>
                <span className="text-sm text-gray-500">Analytical</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Label>Creative vs. Practical Approach</Label>
            <div className="flex flex-col space-y-2">
              <Slider
                value={[formData.creative]}
                onValueChange={([value]) => setFormData({ ...formData, creative: value })}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Practical</span>
                <span className="text-sm text-gray-500">Creative</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Label>Working with People vs. Working with Information/Things</Label>
            <div className="flex flex-col space-y-2">
              <Slider
                value={[formData.social]}
                onValueChange={([value]) => setFormData({ ...formData, social: value })}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Information/Things</span>
                <span className="text-sm text-gray-500">People</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Label>Leadership vs. Supporting Role</Label>
            <div className="flex flex-col space-y-2">
              <Slider
                value={[formData.leadership]}
                onValueChange={([value]) => setFormData({ ...formData, leadership: value })}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Supporting</span>
                <span className="text-sm text-gray-500">Leadership</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <Label>Technology Orientation</Label>
            <div className="flex flex-col space-y-2">
              <Slider
                value={[formData.technology]}
                onValueChange={([value]) => setFormData({ ...formData, technology: value })}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Low</span>
                <span className="text-sm text-gray-500">High</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Goals & Challenges",
      description: "Share your future aspirations and any challenges you're facing in your career journey.",
      fields: (
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="challenges">Current Challenges</Label>
            <Textarea
              id="challenges"
              value={formData.challenges}
              onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
              placeholder="What challenges are you facing in deciding your career path?"
              rows={4}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="futureGoals">Future Goals</Label>
            <Textarea
              id="futureGoals"
              value={formData.futureGoals}
              onChange={(e) => setFormData({ ...formData, futureGoals: e.target.value })}
              placeholder="What are your future career goals and aspirations?"
              rows={4}
            />
          </div>
        </div>
      ),
    },
  ];

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();  // Prevent form submission reload
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const recommendations = await generateCareerRecommendations(formData);
      onComplete(recommendations);
      toast({
        title: "Assessment Complete!",
        description: "Your career recommendations are ready.",
      });
    } catch (error) {
      console.error("Error generating recommendations:", error);
      toast({
        title: "Error",
        description: "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="assessment-progress">
          <div className="assessment-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
      </div>

      <Card className="border border-gray-200">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
              <p className="text-gray-600 mt-1">{currentStepData.description}</p>
            </div>

            <form onSubmit={currentStep === steps.length - 1 ? handleSubmit : nextStep}>
              {currentStepData.fields}

              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0 || isSubmitting}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button type="submit" className="bg-career-blue hover:bg-blue-700">
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-career-gradient hover:opacity-90 flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                      </>
                    ) : (
                      <>
                        Complete <Check className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentForm;
