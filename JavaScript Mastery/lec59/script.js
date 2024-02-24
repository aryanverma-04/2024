let delhiWeatherAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Successfully sended the data from Delhi API");
    resolve("31° Celcuius");
  }, 5000);
});
let mumbaiWeatherAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Successfully sended the data from Mumbai API");
    resolve("36° Celcuius");
  }, 10000);
});
let pathankotWeatherAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Successfully sended the data from Pathankot API");
    resolve("27° Celcuius");
  }, 15000);
});

const dispayData = async () => {
  document.body.append("Welcome to weather control room API");
  document.body.append(document.createElement("br"));
  
  let a = await delhiWeatherAPI;
  let b = await mumbaiWeatherAPI;
  let c = await pathankotWeatherAPI;

  let weatherInfoA = document.createElement("p");
  weatherInfoA.textContent = `Delhi Weather: ${a}`;

  let weatherInfoB = document.createElement("p");
  weatherInfoB.textContent = `Mumbai Weather: ${b}`;

  let weatherInfoC = document.createElement("p");
  weatherInfoC.textContent = `Pathankot Weather: ${c}`;

  // Append weather information to the document body
  document.body.append(weatherInfoA, weatherInfoB, weatherInfoC);

  console.log(a, b, c);
};
dispayData();
