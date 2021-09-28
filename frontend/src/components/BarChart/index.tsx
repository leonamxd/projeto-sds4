import Chart from 'react-apexcharts';

const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji',
                         'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe']
        },
        series: [
            {
                name: "Berrys",
                data: [1500000000, 320000000, 66000000, 200000000, 330000000,
                       100, 130000000, 94000000, 83000000, 438000000]
            }
        ]
    };
    return (
        <Chart
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="400"
        />
    );
}

export default BarChart;