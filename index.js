const cityInput = document.getElementById("input");
const displaySection = document.getElementById("display");

// get new key!
const API_KEY = "2af760a283084986b7f54415241111";

const handleClick = () => {
  const currentCity = cityInput.value || "London"; // Default to London if input is empty

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => {
      displaySection.innerHTML = `
        <p>${data.location.name}'s temperature is ${data.current.temp_c}℃.</p>
        <p>It's ${data.current.condition.text}.</p>
        <img src="${data.current.condition.icon}" alt="Weather icon" />
      `;
    })
    .catch((err) => {
      console.error(err);
      displaySection.innerText = "Please enter a valid city.";
    });
};

document.getElementById("button").addEventListener("click", handleClick); // Attach event listener to the button
