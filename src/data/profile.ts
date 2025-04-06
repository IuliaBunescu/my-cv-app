export const profile = {
    personal: {
      name: "Iulia Bunescu",
      dateOfBirth: "21/06/1998",
      nationality: "Romanian",
      sex: "Female",
      phone: "(+40) 765765695",
      email: "iulia.bunescu1@gmail.com",
      linkedIn: "https://www.linkedin.com/in/iulia-bunescu/",
      address: "Cluj-Napoca, Romania",
      bio: `As a data scientist, I am genuinely fascinated by the process of uncovering meaningful insights from data.
      I strive to continuously learn and grow in this field, recognizing that there is always more to discover.`,
    },

    hobbies: [
        "Cooking",
        "Playing video games",
        "Long walks",
        "Travelling",
        "Taking photos",
      ],
  
    languages: [
      { language: "Romanian", level: "Native" },
      { language: "English", level: "C2 - Proficient" },
      { language: "Japanese", level: "A2 - Basic" },
      { language: "German", level: "A2 - Basic" },
    ],
  
    experience: [
      {
        title: "Data Scientist",
        company: "Grid Dynamics / Yieldmo",
        location: "Bucharest, Romania",
        period: "Dec 2023 – Present",
        details: [
          "Managed large datasets using Snowflake and MySQL, automated processes with Apache Airflow.",
          "Developed dashboards in Streamlit and Jupyter; performed clustering/classification using ML.",
        ],
      },
      {
        title: "Data Scientist (Internal R&D)",
        company: "Grid Dynamics",
        location: "Remote",
        period: "2023",
        details: [
          "Built document-based Q&A using GPT-3.5, LLaMA2, Phi2 with LangChain and RAG.",
          "Used prompt engineering, fine-tuning, and evaluation via chain-of-thought inference.",
        ],
      },
      {
        title: "Data Scientist Intern",
        company: "Grid Dynamics",
        location: "Bucharest, Romania",
        period: "Jun 2023 – Dec 2023",
        details: [
          "Learned data preprocessing, ML model development, metrics, and deployment.",
          "Final project: fine-tuned LLaMA2 7B using PEFT and qLoRA.",
        ],
      },
      {
        title: "Full Stack Engineer - Apprenticeship",
        company: "Goldman Sachs Japan",
        location: "Tokyo, Japan",
        period: "Jan 2022 – Aug 2022",
        details: [
          "Contributed to internal apps for APAC bond traders; enhanced functionality and UX.",
        ],
      },
      {
        title: "Researcher",
        company: "Linnify",
        location: "Cluj-Napoca, Romania",
        period: "Jan 2020 – Nov 2020",
        details: [
          "Worked on market research, competitive analysis, and strategy for biotech entry.",
        ],
      },
      {
        title: "Junior Developer Intern",
        company: "Stratec SE",
        location: "Cluj-Napoca, Romania",
        period: "Jun 2019 – Sep 2019",
        details: [
          "Built control systems for a medical device in a multidisciplinary internship team.",
        ],
      },
    ],
  
    education: [
      {
        degree: "MA in Data Science for Industry and Society",
        school: "Babeș-Bolyai University",
        location: "Cluj-Napoca, Romania",
        period: "2024 – Present",
        subjects: [
          "Basics of Statistics", "Data Ethics", "Data Collection and Modeling",
          "Intelligent Modeling", "Computational Thinking"
        ],
      },
      {
        degree: "BSc in Systems Engineering",
        school: "Technical University of Cluj-Napoca",
        location: "Cluj-Napoca, Romania",
        period: "2017 – 2021",
        grade: "Final grade: 10",
        subjects: [
          "Mathematical Analysis", "Linear Algebra", "Numerical Calculus",
          "Algorithms Design", "Optimization", "System Identification"
        ],
      },
    ],
  
    skills: {
      programming: ["Python", "Pandas", "SQL"],
      dataStorage: ["Looker Extracts", "Snowflake"],
      mlLibraries: ["Scikit-learn", "TensorFlow", "PyTorch", "Transformers"],
      environments: ["Jupyter", "Streamlit"],
      cloud: ["Azure AI (Certified)", "AWS SageMaker", "AWS Workspaces"],
      versionControl: ["Git"],
      orchestration: ["Apache Airflow", "Docker"],
    },
  
    projects: [
      {
        title: "Data Science Small Projects",
        description:
          "Collection of small projects using Jupyter notebooks and ML libraries for data analysis, classification, and visualizations.",
        link: "https://github.com/IuliaBunescu/machine-learning-small-projects",
        period: "Apr 2023 – Jun 2023",
      },
      {
        title: "Movie Recommendation Tool For Data Scientists",
        description: `
          Personalized Recommendations: Get movie suggestions based on your unique interests.
          User-Friendly Interface: Enjoy a seamless and intuitive browsing experience.
          Real-Time Search: Instantly find movies with an efficient search feature.
          Insightful Visualizations: Gain a deeper understanding of the training data and clustering process through engaging visual representations.
        `,
        link: "https://github.com/IuliaBunescu/movie_tool",
        liveDemo: "https://juliab-movie-recommendation-tool.streamlit.app/",
        period: "2025 – Present",
      },
    ],
  
    awards: [
      {
        title: "Vulcanus in Japan Scholarship – EU-Japan Centre",
        description:
          "Selected for a prestigious industrial exchange program; trained at Goldman Sachs Japan. Gained professional and cultural experience in Japan.",
        link: "https://www.eu-japan.eu/events/vulcanus-japan",
        year: 2021,
      },
    ],
  
    publications: [
      {
        title:
          "A Novel Toolbox for Automatic Design of Fractional Order PI Controllers",
        description:
          "Paper based on my Bachelor's thesis. Focuses on SOPDT modeling and FO controller design for automatic tuning.",
        year: 2023,
      },
    ],
  };
  