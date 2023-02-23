import ApexChart from 'react-apexcharts';

function Barchart(){

  const series = [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }]

  const options = {
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  }

  return(
    <ApexChart options={options} series={series} type="bar" width={640} height={480}/>
  )
}

export default Barchart;