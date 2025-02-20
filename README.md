# **Chitrakatha** 🎬  

Chitrakatha is a **single-page movie suggestion and trending movie recommendation app** built using **React.js**, **TMDB API**, and **Appwrite** for the backend. The app fetches movie details, displays trending movies dynamically, and provides personalized recommendations.  

## 🚀 **Features**  
- Fetches and displays **trending movies** from TMDB API.  
- Suggests movies based on **user preferences**.  
- Backend integration using **Appwrite**.  
- **Interactive genre-based filtering** for movies.  
- **Movie details page** for an in-depth look at any selected movie.  
- **Deployed on Vercel** for seamless access.  

## 🛠️ **Technologies Used**  
- **React.js** (Frontend UI)  
- **Vite** (Build Tool)  
- **Tailwind CSS** (Styling)  
- **TMDB API** (Movie data source)  
- **Appwrite** (Backend services)  
- **Vercel** (Deployment)  

## 📌 **Installation**  
1. Clone the repository:  
   ```sh
   git clone https://github.com/yourusername/chitrakatha.git
   cd chitrakatha
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Set up environment variables:  
   - Create a `.env` file in the root directory.  
   - Add the following (replace with your actual keys):  
     ```env
     VITE_TMDB_API_KEY=your_tmdb_api_key
     VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
     VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
     ```  
4. Start the development server:  
   ```sh
   npm run dev
   ```  

## 🌐 **Deployment on Vercel**  
1. Push your code to GitHub.  
2. Connect the repository to Vercel.  
3. Add the **Environment Variables** in Vercel settings.  
4. Deploy the project.  

## 🔮 **Future Additions**  
### **1️⃣ Personalized Movie Recommendations**  
- A **Recommendations Section** will be added that suggests movies based on **user preferences** and **previous search history**.  
- Users will receive **dynamic recommendations** based on their interactions with the app.  

### **2️⃣ Genre-Based Movie Filtering**  
- A **"Genre" button** will be added, allowing users to filter movies by genre.  
- Clicking the button will display a **dropdown menu with different genres**.  
- Once a user selects a genre, all movies of that category will be **filtered and displayed** on the page.  

### **3️⃣ Movie Details Page**  
- Clicking on a **specific movie** will navigate the user to a **dedicated movie details page**.  
- This page will display:
  - **Movie Synopsis**  
  - **Release Date**  
  - **Cast & Crew Information**  
  - **User Ratings & Reviews**  
  - **Similar Movies**  

## 🐞 **Troubleshooting**  
- **Black Screen after Deployment**:  
  - Ensure all **Environment Variables** are correctly set on Vercel.  
  - Check **Console Logs** for API fetch errors.  
  - Verify API endpoints and keys.  

## 🤝 **Contributions**  
Contributions are **welcome**! If you'd like to add new features, improve the UI, or fix bugs:  
1. **Fork** the repository.  
2. Create a **new branch**:  
   ```sh
   git checkout -b feature-new-update
   ```  
3. **Commit changes** and push the branch:  
   ```sh
   git commit -m "Added new feature"
   git push origin feature-new-update
   ```  
4. **Submit a Pull Request** and let's improve Chitrakatha together! 🚀  

---
## 🎥 Demo Video
![Watch the Demo](src/assets/chitrakatha-demo.mp4)

 
