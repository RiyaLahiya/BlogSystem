import React, { useState, useEffect } from "react";
import { getCountries } from "../services/countryService";
import { getNewsByCountry } from "../services/blogService";
import "bootstrap/dist/css/bootstrap.min.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      console.log("Fetched Countries:", data); // Debugging
  
      if (Array.isArray(data)) {
        // Log the first country object to check its structure
        console.log("Sample Country Object:", data[0]);
  
        setCountries(data);
      } else {
        console.error("Invalid data format received:", data);
        setCountries([]);
      }
    };
    fetchCountries();
  }, []);
  

  const handleCountryClick = async (countryCode) => {
    setSelectedCountry(countryCode);
    const newsData = await getNewsByCountry(countryCode.toLowerCase());
    setNews(newsData);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Select a Country</h2>
      <div className="row">
        {countries.map((country) => (
          <div key={country.code} className="col-md-3 mb-3">
            <div
              className="card text-center"
              onClick={() => handleCountryClick(country.code)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={country.flag}
                className="card-img-top"
                alt={country.name}
                style={{ height: "100px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">Region: {country.region}</p>
                <p className="card-text">Population: {country.population.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCountry && (
        <div className="mt-5">
          <h3>News for {selectedCountry}</h3>
          <ul className="list-group">
            {news.length > 0 ? (
              news.map((article, index) => (
                <li key={index} className="list-group-item">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </li>
              ))
            ) : (
              <p>No news available for this country.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Countries;
