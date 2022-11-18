// 1. Récupérez les informations JSON de mon fichier
        // Ouvrir mon json.
        // Mettre la valeur json dans une variable par jour

// 2. Stylisez les barres de jours
        // Remplacez la hauteur sur un total de 100 %
        // Colorée en bleu la journée la plus rentable

// 3. Affichez bulle indiquant la prix de chaque barre
        // Créer un nouvel élément
        // lui indiquez le prix json
        // Stylisez la bulle

// 4. Changez les valeurs numériques
        // My balance = 350 + Total this month
        // Total this month = tous les jours amount additionnés.


let price = document.querySelector('.price')
let amount = document.querySelector('.amount')
let amountDay = document.querySelector('.amount-day')
let amountDay1 = document.querySelector('.amount-day1')
let amountDay2 = document.querySelector('.amount-day2')
let amountDay3 = document.querySelector('.amount-day3')
let amountDay4 = document.querySelector('.amount-day4')
let amountDay5 = document.querySelector('.amount-day5')
let amountDay6 = document.querySelector('.amount-day6')


    const xmlhttp = new XMLHttpRequest();
    const url = 'data.json';
    xmlhttp.open('GET', url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
                const datapoints = JSON.parse(this.responseText);
                console.log(datapoints);
                const labelDay = datapoints.financialreport.map(function(index) {
                        return index.day;
                });
                const labelAmount = datapoints.financialreport.map(function(index) {
                        return index.amount;
                });
                console.log(labelAmount)
                const barCanvas = document.getElementById('barCanvas')

                let monAmount = labelAmount[0]
                let tueAmount = labelAmount[1]
                let wedAmount = labelAmount[2]
                let thuAmount = labelAmount[3]
                let friAmount = labelAmount[4]
                let satAmount = labelAmount[5]
                let sunAmount = labelAmount[6]
        
                prices = monAmount + tueAmount + wedAmount + thuAmount + friAmount + satAmount + sunAmount
        
                price.innerHTML = "$" + Math.round(prices*100)/100
        
                amount.innerHTML=  "$" + (300 + prices)

        const barChart = new Chart(barCanvas, {

                
                type: "bar",
                data: {
                        labels: labelDay,
                        datasets: [{
                                data: labelAmount,
                                borderRadius: 5,
                                backgroundColor: "hsl(10, 79%, 65%)",
                                hoverBackgroundColor: "hsl(186, 34%, 60%)"
                        }]
                },
                options: {
                        scales: {
                                y: {
                                        beginAtZero: true,
                                        grid: {
                                                borderColor:'white',
                                                display: false,

                                        },
                                        ticks: {
                                                display:false,
                                        }
                                },
                                x: {
                                        beginAtZero: true,
                                        grid: {
                                                borderColor:'white',
                                                display: false
                                        }
                                }
                        },
                        plugins: {

                                legend: {
                                        display: false
                                },
                                tooltip: {
                                        yAlign:'bottom',
                                        position:'nearest',
                                        enabled: true,
                                        backgroundColor: 'hsl(25, 47%, 15%)',
                                        caretSize: 0,
                                        caretPadding:10,
                                        displayColors: false,
                                        bodyFont: {
                                                weight:'bold',
                                                size:'10px'
                                        },
                                        callbacks: {
                                                title: function() {},
                                                beforeBody: function(context) {
                                                        return `$ ${context[0].raw}`
                                                      },
                                                label: function(context) {}
                                        }
                                }
                        }
                }
        })
        }
    }