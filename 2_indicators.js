   
        function stockPrice() {
            let date = ['03.04.2023', '04.04.2023', '05.04.2023', '17.06.2023', '16.07.2023',
                        '10.04.2023', '11.04.2023', '12.04.2023', '13.04.2023','14.07.2023',
                        '17.04.2023', '18.04.2023', '19.04.2023', '20.04.2023', '21.04.2023',
                        '24.04.2023', '25.04.2023', '26.04.2023', '27.04.2023', '28.04.2023'];
            let price = [118.20, 118.40, 117.40, 118.60, 117.60, 118.00, 114.20, 113.80, 
                        113.20, 114.20, 114.20, 113.60, 113.00, 111.00, 111.60, 111.00,
                        109.20, 109.40, 110.60, 108.80];
            let diff = ['-', (price[0]-price[1]).toFixed(2), (price[1]-price[2]).toFixed(2), (price[2]-price[3]).toFixed(2), 
                        (price[3]-price[4]).toFixed(2), (price[4]-price[5]).toFixed(2), (price[5]-price[6]).toFixed(2), 
                        (price[6]-price[7]).toFixed(2), (price[7]-price[8]).toFixed(2), (price[8]-price[9]).toFixed(2),
                        (price[9]-price[10]).toFixed(2), (price[10]-price[11]).toFixed(2), (price[11]-price[12]).toFixed(2),
                        (price[12]-price[13]).toFixed(2), (price[13]-price[14]).toFixed(2), (price[14]-price[15]).toFixed(2),
                        (price[15]-price[16]).toFixed(2), (price[16]-price[17]).toFixed(2), (price[17]-price[18]).toFixed(2),
                        (price[18]-price[19]).toFixed(2)];
            let table = document.getElementById('stock-price');
            
            for (let i = 0; i < date.length; i++) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                td1.innerHTML = date[i];
                td2.innerHTML = price[i];
                td3.innerHTML = diff[i];
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);     
            }

            let sum=0;
            let k=0;
            for (let i = 0; i < price.length; i++) {
                sum = sum + price[i];
                k+=1;
            }
            let average = sum / price.length;
            
            let sum2=0;
            for(let q=0; q < price.length; q++) {
                sum2 = (Math.abs(price[q] - average))**2;
            }
            let deviation = Math.sqrt( sum2 / k);
            
            document.getElementById('deviation').innerHTML = '<b>Среднеквадратическое отклонение: </b>' + deviation.toFixed(2);



            let max = 0;
            let min = price[0];
            for (let i = 0; i < price.length; i++) {
                if (max<price[i]) {
                    max = price[i];
                }
                else if (min>price[i]) {
                    min = price[i];
                    }
            }
            document.getElementById('min').innerHTML = '<b>Минимальное значение: </b>' + min;
            document.getElementById('max').innerHTML = '<b>Максимальное значение: </b>' + max;
        }