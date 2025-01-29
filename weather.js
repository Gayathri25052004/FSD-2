async function getWeather() {
    try {
        let rawdata = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=30.56&lon=15.99&appid=70e23ecfce5e7323326d5708774d5429", {
            timeout: 20000 // Set timeout to 20 seconds
        });

        let data = await rawdata.json();

        const { temp, temp_min, temp_max, humidity } = data.main;
        const { country } = data.sys;
        const { name } = data;

        let outputdiv = document.getElementById("output");

        outputdiv.innerHTML += `
            <table border="1">
                <thead>
                    <tr>
                        <th>Min Temp (K)</th>
                        <th>Max Temp (K)</th>
                        <th>Humidity (%)</th>
                        <th>Country</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${temp_min}</td>
                        <td>${temp_max}</td>
                        <td>${humidity}</td>
                        <td>${country}</td>
                        <td>${name}</td>
                    </tr>
                </tbody>
            </table>`;

        const chartData = {
            labels: ['Current Temp', 'Min Temp','Max Temp'],
            datasets: [{
                label: 'Temperature (K)',
                data: [temp, temp_min,temp_max],
                backgroundColor: ['rgb(75, 192, 192)',
                               'rgb(182, 45, 200)',
                               'rgb(69, 217, 53)'
                            ],
                borderColor: 'rgba(68, 191, 191, 0.2)',
                fill: true,
                tension: 0.1
            }]
        };

        createChart(chartData);

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function createChart(data) {
    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut', 
        data: data,  
        options: {
            responsive: false,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

getWeather(); 