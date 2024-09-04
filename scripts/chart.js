const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [300, 170, 150, 100, 50, 10],
            borderWidth: 1,
            backgroundColor: "#F05C61"
        }],
    },
    options: {
        responsive: true,

        plugins: {
            legend: {
                display: false
            },
            datalabels: {  // Add the DataLabels plugin configuration
                color: '#000',  // Text color
                anchor: 'end',  // Position the labels at the end of each bar
                align: 'end',   // Align the text just outside the end of the bar
                formatter: (value) => value // Display the value as the label
            }
        },
        indexAxis: 'y',
        scales: {
            x: {
                grid: {
                    display: false  // Hide vertical grid lines
                },
                ticks: {
                    display: false  // Remove x-axis labels
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true,  // Display horizontal grid lines
                    color: '#3F4041'  // Set grid line color
                },
                ticks: {
                    display: false  // Remove y-axis labels
                }
            }
        }
    },
    plugins: [ChartDataLabels]  // Register the DataLabels plugin
});
