import { useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';

interface ChartProps {
  loading?: boolean | null;
  options?: any | null;
  klass?: string;
  renderer?: string;
}
const Chart: React.FC<ChartProps> = ({ loading = true, options = null, klass = "", renderer }) => {

  const chartRef = useRef(null);
  const [chart, setChart] = useState(null)

  
  const readyChart = (e: any) => {
    setChart(e);
    window.addEventListener('resize', () => {
      e.resize();
    })
  }
  return (
    <>
      {loading ? (
        <div className={`w-full min-h-[300px] h-[300px] items-center flex rounded-md overflow-hidden ${klass}`}>
          <div className="animate-pulse h-full w-full">
            <div className="bg-slate-200 w-full h-full" />
          </div>
        </div>
      ) : options !== null ? (
        <ReactECharts
          ref={chartRef}
          className="min-w-[300px]! h-full"
          style={{minHeight: '380px'}}
          opts={{ renderer: 'svg' }}
          option={options} notMerge={true} lazyUpdate={true} onChartReady={readyChart} />
      ) : null} 
    </>
  );
};

export default Chart;
