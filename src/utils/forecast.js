import request from "postman-request";

export const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=923cffb451a06cb1032a15562250ef92&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to the weather service.", undefined);
    } else if (body.error) {
      callback("Unbale to find location.", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%.`
      );
    }
  });
};
