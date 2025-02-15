# Chitrakatha

Chitrakatha is a single-page movie suggestion and trending movie recommendation app built using **React.js**, **TMDB API**, and **Appwrite** for the backend. The app fetches movie details and displays trending movies dynamically.

## 🚀 Features
- Fetches and displays trending movies from TMDB API.
- Suggests movies based on user preferences.
- Backend integration using Appwrite.
- Deployed on Vercel for seamless access.

## 🛠️ Technologies Used
- **React.js** (Frontend UI)
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **TMDB API** (Movie data source)
- **Appwrite** (Backend services)
- **Vercel** (Deployment)

## 📌 Installation
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

## 🌐 Deployment on Vercel
1. Push your code to GitHub.
2. Connect the repository to Vercel.
3. Add the **Environment Variables** in Vercel settings.
4. Deploy the project.

## 🐞 Troubleshooting
- **Black Screen after Deployment**:
  - Ensure all **Environment Variables** are correctly set on Vercel.
  - Check **Console Logs** for API fetch errors.
  - Verify API endpoints and keys.

 

 

