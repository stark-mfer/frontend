import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function Chart() {

    // Function to calculate price
    function get_price_data(num_total_purchases: number, time_since_start: number, quantity: number) {
        var initial_price = 10;
        var increase_factor = 1.5;
        var decay_factor = 0.09;
        var numerator = initial_price * (increase_factor ** num_total_purchases) * (increase_factor ** quantity - 1);
        var denominator = Math.exp(decay_factor * time_since_start) * (increase_factor - 1);
        var price = numerator / denominator;
        return price
    }

    // This computes the data array for the graph
    var array_values_1 = [];
    // var array_values_2 = [];
    var array_time = [];
    var quantity = 1;
    var num_total_purchases = 0;
    var time_since_start = 0;
    var total_supply = 100;
    for (let i = 0; i < total_supply; i++) {
        array_values_1.push(get_price_data(num_total_purchases, time_since_start, quantity));
        num_total_purchases++;
        time_since_start = time_since_start + 5;
        array_time.push(i)
    }

    // var quantity = 2;
    // for (let i = 0; i < total_supply; i++) {
    //     array_values_2.push(get_price_data(num_total_purchases, time_since_start, quantity));
    //     num_total_purchases++;
    //     time_since_start = time_since_start + 5;
    //     array_time.push(i)
    // }
    // define the data
    const labels = array_time;
    let data_1 = array_values_1;
    // let data_2 = array_values_2;


    // options for labelling
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Historical Transactions & Future Price Prediction',
            }
        },
        scales: {
            x: { 
                title: { 
                    display: true, text: 'Time in Seconds'
                }
            },
            y: {
                title: {
                    display: true, text: 'Price in ETH'
                }
            }
        }

    };

    const data_line = {
        labels,
        datasets: [
            {
                label: 'Price for 1 NFT',
                data: data_1,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

            // {
            //     label: 'Price for 2 NFTs',
            //     data: data_2,
            //     borderColor: 'rgb(255, 99, 132)',
            //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // }
        ],
    }

    return (
        <div> 
        < Line data = {data_line} options = {options} />
        </div>)
}

