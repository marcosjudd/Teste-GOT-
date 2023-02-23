import ApexChart from 'react-apexcharts';

function Piechart(){

  const series = [44, 55, 13, 43, 22]

  const options = {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
  }

  return(
    <ApexChart options={options} series={series} type="pie" width={640} height={480}/>
  )
}

export default Piechart;