import Chart from 'react-apexcharts';

const DonutChart = () => {
   
    const mockData = {
        series: [1500000000, 320000000, 66000000, 200000000, 330000000,
            100, 130000000, 94000000, 83000000, 438000000],
        labels: ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji',
        'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="400"
        />
    );
}

export default DonutChart;