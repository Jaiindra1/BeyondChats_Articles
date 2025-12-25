
# BeyondChats Articles Preview Platform

A high-fidelity article preview platform showcasing original content alongside AI-refined versions. This project demonstrates modern frontend architecture, responsive design, and optional AI-driven content analysis.

## 🚀 How to Run

Since this project uses modern ES6 modules via `importmap` and `esm.sh`, no complex build step (like npm install) is required for local development if you have a simple static file server.

### Option 1: Live Server (Recommended)
1. Open the project folder in **VS Code**.
2. Right-click `index.html` and select **Open with Live Server**.
3. The app will be available at `http://127.0.0.1:5500`.

### Option 2: Python Static Server
1. Open your terminal in the project root.
2. Run: `python -m http.server 8000`
3. Open `http://localhost:8000` in your browser.

---

## 🛠 Tech Stack
- **Framework:** React 18+ (via ESM)
- **Styling:** Tailwind CSS (Utility-first, responsive, dark mode supported)
- **Icons/Fonts:** Google Material Symbols & Google Fonts (Newsreader, Inter)
- **AI Integration:** Google Gemini API (`@google/genai`)

---

## 📋 Project Scope & Requirements

### Core Requirements (Implemented)
- **Article Listing:** A clean, grid-based view of articles with status badges (Original vs. Updated).
- **Detail View:** A focused reading experience with typography optimized for long-form content.
- **Responsive Design:** Fully functional on mobile, tablet, and desktop.
- **Source Toggle:** Configurable `DATA_SOURCE` in `constants.ts` to switch between mock data and future API integration.

### 💡 Optional AI Enhancements (Bonus)
> **Note:** The AI summary and chat assistant are **optional enhancements** added to demonstrate LLM UI integration and are not part of the core assignment requirements.

- **AI Summarization:** A one-click summary generation using Gemini 3 Flash.
- **Contextual Chat Assistant:** A floating assistant that allows users to ask questions specifically about the current article's content.

---

## 🔑 Configuration

To enable the AI features (Summarization & Chat), ensure a valid Google Gemini API Key is available in the environment as `process.env.API_KEY`. 

**Placeholder Elements:**
- **Sign Out:** The authentication button is a UI placeholder.
- **Backend Integration:** Currently uses `MOCK_ARTICLES`. A `TODO` is placed in `constants.ts` for future Laravel REST API integration.

---

## 📁 Project Structure
- `index.html`: Entry point with Tailwind & Import Maps.
- `App.tsx`: Main routing and state management.
- `components/`: UI components (Header, ArticleCard, ArticleDetail, ChatAssistant).
- `services/`: Gemini API interaction logic.
- `types.ts` & `constants.ts`: Data structures and mock content.
