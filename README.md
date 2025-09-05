# 📝 Atomic Blog – Learning Context API  

## 📌 Overview  
This project is a small **React app** I built to learn and practice the **Context API**. The app is a simple blog where users can:  
- Add new posts  
- Search posts  
- Clear all posts  
- Toggle between light/dark mode  

The goal of the project was not the features themselves, but to understand **how to share state across components without prop drilling** using Context.  

---

## 🚀 What I Learned  
- How to **create a Context** with `createContext()`  
- How to **wrap components** with a Context `Provider`  
- How to **consume values** inside child components with `useContext()`  
- How to **build custom hooks** (`usePosts`) for cleaner context usage  
- Structuring a small app with separate components (Header, Search, Results, Posts, Archive, etc.)  

---

## 🛠️ Tech Stack  
- **React** (with Hooks)  
- **Vite** (for fast development)  
- **@faker-js/faker** (for generating random posts)  

---


## ▶️ Getting Started  

Follow these steps to run the project locally:  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/atomic-blog.git
   cd atomic-blog
   
2. **Install dependencies**  
   ```bash
   npm install

3. **Start the development server**  
   ```bash
   npm run dev

