# 💼 CareerPath AI

CareerPath AI is an AI-powered career guidance system designed to help students, especially those from underserved communities, make informed decisions about their futures. By analyzing individual skills, interests, aptitudes, and academic performance, the platform delivers personalized career recommendations and learning paths to align students’ strengths with high-potential career opportunities.

## 🚀 Features

✨ Chatbot Interface: Natural conversation with an AI chatbot powered by OpenAI GPT.
📊 Real-Time Assessment: Inputs like GPA, skills, interests, and learning reflections are analyzed dynamically.
🧠 LLM + RAG Integration: Combines large language models with domain-specific data using Retrieval-Augmented Generation.
🔎 Personalized Suggestions: Career paths tailored to each user's profile.
📚 Skill-Building Recommendations: Courses and learning resources mapped to user needs.
📈 Market Trends: Suggestions aligned with future job market trends.
🧰 Tech Stack

Frontend: TypeScript, React
Backend: Python
AI Integration: OpenAI GPT (via LangChain)
Architecture Pattern: RAG (Retrieval-Augmented Generation)
Databases: Custom Career DB, Course DB, Market Trends DB (can be static JSON or NoSQL)
📥 Input Parameters

## Users provide:

Name, Age, GPA
Interests and Skill areas
Degree orientation (technical/non-technical)
Reflections on past learning
Areas needing improvement
📤 Output

## 📌 Top 3 Career Paths (based on input + market alignment)
🧭 Suggested Skills to Learn
📘 Recommended Courses
📊 Future Scope Insights
🧮 Confidence Score for each suggestion
🖥️ How It Works

User Input: Collected through a TypeScript-based UI.
Chatbot Engine: Converses and gathers deeper context using OpenAI GPT.
Backend Processing: Python handles logic, input parsing, and recommendation pipelines.
RAG Model: Enriches GPT outputs using custom databases.
Output Generation: Tailored suggestions returned in real-time.


'''
# Clone the repository
git clone https://github.com/yourusername/careerpath-ai.git
cd careerpath-ai

# Install backend dependencies
cd backend
pip install -r requirements.txt

# Run backend
python main.py

# Open a new terminal and run frontend
cd ../frontend
npm install
npm start

