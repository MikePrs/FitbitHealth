$.getJSON("profile.json", function (json1) {
  console.log("success1");

  var name = "Name: " + json1.user.fullName;
  document.getElementById("name").innerHTML = name;

  var height = "Height: " + json1.user.height + "cm";
  document.getElementById("height").innerHTML = height;

  var weight = "Weight: " + json1.user.weight + "kg";
  document.getElementById("weight").innerHTML = weight;
});
var steps =[];
var calories = [];
var distance = [];
for (var i = 0; i <= 6; i++) {
  $.getJSON("data" + i + ".json", function (json2) {
    console.log("success2"); // this will show the info it in firebug console
    ////////

    
    steps.push(json2.goals.steps * 100 / 4000);
    console.log(steps); 
    
    calories.push(json2.goals.caloriesOut * 100 / 1000);

    
    distance.push(json2.goals.distance * 100 / 4.0);


    if (i > 5) {
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
          data: [steps[0].toFixed(1),steps[1].toFixed(1),steps[2].toFixed(1),steps[3].toFixed(1)
          ,steps[4].toFixed(1),steps[5].toFixed(1),steps[6].toFixed(1)]
        },
        {
          name: "calories",
          data: [calories[0].toFixed(1),calories[1].toFixed(1),calories[2].toFixed(1),calories[3].toFixed(1)
        ,calories[4].toFixed(1),calories[5].toFixed(1),calories[6].toFixed(1)]
        },
        {
          name: 'distance',
          data: [distance[0].toFixed(1),distance[1].toFixed(1),distance[2].toFixed(1),distance[3].toFixed(1),
          distance[4].toFixed(1),distance[5].toFixed(1),distance[6].toFixed(1),]
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

    }
  });
  
  
}

$.getJSON("sleep.json", function (json3) {
  console.log("success3"); // this will show the info it in firebug console
  var options = {
    series: [{
      name: 'duration',
      data: [json3.sleep[0].levels.summary.asleep.minutes,json3.sleep[1].levels.summary.asleep.minutes]
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
      
      categories: [json3.sleep[0].endTime, json3.sleep[1].endTime]
    },
    
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();

});


function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}