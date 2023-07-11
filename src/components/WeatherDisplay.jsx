import Call from '../functions/Call';

const WeatherDisplay = ({ search, measure }) => {
    if (measure == 'imperial') {
        var symbol = '°F';
    } else {
        symbol = '°C';
    }
    const API_key = 'c9bfdbc4d3561d06143cfa790cced76a';
    const target = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=${measure}`;

    const data = Call(target);
    console.log(data);

    if (data.main) {
        return (
            <>
                <ul>
                    <li>Météo à {data.name}</li>
                    <li>
                        <img
                            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                            alt={data.weather[0].description}
                        />
                    </li>
                    <li>
                        Température : {data.main.temp}
                        {symbol}
                    </li>
                    <li>
                        Ressenti : {data.main.feels_like}
                        {symbol}
                    </li>
                    <li>
                        Temp. min. : {data.main.temp_min}
                        {symbol}
                    </li>
                    <li>
                        Temp. max. : {data.main.temp_max}
                        {symbol}
                    </li>
                    <li>Humidité : {data.main.temp}%</li>
                </ul>
            </>
        );
    } else {
        return (
            <>
                <p>{data}</p>
            </>
        );
    }
};

export default WeatherDisplay;
