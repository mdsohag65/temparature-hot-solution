/* const API_KEY = `f1ebdb83697f0c6eb34824b7ce4651ba`;
const searchTem = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = temperature => {
    console.log(temperature);
}
 */

// practice...
const API_KEY = `f1ebdb83697f0c6eb34824b7ce4651ba`;
const searchTem = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('tempo', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // console.log(temperature);

    // set weather icon..
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('w-icon');
    imgIcon.setAttribute('src', url);
}