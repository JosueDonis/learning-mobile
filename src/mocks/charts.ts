export const dayChartOptions = {
    color: ['#27187e'],
    xAxis: {
      type: 'category',
      data: ['Lun', 'Mart', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    series: [
      {
        // label: {
        //   show: true,
        // },
        data: [10, 20, 6, 12, 10, 9, 5],
        type: 'bar'
      }
    ]
  };