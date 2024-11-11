const cityInput = document.getElementById("input");
const displaySection = document.getElementById("display");

// get new key!
const API_KEY = "2af760a283084986b7f54415241111";

const handleClick = () => {
  let currentCity = cityInput.value;

  const getWeather = fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${
      currentCity || "London"
    }&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => {
      displaySection.innerHTML = ` <p>${data.location.name}'s tempurature is ${data.current.temp_c}℃.</p>
        <p>It's ${data.current.condition.text}.</p>
        <img src="${data.current.condition.icon}" alt="icon"/>
      `;
    })
    .catch((err) => {
      console.log(err);
      displaySection.innerText = `Please enter a vaild city.`;
    });
};

handleClick();
