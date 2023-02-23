import ApexChart from 'react-apexcharts';

function Radarchart(){

  const series = [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }]

  const options = {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      text: 'Basic Radar Chart'
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  }

  return(
    <ApexChart options={options} series={series} type="radar" width={640} height={480}/>
  )
}

export default Radarchart;