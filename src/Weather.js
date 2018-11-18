getWeather = async () => {
    const api_key = '083d0cdb1c7e13150cf1151ea50242bb';
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${api_key}`);
    const response = await api_call.json();
    console.log(response);
}