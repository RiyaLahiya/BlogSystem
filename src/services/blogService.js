import axios from "axios";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "3f676f50293d420691033e073782b006"; 

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${NEWS_API_URL}?country=us&category=technology&apiKey=${API_KEY}`);
    return response.data.articles.slice(0, 10);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const getBlogById = async (id) => {
  const blogs = await getBlogs();
  return blogs.find((blog, index) => index === Number(id));
};

// Fetch news by country
export const getNewsByCountry = async (countryCode) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}?country=${countryCode}&apiKey=${API_KEY}`);
    return response.data.articles.slice(0, 10);
  } catch (error) {
    console.error(`Error fetching news for ${countryCode}:`, error);
    return [];
  }
};
