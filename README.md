# Digital CV — Built with React, TypeScript & Vite

Welcome to my interactive digital CV! ✨

This project showcases my professional background, skills, and personal interests in a clean, responsive, and animated web format. It's built using **React**, **TypeScript**, and **Vite**, with modular components and smooth animations for an engaging user experience.

## 🧰 Tech Stack

### Frontend
- ⚛️ **React**: A JavaScript library for building user interfaces
- 🔷 **TypeScript**: A superset of JavaScript that adds static types
- ⚡ **Vite**: A next-generation, fast build tool and development server
- 🎨 **Custom CSS & Animations**: For styling and dynamic animations

### Backend
- 🖥️ **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python 3.7+.
- 💾 **SQLAlchemy**: A SQL toolkit for Python, used to interact with the database.
- 🗄️ **SQLite**: A lightweight database used for local development and testing.

## 📂 What You'll Find

- **About Me** — Personal background, contact info, and a quick bio
- **Education** — Academic history
- **Experience** — Professional roles and responsibilities
- **Skills** — Technical abilities presented as interactive pills
- **Languages** — Spoken languages with proficiency levels
- **Hobbies** — Personal interests outside of work

## 🚀 Getting Started

To run the project locally:

### Frontend

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```

This will start the frontend server and you can view the app at `http://localhost:3000`.

### Backend

1. **Install Dependencies**:

    If you're running the backend locally, make sure you have Python and `pip` installed. Then, install the backend dependencies:

    ```bash
    pip install -r requirements.txt
    ```

2. **Set Up the Database**:

    Before running the backend server, you need to create the database. You can do this by running the following Python script:

    ```bash
    python data_seed.py
    ```

    This will populate your database with the necessary tables and sample data.

3. **Start the Server**:

    To run the FastAPI backend locally, you can use the following command:

    ```bash
    uvicorn main:app --reload
    ```

    This will start the server at `http://localhost:8000`. The backend API will be available at this address.

4. **Testing the Endpoints**:

    You can test the API endpoints by navigating to the following paths:

    - `/about`: Returns information about the user (bio, contact, etc.)
    - `/experience`: Lists all professional experiences
    - `/skills`: Lists skills, grouped by category
    - `/languages`: Lists languages spoken with proficiency levels
    - `/hobbies`: Lists personal hobbies and interests

## 🔗 Live Demo

Check out the live version here: [my-cv-app](https://my-cv-app-iuliabunescus-projects.vercel.app/about)
