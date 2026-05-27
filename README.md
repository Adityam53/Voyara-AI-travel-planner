# Voyara – AI Travel Planner App

A full-stack AI-powered travel planner application where users can generate personalized travel itineraries based on city, country, and number of days. The app dynamically creates detailed travel plans using OpenRouter and AI models via the OpenAI SDK.
Developed using React JS, React Router, React Query, Node JS, Express and AI integration.

## Demo Link

[Live Demo](https://voyara-ai-travel-planner.vercel.app/)

## Quick Start

```
git clone https://github.com/Adityam53/Voyara-AI-travel-planner.git
cd frontend
npm install
npm run dev
```

## Technologies

* React JS
* React Router
* @tanstack/react-query
* Node JS
* Express
* OpenRouter
* OpenAI SDK
* Axios

## Demo Video

Watch a walkthrough of all major features of this app:[Loom Video](https://www.loom.com/share/36b6a867ce034af19a2c4bbad3e1215c)

## Features

**Home**

* Interface to select city, country and number of days.
* Generate travel plan on button click.

**Travel Plan**

* Displays complete itinerary including:

  * Best time to visit.
  * Top attractions.
  * Day-wise itinerary.
  * Budget estimates (low, mid, high).
  * Local travel tips.

**Smart Data Handling**

* API is triggered only on button click.
* No API calls on dropdown/input change.
* Controlled fetching using React Query.

**State Management**

* Separation of form state and query state.
* Prevents unnecessary re-renders and API calls.

**Caching**

* Uses React Query for global caching.
* Data persists across navigation.
* Prevents redundant API calls.

**User Experience**

* Old data remains visible during new fetch.
* No UI flicker.
* Button updates to “Generating…” during API call.
* Handles both initial loading and background fetching.

## API Reference

### **GET /api/travel-plan**<br>

Generate Travel Plan<br>
Query Params:<br>

```
city
country
days
```

Sample Request:<br>

```
/api/travel-plan?city=Tokyo&country=Japan&days=7
```

Sample Response:<br>

```
{
  destination,
  best_time,
  duration_days,
  top_attractions,
  sample_itinerary,
  estimated_budget_eur: {
    low,
    mid,
    high
  },
  local_tips
}
```

## Contact

For bugs or feature requests, please reach out to ([adityamoorjmalani53@gmail.com](mailto:adityamoorjmalani53@gmail.com))
