const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [{
    label: 'Consumo Essencial',
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    data: [1000, 1100, 1200, 1050, 1150, 1320] // Valores de consumo essencial mensais
  },
  {
    label: 'Consumo Supérfluo',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    data: [200, 400, 500, 250, 450, 600] // Valores de consumo supérfluo mensais ajustados
  }]
};

function renderChart() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const screenWidth = window.innerWidth;

  let options = {
    scales: {
      xAxes: [{
        ticks: {
          // Definindo os valores mínimos e máximos do eixo X manualmente
          min: 0,
          max: 1400,
          // Definindo os valores do eixo X de forma personalizada para dispositivos móveis
          stepSize: 200,
          callback: function(value, index, values) {
            return value; // Retorna o valor original sem formatação
          }
        }
      }]
    },
    responsive: true, // Torna o gráfico responsivo
    maintainAspectRatio: false, // Permite que o gráfico se ajuste ao tamanho do contêiner
    legend: {
      display: true,
      position: 'top' // Posição da legenda
    }
  };

  // Ajustar opções para smartphones Android
  if (screenWidth <= 600 && window.navigator.userAgent.toLowerCase().indexOf("android") > -1) {
    options = {
      scales: {
        xAxes: [{
          ticks: {
            // Definindo os valores mínimos e máximos do eixo X manualmente para smartphones Android
            min: 0,
            max: 1400,
            // Definindo os valores do eixo X de forma personalizada para dispositivos móveis
            stepSize: 200,
            callback: function(value, index, values) {
              return value; // Retorna o valor original sem formatação
            }
          }
        }]
      },
      responsive: true, // Torna o gráfico responsivo
      maintainAspectRatio: true, // Mantém a proporção do gráfico para smartphones Android
      legend: {
        display: true,
        position: 'top' // Posição da legenda
      }
    };
  }

  const myChart = new Chart(ctx, {
    type: 'bar', // Mantido como barra
    data: data,
    options: options
  });
}

document.addEventListener('DOMContentLoaded', renderChart);

// Adicionando media query para ajustar o tamanho do gráfico
window.addEventListener('resize', renderChart);
