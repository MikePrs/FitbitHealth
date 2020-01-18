////////
$.getJSON("data.json", function (json) {
  console.log("success"); // this will show the info it in firebug console
  ////////
  var steps = [6];
  for (var i = 0; i <= 6; i++) {
    steps[i] = json.activityLog[i].steps * 100 / json.goals.steps;
  }
  var calories = [6];
  for (var i = 0; i <= 6; i++) {
    calories[i] = json.activityLog[i].calories * 100 / json.goals.caloriesOut;
  }
  var distance = [6];
  for (var i = 0; i <= 6; i++) {
    distance[i] = json.activityLog[i].distance * 100 / json.goals.distance;
  }



  var logId = "Login Id: " + json.activityLog[6].logId;
  document.getElementById("log").innerHTML = logId;

  var actId = "Activity Id: " + json.activityLog[6].activityId;
  document.getElementById("act").innerHTML = actId;



  var options = {
    series: [steps[6].toFixed(1), calories[6].toFixed(1), distance[6].toFixed(1)],
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E'],
    labels: ['steps', 'calories', 'distance'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 130,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
      },
      itemMargin: {
        horizontal: 3,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();








  var options = {
    series: [{
      name: "steps",
      data: [steps[0].toFixed(1), steps[1].toFixed(1),steps[2].toFixed(1), steps[3].toFixed(1), 
                      steps[4].toFixed(1),steps[5].toFixed(1), steps[6].toFixed(1) ]
    },
    {
      name: "calories",
      data: [calories[0].toFixed(1),calories[1].toFixed(1),calories[2].toFixed(1),calories[3].toFixed(1), 
                      calories[4].toFixed(1),calories[5].toFixed(1),calories[6].toFixed(1)]
    },
    {
      name: 'distance',
      data: [distance[0].toFixed(1),distance[1].toFixed(1),distance[2].toFixed(1),distance[3].toFixed(1),
                      distance[4].toFixed(1), distance[5].toFixed(1),distance[6].toFixed(1)]
    }
    ],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: 'Page Statistics',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,

      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        '10 Jan', '11 Jan', '12 Jan'
      ],
    },
    tooltip: {
      y: [{
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }, {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }, {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();



  var options = {
    series: [{
      name: 'duration',
      data: [json.activityLog[0].sleep, json.activityLog[1].sleep, json.activityLog[2].sleep, 
      json.activityLog[3].sleep, json.activityLog[4].sleep, json.activityLog[5].sleep,
      json.activityLog[6].sleep]
    }],
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();

});