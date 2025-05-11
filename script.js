function getTimePrayer(city, country) {
    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`)
        .then((response) => {
            const timings = response.data.data.timings;
            document.getElementById("pr1").innerHTML = timings.Fajr;
            document.getElementById("pr2").innerHTML = timings.Dhuhr;
            document.getElementById("pr3").innerHTML = timings.Asr;
            document.getElementById("pr4").innerHTML = timings.Maghrib;
            document.getElementById("pr5").innerHTML = timings.Isha;
            document.getElementById("date").innerHTML = response.data.data.date.readable;
        })
        .catch(error => {
            console.error("Error fetching prayer times:", error);
        });
}

function getPrayerTimes() {
    const country = document.getElementById("country").value;
    let city = "";

    if (country === "Palestine") {
        city = "Gaza";
    } else if (country === "Egypt") {
        city = "Cairo";
    } else if (country === "Jordan") {
        city = "Amman";
    } else if (country === "Saudi Arabia") {
        city = "Riyadh";
    } else if (country === "Turkey") {
        city = "Ankara";
    }

    getTimePrayer(city, country);
}
document.getElementById("country").addEventListener("change", getPrayerTimes);

getPrayerTimes();
