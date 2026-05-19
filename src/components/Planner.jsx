import { useEffect } from "react";

export const Planner = ({
  city,
  setCity,
  country,
  setCountry,
  day,
  setDay,
  onGenerate,
  active = true,
}) => {
  // City → Country mapping
  const cityCountryMap = {
    Prague: "Czech Republic",

    Jaipur: "India",
    Goa: "India",
    Varanasi: "India",
    Udaipur: "India",
    Manali: "India",

    Paris: "France",
    Nice: "France",
    Lyon: "France",
    Marseille: "France",

    Rome: "Italy",
    Venice: "Italy",
    Florence: "Italy",
    Milan: "Italy",

    Barcelona: "Spain",
    Madrid: "Spain",
    Seville: "Spain",
    Valencia: "Spain",

    Zurich: "Switzerland",
    Geneva: "Switzerland",
    Lucerne: "Switzerland",
    Interlaken: "Switzerland",

    Tokyo: "Japan",
    Kyoto: "Japan",
    Osaka: "Japan",
    Hiroshima: "Japan",

    Bangkok: "Thailand",
    Phuket: "Thailand",
    "Chiang Mai": "Thailand",
    Pattaya: "Thailand",

    Bali: "Indonesia",
    Jakarta: "Indonesia",
    Yogyakarta: "Indonesia",

    "New York": "United States",
    "Los Angeles": "United States",
    "Las Vegas": "United States",
    "San Francisco": "United States",

    London: "United Kingdom",
    Edinburgh: "United Kingdom",
    Manchester: "United Kingdom",

    Istanbul: "Turkey",
    Cappadocia: "Turkey",
    Antalya: "Turkey",

    Athens: "Greece",
    Santorini: "Greece",
    Mykonos: "Greece",

    Sydney: "Australia",
    Melbourne: "Australia",
    Brisbane: "Australia",

    Dubai: "United Arab Emirates",
    "Abu Dhabi": "United Arab Emirates",

    Singapore: "Singapore",

    "Kuala Lumpur": "Malaysia",
    Penang: "Malaysia",
    Langkawi: "Malaysia",

    Toronto: "Canada",
    Vancouver: "Canada",
    Montreal: "Canada",

    Berlin: "Germany",
    Munich: "Germany",
    Hamburg: "Germany",

    Amsterdam: "Netherlands",
    Rotterdam: "Netherlands",

    Seoul: "South Korea",
    Busan: "South Korea",

    Auckland: "New Zealand",
    Queenstown: "New Zealand",
    Wellington: "New Zealand",
  };

  // Auto select country when city changes
  useEffect(() => {
    if (city && cityCountryMap[city]) {
      setCountry(cityCountryMap[city]);
    }
  }, [city]);

  const cities = Object.keys(cityCountryMap);

  const countries = [
    "Czech Republic",
    "India",
    "France",
    "Italy",
    "Spain",
    "Switzerland",
    "Japan",
    "Thailand",
    "Indonesia",
    "United States",
    "United Kingdom",
    "Turkey",
    "Greece",
    "Australia",
    "United Arab Emirates",
    "Singapore",
    "Malaysia",
    "Canada",
    "Germany",
    "Netherlands",
    "South Korea",
    "New Zealand",
  ];

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="planner-card">
      <div className="planner-top">
        <p className="planner-label">Plan smarter</p>
        <h3>Where are you headed next?</h3>
      </div>

      <div className="planner-options">
        <div className="options">
          <label>City</label>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="select"
          >
            <option value="">Select a city</option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="options">
          <label>Country</label>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="select"
          >
            <option value="">Select a country</option>

            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="options">
          <label>Duration</label>

          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="select"
          >
            <option value="">Select number of days</option>

            {days.map((day) => (
              <option key={day} value={day}>
                {day} Days
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={onGenerate} type="submit" className="generate-btn">
        {active ? "Crafting your itinerary..." : "Build My Itinerary"}
      </button>
    </div>
  );
};
