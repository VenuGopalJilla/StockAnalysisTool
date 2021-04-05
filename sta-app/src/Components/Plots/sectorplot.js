// window.onload = function() {
// console.log("inside scatterplot.js");
// var ctx = document.getElementById("myBarChart").getContext("2d");
// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);
// }


// document.addEventListener('DOMContentLoaded',domloaded,false);
// function domloaded() {
//     var Chart = require('chart.js')
//     var ctx = document.getElementById("myBarChart");
//     var myBarChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ["Finance", "Textiles", "Other Financial Services", "Comm. Trading & Distribution", "Pharmaceuticals", "Realty", "Other Apparels & Accessories", "Construction & Engineering", "Auto Parts & Equipment", "Industrial Machinery", "Iron & Steel/Interm.Products", "Misc.Commercial Services"],
//             datasets: [{
//                 label: "Companies Count",
//             //   backgroundColor: "#4e73df",
//             //   borderColor: "#4e73df",
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.5)',
//                     'rgba(54, 162, 235, 0.5)',
//                     'rgba(255, 206, 86, 0.5)',
//                     'rgba(75, 192, 192, 0.5)',
//                     'rgba(153, 102, 255, 0.5)',
//                     'rgba(255, 159, 64, 0.5)',
//                     'rgba(255, 99, 132, 0.5)',
//                     'rgba(54, 162, 235, 0.5)',
//                     'rgba(255, 206, 86, 0.5)',
//                     'rgba(75, 192, 192, 0.5)',
//                     'rgba(153, 102, 255, 0.5)',
//                     'rgba(255, 159, 64, 0.5)'
//                 ],
//                 borderColor: [
//                     'rgba(255,99,132,1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)',
//                     'rgba(255,99,132,1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1,
//                 hoverBackgroundColor: "#2e59d9",
//                 data: [324,263,261,208,172,140,111,108,106,104,100,100],
//                 }],
//         },
//         options: {
//             maintainAspectRatio: false,
//             layout: {
//                 padding: {
//                     left: 10,
//                     right: 10,
//                     top: 10,
//                     bottom: 0
//                 }
//             },
//             scales: {
//                 xAxes: [{
//                     time: {
//                         unit: 'companies'
//                     },
//                     gridLines: {
//                         display: true,
//                         drawBorder: true
//                     },
//                     ticks: {
//                         maxTicksLimit: 10
//                     },
//                     maxBarThickness: 25,
//                 }],
//                 yAxes: [{
//                     ticks: {
//                         min: 0,
//                         max: 400,
//                         maxTicksLimit: 5,
//                         padding: 5,
//                     },
//                     gridLines: {
//                         color: "rgb(234, 236, 244)",
//                         zeroLineColor: "rgb(234, 236, 244)",
//                         drawBorder: false,
//                         borderDash: [2],
//                         zeroLineBorderDash: [2]
//                     }
//                 }],
//             },
//             legend: {
//                 display: false
//             },
//             tooltips: {
//                 titleMarginBottom: 10,
//                 titleFontColor: '#6e707e',
//                 titleFontSize: 14,
//                 backgroundColor: "rgb(255,255,255)",
//                 bodyFontColor: "#858796",
//                 borderColor: '#dddfeb',
//                 borderWidth: 1,
//                 xPadding: 15,
//                 yPadding: 15,
//                 displayColors: false,
//                 caretPadding: 10,
//             },
//         }
//     });
// }




// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// 
