import ApexChart from 'react-apexcharts';

function Columnchart(){

  const series = [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }]

  const options = {
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
        'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
      ],
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Servings',
      },
      tooltip: {
        enabled: true
      },
    }
  }

  return(
    <ApexChart options={options} series={series} type="bar" width={640} height={480}/>
  )
}

export default Columnchart;