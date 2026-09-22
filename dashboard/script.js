/*
    RutuVedh
    Smart Local Environment & Micro-Weather System

    DEMO MODE
    Replace demo values with ESP32 SSE data later.
*/

const demoData = {
    temperature: 27.4,
    humidity: 62,
    pressure: 1008,
    altitude: 560,

    externalTemperature: 28,
    externalHumidity: 64,

    condition: "Clear",
    sunrise: "06:12",
    sunset: "18:28"
};


function updateDashboard(data) {

    document.getElementById("mainTemperature").textContent =
        data.temperature.toFixed(1);

    document.getElementById("temperature").textContent =
        data.temperature.toFixed(1);

    document.getElementById("humidity").textContent =
        data.humidity;

    document.getElementById("pressure").textContent =
        data.pressure;

    document.getElementById("altitude").textContent =
        data.altitude;

    document.getElementById("externalTemperature").textContent =
        `${data.externalTemperature} °C`;

    document.getElementById("externalHumidity").textContent =
        `${data.externalHumidity} %`;

    document.getElementById("weatherCondition").textContent =
        data.condition;

    document.getElementById("sunrise").textContent =
        data.sunrise;

    document.getElementById("sunset").textContent =
        data.sunset;

    document.getElementById("chartCurrent").textContent =
        data.temperature.toFixed(1);

    document.getElementById("lastUpdated").textContent =
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
}


/* Initial dashboard */

updateDashboard(demoData);


/*
    FUTURE ESP32 CONNECTION

    The reference architecture uses Server-Sent Events.

    When your ESP32 firmware is ready, this can be enabled:

    const events = new EventSource("/events");

    events.addEventListener("BME_readings", function(event) {

        const data = JSON.parse(event.data);

        updateDashboard({
            temperature: data.temperature,
            humidity: data.humidity,
            pressure: data.pressure,
            altitude: data.altitude,

            externalTemperature: demoData.externalTemperature,
            externalHumidity: demoData.externalHumidity,

            condition: demoData.condition,
            sunrise: demoData.sunrise,
            sunset: demoData.sunset
        });

        document.getElementById("connectionStatus").textContent =
            "Live";

        document.getElementById("deviceStatus").textContent =
            "Connected";
    });
*/


/* Demo status */

setTimeout(() => {

    document.getElementById("connectionStatus").textContent =
        "Demo Mode";

    document.getElementById("deviceStatus").textContent =
        "Ready";

}, 500);
