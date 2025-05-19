
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BookOpen, Award, Download, Share2, Briefcase } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell 
} from 'recharts';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

export interface CareerRecommendation {
  title: string;
  description: string;
  match: number;
  salary: string;
  growth: string;
  education: string;
  keySkills: string[];
  courses: {
    title: string;
    provider: string;
    url: string;
  }[];
}

interface CareerRecommendationsProps {
  recommendations: CareerRecommendation[];
  userProfile: {
    strengths: string[];
    interests: string[];
    aptitudes: {
      name: string;
      score: number;
    }[];
  };
}

const CareerRecommendations: React.FC<CareerRecommendationsProps> = ({ 
  recommendations, 
  userProfile 
}) => {
  const [selectedCareer, setSelectedCareer] = useState<CareerRecommendation | null>(
    recommendations.length > 0 ? recommendations[0] : null
  );
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleSaveReport = () => {
    toast({
      title: "Report Saved",
      description: "Your career recommendations have been saved to your account.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share Options",
      description: "Share functionality will be available in a future update.",
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Your Career Recommendations</h2>
        <p className="mt-2 text-xl text-gray-600">
          Based on your assessment, here are your personalized career suggestions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="shadow-sm border">
            <CardHeader className="bg-gradient-to-r from-career-blue to-career-purple py-3">
              <CardTitle className="text-white">Match Scores</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px] pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={recommendations.map((rec) => ({
                      name: rec.title,
                      score: rec.match,
                    }))}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis
                      dataKey="name"
                      type="category"
                      tick={{ fontSize: 12 }}
                      width={120}
                    />
                    <Tooltip
                      formatter={(value) => [`${value}% Match`, "Score"]}
                      labelFormatter={(label) => `Career: ${label}`}
                    />
                    <Bar dataKey="score" name="Match Score" radius={[0, 4, 4, 0]}>
                      {recommendations.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={selectedCareer?.title === entry.title ? "#3B82F6" : "#93C5FD"}
                          cursor="pointer"
                          onClick={() => setSelectedCareer(entry)}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="p-4 border-t text-sm text-gray-500">
                Click on a bar to see details about each career
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 shadow-sm border">
            <CardHeader className="bg-gradient-to-r from-career-blue to-career-purple py-3">
              <CardTitle className="text-white">Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Top Strengths</h4>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.strengths.map((strength) => (
                      <Badge key={strength} variant="outline" className="bg-blue-50">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Key Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.interests.map((interest) => (
                      <Badge key={interest} variant="outline" className="bg-purple-50">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Aptitude Profile</h4>
                  <div className="space-y-2">
                    {userProfile.aptitudes.map((aptitude) => (
                      <div key={aptitude.name} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{aptitude.name}</span>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-career-gradient rounded-full h-2"
                            style={{ width: `${aptitude.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          {selectedCareer ? (
            <Card className="shadow-sm border h-full">
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-career-blue" />
                      <CardTitle className="text-xl">{selectedCareer.title}</CardTitle>
                    </div>
                    <p className="text-career-purple mt-1 font-medium">
                      {selectedCareer.match}% Match with your profile
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hidden sm:flex items-center gap-1"
                      onClick={handleSaveReport}
                    >
                      <Download className="h-4 w-4" />
                      Save
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hidden sm:flex items-center gap-1"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="skills">Skills & Education</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="p-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Career Description</h3>
                      <p className="mt-1 text-gray-700">{selectedCareer.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Award className="h-5 w-5 text-career-blue" />
                        </div>
                        <div>
                          <h4 className="font-medium">Required Education</h4>
                          <p className="text-sm text-gray-600 mt-1">{selectedCareer.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <TrendingUp className="h-5 w-5 text-career-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium">Job Growth</h4>
                          <p className="text-sm text-gray-600 mt-1">{selectedCareer.growth}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg sm:col-span-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <TrendingUp className="h-5 w-5 text-career-blue" />
                        </div>
                        <div>
                          <h4 className="font-medium">Salary Range</h4>
                          <p className="text-sm text-gray-600 mt-1">{selectedCareer.salary}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="skills" className="p-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Key Skills Required</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedCareer.keySkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-blue-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="text-lg font-medium">Educational Pathway</h3>
                      <p className="mt-1 text-gray-700">
                        {selectedCareer.education}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="resources" className="p-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Recommended Courses</h3>
                      <div className="mt-3 space-y-3">
                        {selectedCareer.courses.map((course, idx) => (
                          <div key={idx} className="flex items-start space-x-3 border-b pb-3 last:border-b-0">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <BookOpen className="h-5 w-5 text-career-blue" />
                            </div>
                            <div>
                              <h4 className="font-medium">{course.title}</h4>
                              <p className="text-sm text-gray-600">Provider: {course.provider}</p>
                              <a 
                                href={course.url} 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="text-sm text-career-blue hover:underline mt-1 inline-block"
                              >
                                View Course
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent>
                <p className="text-gray-500">Select a career from the chart to see details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button 
          onClick={handleSaveReport}
          className="bg-career-gradient hover:opacity-90 transition-opacity mr-4"
        >
          <Download className="mr-2 h-4 w-4" /> Save Full Report
        </Button>
        
        <Button 
          variant="outline"
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" /> Share Results
        </Button>
      </div>
    </div>
  );
};

export default CareerRecommendations;
