# Blog System with Country-Specific News

## 🚀 Project Overview
This is a **blog system** that fetches and displays news articles using an external API. Users can:
- View a list of blog posts (fetched from the News API).
- Click on a blog post to see details.
- View a list of countries (fetched from the Rest Countries API).
- Click on a country to fetch and display news specific to that country.

## 📌 Features
- **List Blogs:** Displays the latest technology news.
- **Blog Details:** Shows details of a selected blog.
- **Countries List:** Fetches and displays country names.
- **Country-Specific News:** Clicking on a country fetches its latest news.
- **Responsive UI:** Styled using Bootstrap.

---
## 🛠️ Tech Stack
- **Frontend:** React.js
- **Styling:** Bootstrap
- **API Services:** Axios
- **External APIs:**
  - [News API](https://newsapi.org/) – Fetches latest news articles.
  - [REST Countries API](https://restcountries.com/) – Fetches country data.

---
## 🔧 Setup Instructions
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/blog-system.git
cd blog-system
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure API Keys
- Open `src/services/blogService.js`.
- Replace `YOUR_NEWS_API_KEY` with your actual News API key.

```javascript
const API_KEY = "YOUR_NEWS_API_KEY";
```

### 4️⃣ Run the Project
```bash
npm run dev
```

---
## 📂 Project Structure
```
/blog-system
│── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── BlogCard.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── Countries.jsx
│   ├── services
│   │   ├── blogService.js
│   │   ├── CountryService.js
│   ├── App.jsx
│   ├── main.jsx
│── public
│── package.json
│── README.md
```

---
## 📌 API Integration
### 1️⃣ Fetching Blogs (`blogService.js`)
```javascript
export const getBlogs = async () => {
  try {
    const response = await axios.get(`${NEWS_API_URL}?country=us&category=technology&apiKey=${API_KEY}`);
    return response.data.articles.slice(0, 10);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
```

### 2️⃣ Fetching Countries (`CountryService.js`)
```javascript
export const getCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data.slice(0, 10);
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};
```

### 3️⃣ Fetching News by Country (`blogService.js`)
```javascript
export const getNewsByCountry = async (countryCode) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}?country=${countryCode}&apiKey=${API_KEY}`);
    return response.data.articles.slice(0, 10);
  } catch (error) {
    console.error(`Error fetching news for ${countryCode}:`, error);
    return [];
  }
};
```

---
## ✅ Usage Instructions
1. **Visit the Homepage** to view the latest blogs.
2. **Click on a Blog** to view details.
3. **Navigate to the Countries tab** to see a list of countries.
4. **Click on a Country** to fetch and display news for that country.

---
## 🛠️ Troubleshooting
**Issue:** Countries list is empty.
- Ensure the API request is not blocked.
- Check for errors in the console.

**Issue:** Clicking a country doesn't show news.
- Ensure the country code (`cca2`) is passed correctly.
- Verify if the News API supports the selected country.

---
## 🤝 Contributing
Feel free to submit pull requests or open issues for improvements!

---
## 📜 License
This project is licensed under the MIT License.

