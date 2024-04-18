  fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
      .then(response => response.json())
      .then(data => {
          const forecasts = data.properties.periods;
          let htmlContent = '';
          let chartHtml = '<div style="display: flex; flex-direction: column; align-items: flex-start; height: 100%;">';

          forecasts.forEach((forecast, index) => {
              htmlContent += `<div><h3>${forecast.name}</h3><p>${forecast.detailedForecast}</p></div>`;
              const barHeight = forecast.temperature / 100 * 100; // Simplified scale for demonstration
              chartHtml += `<div style="width: ${barHeight}%; height: 20px; background-color: #6495ED; margin: 2px;">${forecast.temperature}°</div>`;
          });

          chartHtml += '</div>';
          document.getElementById('dataDisplay').innerHTML = htmlContent;
          document.getElementById('chartDisplay').innerHTML = chartHtml;
      })
      .catch(error => console.error('Error fetching data:', error));
      
