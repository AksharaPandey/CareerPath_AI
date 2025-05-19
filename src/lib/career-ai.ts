
// This file simulates an AI career recommendation system
// In a real system, this would call an external API or ML model

import { CareerRecommendation } from '@/components/CareerRecommendations';

// Mock function to generate career recommendations based on user assessment
export const generateCareerRecommendations = async (userFormData: any): Promise<{
  recommendations: CareerRecommendation[];
  userProfile: {
    strengths: string[];
    interests: string[];
    aptitudes: { name: string; score: number }[];
  };
}> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const mockRecommendations: CareerRecommendation[] = [
    {
      title: 'Data Scientist',
      description: 'Data scientists utilize their analytical, statistical, and programming skills to collect, analyze, and interpret large data sets. They then use this information to develop data-driven solutions to difficult business challenges.',
      match: 92,
      salary: '$100,000 - $150,000 per year',
      growth: '22% (Much faster than average)',
      education: 'Master\'s degree in Data Science, Statistics, Computer Science, or related field',
      keySkills: ['Python', 'Machine Learning', 'Statistical Analysis', 'Data Visualization', 'SQL', 'Problem Solving'],
      courses: [
        {
          title: 'Introduction to Data Science',
          provider: 'Coursera',
          url: 'https://www.coursera.org/specializations/data-science',
        },
        {
          title: 'Machine Learning Specialization',
          provider: 'Stanford Online',
          url: 'https://www.coursera.org/specializations/machine-learning',
        },
        {
          title: 'Data Science Professional Certificate',
          provider: 'edX',
          url: 'https://www.edx.org/professional-certificate/ibm-data-science',
        },
      ],
    },
    {
      title: 'UX/UI Designer',
      description: 'UX/UI Designers create meaningful and relevant experiences for users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.',
      match: 87,
      salary: '$85,000 - $125,000 per year',
      growth: '13% (Faster than average)',
      education: 'Bachelor\'s degree in Design, HCI, or related field',
      keySkills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Figma/Adobe XD', 'Empathy'],
      courses: [
        {
          title: 'UX Design Professional Certificate',
          provider: 'Google',
          url: 'https://www.coursera.org/professional-certificates/google-ux-design',
        },
        {
          title: 'UI/UX Design Bootcamp',
          provider: 'Udemy',
          url: 'https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd',
        },
        {
          title: 'Interaction Design Specialization',
          provider: 'Coursera',
          url: 'https://www.coursera.org/specializations/interaction-design',
        },
      ],
    },
    {
      title: 'Software Engineer',
      description: 'Software Engineers design, develop, and maintain software systems. They use programming languages and frameworks to create applications and solutions for various problems across industries.',
      match: 85,
      salary: '$90,000 - $140,000 per year',
      growth: '15% (Much faster than average)',
      education: 'Bachelor\'s degree in Computer Science or related field',
      keySkills: ['JavaScript', 'Python', 'Problem Solving', 'Algorithms', 'System Design', 'Teamwork'],
      courses: [
        {
          title: 'CS50: Introduction to Computer Science',
          provider: 'Harvard University',
          url: 'https://www.edx.org/cs50',
        },
        {
          title: 'Full Stack Web Development',
          provider: 'Meta',
          url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
        },
        {
          title: 'The Complete Web Developer Bootcamp',
          provider: 'Udemy',
          url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp',
        },
      ],
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'Digital Marketing Specialists develop and implement marketing strategies across digital channels to increase brand visibility, engage customers, and drive business growth.',
      match: 78,
      salary: '$60,000 - $95,000 per year',
      growth: '10% (Faster than average)',
      education: 'Bachelor\'s degree in Marketing, Communications, or related field',
      keySkills: ['SEO', 'Content Marketing', 'Social Media', 'Analytics', 'Email Marketing', 'Creativity'],
      courses: [
        {
          title: 'Digital Marketing Specialization',
          provider: 'Coursera',
          url: 'https://www.coursera.org/specializations/digital-marketing',
        },
        {
          title: 'Google Digital Marketing & E-commerce Certificate',
          provider: 'Google',
          url: 'https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce',
        },
        {
          title: 'Complete Digital Marketing Course',
          provider: 'Udemy',
          url: 'https://www.udemy.com/course/complete-digital-marketing-course',
        },
      ],
    },
    {
      title: 'Healthcare Administrator',
      description: 'Healthcare Administrators plan, direct, and coordinate medical and health services. They manage facilities, clinical departments, or medical practices to ensure efficiency and quality care delivery.',
      match: 72,
      salary: '$70,000 - $120,000 per year',
      growth: '28% (Much faster than average)',
      education: 'Bachelor\'s or Master\'s degree in Healthcare Administration, Public Health, or related field',
      keySkills: ['Leadership', 'Healthcare Operations', 'Regulatory Compliance', 'Financial Management', 'Communication', 'Problem Solving'],
      courses: [
        {
          title: 'Healthcare Administration Specialization',
          provider: 'Coursera',
          url: 'https://www.coursera.org/specializations/healthcare-administration',
        },
        {
          title: 'MicroMasters in Healthcare Administration',
          provider: 'edX',
          url: 'https://www.edx.org/micromasters/healthcare-administration',
        },
        {
          title: 'Healthcare Management Certificate',
          provider: 'Harvard Extension School',
          url: 'https://extension.harvard.edu/academics/programs/healthcare-management-graduate-certificate',
        },
      ],
    },
  ];

  // Create user profile from form data
  const userProfile = {
    strengths: userFormData.strengths.length > 0 ? userFormData.strengths : ['Analytical Thinking', 'Problem Solving', 'Communication'],
    interests: userFormData.interests.length > 0 ? userFormData.interests : ['Technology & Computing', 'Business & Finance'],
    aptitudes: [
      { name: 'Analytical', score: userFormData.analytical || 75 },
      { name: 'Creative', score: userFormData.creative || 60 },
      { name: 'Social', score: userFormData.social || 65 },
      { name: 'Practical', score: userFormData.practical || 70 },
      { name: 'Leadership', score: userFormData.leadership || 55 },
      { name: 'Technical', score: userFormData.technology || 80 },
    ],
  };

  // Sort recommendations by match score
  const sortedRecommendations = [...mockRecommendations].sort((a, b) => b.match - a.match);

  return {
    recommendations: sortedRecommendations,
    userProfile,
  };
};

// Sample career categories for career exploration
export const careerCategories = [
  {
    id: 'technology',
    name: 'Technology',
    icon: 'Computer',
    description: 'Careers in software development, IT, cybersecurity, and more',
    careers: [
      'Software Developer',
      'Data Scientist', 
      'Cybersecurity Specialist',
      'Cloud Architect',
      'DevOps Engineer',
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: 'Heart',
    description: 'Careers in medicine, nursing, therapy, and healthcare administration',
    careers: [
      'Physician', 
      'Registered Nurse', 
      'Physical Therapist', 
      'Healthcare Administrator',
      'Medical Technologist'
    ]
  },
  {
    id: 'business',
    name: 'Business & Finance',
    icon: 'BarChart',
    description: 'Careers in management, finance, marketing, and entrepreneurship',
    careers: [
      'Financial Analyst', 
      'Marketing Manager', 
      'Business Consultant', 
      'Human Resources Specialist',
      'Project Manager'
    ]
  },
  {
    id: 'creative',
    name: 'Creative Arts',
    icon: 'Palette',
    description: 'Careers in design, writing, performing arts, and media',
    careers: [
      'UX/UI Designer', 
      'Content Creator', 
      'Graphic Designer', 
      'Video Producer',
      'Creative Director'
    ]
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'GraduationCap',
    description: 'Careers in teaching, counseling, administration, and training',
    careers: [
      'Teacher', 
      'School Counselor', 
      'Instructional Designer', 
      'Education Administrator',
      'Corporate Trainer'
    ]
  },
  {
    id: 'science',
    name: 'Sciences',
    icon: 'Flask',
    description: 'Careers in research, development, environment, and laboratory work',
    careers: [
      'Research Scientist', 
      'Environmental Specialist', 
      'Biochemist', 
      'Geologist',
      'Meteorologist'
    ]
  }
];
