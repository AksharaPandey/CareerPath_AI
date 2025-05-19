import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Briefcase,
  Computer,
  Heart,
  BarChart2,
  Palette,
  GraduationCap,
  FlaskConical,
  ChevronRight 
} from 'lucide-react';
import { careerCategories } from '@/lib/career-ai';
import { useToast } from '@/components/ui/use-toast';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('technology');
  const { toast } = useToast();
  
  // Get current category data
  const currentCategory = careerCategories.find(cat => cat.id === activeCategory) || careerCategories[0];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search Results",
      description: `Showing results for "${searchQuery}"`,
    });
  };
  
  // Map category ids to icon components
  const getCategoryIcon = (iconName: string) => {
    switch(iconName) {
      case 'Computer': return <Computer className="h-6 w-6" />;
      case 'Heart': return <Heart className="h-6 w-6" />;
      case 'BarChart': return <BarChart2 className="h-6 w-6" />;
      case 'Palette': return <Palette className="h-6 w-6" />;
      case 'GraduationCap': return <GraduationCap className="h-6 w-6" />;
      case 'Flask': return <FlaskConical className="h-6 w-6" />;
      default: return <Briefcase className="h-6 w-6" />;
    }
  };
  
  const trendingCareers = [
    { title: 'Data Scientist', growth: '+22%' },
    { title: 'Blockchain Developer', growth: '+30%' },
    { title: 'Healthcare Administrator', growth: '+28%' },
    { title: 'Digital Marketing Specialist', growth: '+10%' },
    { title: 'Remote Learning Coordinator', growth: '+12%' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Explore Career Paths
            </h1>
            <p className="mt-2 text-xl text-gray-600">
              Browse through different career fields and discover opportunities
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for careers, skills, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6"
                />
              </div>
              <Button type="submit" className="bg-career-gradient hover:opacity-90">
                Search
              </Button>
            </form>
          </div>
          
          {/* Career Categories */}
          <div className="mb-8">
            <Tabs defaultValue="browse" className="w-full">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="browse">Browse Categories</TabsTrigger>
                <TabsTrigger value="trending">Trending Careers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="browse">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                  {careerCategories.map((category) => (
                    <Card 
                      key={category.id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        activeCategory === category.id 
                          ? 'border-career-blue ring-2 ring-career-blue/20' 
                          : ''
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${
                          activeCategory === category.id 
                            ? 'bg-career-blue text-white' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {getCategoryIcon(category.icon)}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{category.name}</h3>
                          <p className="text-sm text-gray-500">{category.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Selected Category Details */}
                <div className="bg-white rounded-lg border p-6 mt-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-career-blue/10 text-career-blue mr-3">
                      {getCategoryIcon(currentCategory.icon)}
                    </div>
                    <h2 className="text-2xl font-bold">{currentCategory.name}</h2>
                  </div>
                  <p className="mb-6">{currentCategory.description}</p>
                  
                  <h3 className="text-lg font-medium mb-4">Popular Careers in {currentCategory.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentCategory.careers.map((career, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <Briefcase className="h-5 w-5 text-career-blue mr-3" />
                          <span>{career}</span>
                        </div>
                        <Link to="#">
                          <Button variant="ghost" size="sm" className="text-career-blue">
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link to="/assessment">
                      <Button className="bg-career-gradient hover:opacity-90">
                        Find Your Best Fit Career
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="trending">
                <div className="bg-white rounded-lg border p-6 mt-6">
                  <h2 className="text-2xl font-bold mb-6">Fastest Growing Careers</h2>
                  
                  <div className="space-y-4">
                    {trendingCareers.map((career, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-career-blue/10 text-career-blue mr-4">
                            {index + 1}
                          </div>
                          <span className="font-medium">{career.title}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-green-600 font-medium">{career.growth}</span>
                          <Link to="#">
                            <Button variant="ghost" size="sm" className="text-career-blue">
                              Explore <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Why Are These Careers Growing?</h3>
                    <p className="text-gray-700">
                      These careers are experiencing rapid growth due to technological advancements, changing demographics, and shifts in the global economy. Taking our assessment can help you identify if any of these growing fields align with your skills and interests.
                    </p>
                    <div className="mt-4">
                      <Link to="/assessment">
                        <Button className="bg-career-gradient hover:opacity-90">
                          Take Career Assessment
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
