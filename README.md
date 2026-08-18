# 🤖 AI Interview Agent

An AI-powered interview preparation platform that simulates real interview experiences using **Artificial Intelligence**.

Deployed platform link:-https://ai-interview-agent-9x94.onrender.com 

The AI Interview Agent can analyze a candidate's resume, generate personalized interview questions, conduct an interview, and provide feedback on the candidate's answers.

---

## 🚀 Features

* 📄 **Resume Upload**

  * Upload your resume in PDF format.
  * Extract important information from the resume automatically.

* 🤖 **AI-Generated Interview Questions**

  * Generates interview questions based on the candidate's resume and skills.
  * Supports technical and behavioral questions.

* 🎤 **AI Interview Simulation**

  * Simulates a real interview experience.
  * Asks questions one by one.
  * Evaluates candidate responses.

* 📊 **Interview Evaluation**

  * Analyzes answers using AI.
  * Provides feedback on:

    * Technical knowledge
    * Communication
    * Problem-solving
    * Confidence
    * Answer quality

* 📝 **Personalized Feedback**

  * Identifies strengths and weaknesses.
  * Provides suggestions for improvement.

* 🔐 **Authentication**

  * User authentication and protected routes.

* 📱 **Responsive UI**

  * Works on desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer

### AI

* OpenRouter API
* Large Language Models (LLMs)

### Other Tools

* Git
* GitHub
* VS Code
* Vite

---

## 🏗️ Project Architecture

```text
AI-Interview-Agent/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-interview-agent.git
```

```bash
cd ai-interview-agent
```

---

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=2000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key
```

### Example

```env
PORT=2000
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/ai-interview
JWT_SECRET=your_secret_key
OPENROUTER_API_KEY=your_api_key
```

> ⚠️ Never upload your `.env` file or API keys to GitHub.

Make sure `.env` is included in `.gitignore`.

---

## ▶️ Run the Project

### Start Backend

```bash
cd backend
npm run dev
```

Backend will run on:

```text
http://localhost:2000
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## 🔄 How It Works

```text
             ┌─────────────────┐
             │      User       │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Upload Resume   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Extract Resume  │
             │      Data       │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │   AI Interview  │
             │    Generator    │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Interview       │
             │ Questions       │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ User Answers    │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ AI Evaluation   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Feedback &      │
             │ Score           │
             └─────────────────┘
```

---

## 🧠 AI Interview Flow

1. User creates an account.
2. User uploads their resume.
3. The system extracts text from the resume.
4. Resume information is sent to the AI model.
5. AI generates personalized interview questions.
6. User answers the questions.
7. AI analyzes the answers.
8. The system generates:

   * Interview score
   * Strengths
   * Weaknesses
   * Suggestions
   * Overall feedback

---

## 📸 Screenshots

Add screenshots of your application here.

```text
screenshots/
├── login.png
├── dashboard.png
├── resume-upload.png
├── interview.png
└── result.png
```

Example:

![Login Page](screenshots/login.png)

![Interview Page](screenshots/interview.png)

![Interview Result](screenshots/result.png)

---

## 🔮 Future Improvements

* 🎙️ Voice-based interviews
* 🗣️ Speech-to-text
* 👁️ AI-based body language analysis
* 📹 Video interview mode
* 💻 Live coding interviews
* 📈 Interview performance dashboard
* 🧑‍💼 Multiple interview types
* 🏢 Company-specific interviews
* 📚 Interview question history
* 🧠 Personalized learning recommendations
* 🌐 Deploy the application online
* 📱 Mobile application

---

## 🔐 Security

The application uses:

* JWT authentication
* HTTP-only cookies
* Protected API routes
* Environment variables for secrets
* Input validation
* File upload restrictions

---

## 📌 Current Status

🚧 **Project Status: In Development**

The project is actively being developed and new AI interview features will be added over time.

---

## 🤝 Contributing

Contributions are welcome!

### Fork the repository

```bash
git fork
```

### Create a new branch

```bash
git checkout -b feature/new-feature
```

### Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

### Push the branch

```bash
git push origin feature/new-feature
```

Then create a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Rajendra Bhuyan**

B.Tech Computer Science & Engineering Student

Interested in:

* Artificial Intelligence
* Machine Learning
* Full-Stack Development
* Data Structures & Algorithms
* AI-powered applications

---

⭐ If you find this project useful, consider giving it a **star** on GitHub.

**Made with ❤️ and AI**
