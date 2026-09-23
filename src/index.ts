console.log("hello world");

interface ForecastPeriod {
  name?: string;
  temperature?: number;
  temperatureUnit?: string;
  windSpeed?: string;
  windDirection?: string;
  detailedForecast?: string;
}

var forecast: ForecastPeriod = {
  name: "Today",
  temperature: 70,
  temperatureUnit: "F",
  windSpeed: "5 mph",
  windDirection: "NW",
  detailedForecast: "Sunny with a chance of rain.",
};
console.log(forecast);
