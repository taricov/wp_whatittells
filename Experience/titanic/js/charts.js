const ctx = document.getElementById('myChart_1').getContext('2d');

let delay = 88;
var delayed;
var gradient = ctx.createLinearGradient(500, 0, 0, 400);
gradient.addColorStop(0, "rgba(243,163,95, 1)");
gradient.addColorStop(1, "rgba(0,0,0,.7)");

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Less than $50', 'Between $50 to $90', 'More than $90'],
        datasets: [{
            data: [.7, .4, .15],
            backgroundColor: gradient,
            borderWidth: 1
        }]
    },
    options: {

        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (Item) => '%' + (Item.formattedValue * 100) + " Died"
                }
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                color: 'rgb(243,163,95)',
                font: { size: "20px", weight: 'bold' },
                text: 'Death per Money Paid - Fare Brackets [Hover]'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 1,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString('de-DE', { style: 'percent' });
                    },
                    color: 'rgb(243,163,95, .5)',
                },
                grid: {
                    borderColor: 'rgb(243,163,95)'
                }
            },
            x: {
                grid: {
                    borderColor: 'rgb(243,163,95)'
                },
                ticks: {
                    color: 'rgb(243,163,95, .5)',
                },
            },
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 100 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    }
});

// ========================

const ctx2 = document.getElementById('myChart_2').getContext('2d');

const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['1st Class', '2nd Class', '3rd Class'],
        datasets: [{
            data: [.63, .47, .24],
            backgroundColor: gradient,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (Item) => '%' + (Item.formattedValue * 100) + " Survived"
                }
            },
            legend: {
                display: false,
            },
            title: {
                display: true,
                color: 'rgb(243,163,95)',
                font: { size: "20px", weight: 'bold' },
                text: 'Survival Rate Per Class [Hover]'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 1,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString('de-DE', { style: 'percent' });
                    },
                    color: 'rgb(243,163,95, .5)',
                },
                grid: {
                    borderColor: 'rgb(243,163,95)'
                }
            },
            x: {
                grid: {
                    borderColor: 'rgb(243,163,95)'
                },
                ticks: {
                    color: 'rgb(243,163,95, .5)',
                },
            },
        },
        // animation: {
        //     onComplete: () => {
        //         delayed = true;
        //     },
        //     delay: (context) => {
        //         if (context.type === 'data' && context.mode === 'default' && !delayed) {
        //             delay = context.dataIndex * 1000 + context.datasetIndex * 1300;
        //         }
        //         return delay;
        //     },
        // },
    }
});