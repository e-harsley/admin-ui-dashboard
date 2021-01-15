<template>
  <div>
          <div class="py-5 px-5">
            <h1 class="text-gray-600 font-semibold text-md">General Report</h1>
            <div class="grid grid-cols-4 grid-flow-col gap-4 mt-2">
              <div class="bg-white shadow-lg hover:shadow-xl rounded-md p-6">
                <div class="flex justify-between items-center">
                  <div>
                    <i class="icofont-users-social text-blue-400 text-3xl"></i>
                  </div>
                  <div
                    class="bg-green-500 text-gray-200 py-1 px-2 rounded-full text-xs"
                  >
                    33%
                  </div>
                </div>
                <div class="flex flex-col pt-4 pt-3">
                  <div class="font-semibold text-3xl text-gray-600">
                    18,428
                  </div>
                  <div class="font-light text-sm text-gray-600 mt-1">
                    Total Investors
                  </div>
                </div>
                <div></div>
              </div>
              <div class="bg-white shadow-lg hover:shadow-xl rounded-md p-6">
                <div class="flex justify-between items-center">
                  <div>
                    <i
                      class="icofont-chart-histogram-alt text-blue-400 text-3xl"
                    ></i>
                  </div>
                  <div
                    class="bg-red-500 text-gray-100 py-1 px-2 rounded-full text-xs"
                  >
                    33%
                  </div>
                </div>
                <div class="flex flex-col pt-4 pt-3">
                  <div class="font-semibold text-3xl text-gray-600">
                    960
                    <span class="text-sm font-medium">(&#8358; 546.700M)</span>
                  </div>
                  <div class="font-light text-sm text-gray-600 mt-1">
                    Co Earn
                  </div>
                </div>
                <div></div>
              </div>
              <div class="bg-white shadow-lg hover:shadow-xl rounded-md p-6">
                <div class="flex justify-between items-center">
                  <div>
                    <i class="icofont-ui-home text-blue-400 text-3xl"></i>
                  </div>
                  <div
                    class="bg-green-500 text-gray-200 py-1 px-2 rounded-full text-xs"
                  >
                    33%
                  </div>
                </div>
                <div class="flex flex-col pt-4 pt-3">
                  <div class="font-semibold text-3xl text-gray-600">
                    968
                    <span class="text-sm font-medium">(&#8358; 665.4354M)</span>
                  </div>
                  <div class="font-light text-sm text-gray-600 mt-1">
                    HomeVest
                  </div>
                </div>
                <div></div>
              </div>
              <div class="bg-white shadow-lg hover:shadow-xl rounded-md p-6">
                <div class="flex justify-between items-center">
                  <div>
                    <i class="icofont-money text-blue-400 text-3xl"></i>
                  </div>
                  <div
                    class="bg-green-500 text-gray-200 py-1 px-2 rounded-full text-xs"
                  >
                    33%
                  </div>
                </div>
                <div class="flex flex-col pt-4 pt-3">
                  <div class="font-semibold text-3xl text-gray-600">
                    &#8358; 140M
                  </div>
                  <div class="font-light text-sm text-gray-600 mt-1">
                    Total Commissions
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="py-5 px-5">
          <h1 class="text-gray-600 font-semibold text-md">Investments Trends</h1>
        <div class="grid grid-cols-2 grid-flow-row gap-4 mt-2">
          <div class="bg-white shadow-lg h-96 hover:shadow-xl rounded-md p-6">
            <canvas id="myChart"></canvas>
          </div>
          <div class="bg-white shadow-lg h-96 hover:shadow-xl rounded-md p-6">
          <canvas id="line-chart"></canvas>
          </div>
          <div class="bg-white shadow-lg h-96 hover:shadow-xl rounded-md p-6">
          <canvas id="bar-chart-horizontal"></canvas>
          </div>
          <div class="bg-white shadow-lg hover:shadow-xl rounded-md p-6">
             <canvas id="bar-chart-grouped"></canvas>
          </div>
        </div>
        </div>
</template>

<script>
export default {
mounted(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: .5,
          
        }]
    },
    options: {
      title: {
      display: true,
      text: 'Home Vest'
    },
      responsive: true,
      maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'CO Earn'
    }
  }
});
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted sales'
      }
    }
});
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Total'
      }
    }
});
  }
};
</script>

<style>

</style>