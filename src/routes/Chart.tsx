import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 5000 } //5초마다 refetch
  );
  //ohlcv: open, high, low, close, volume
  const options: ApexCharts.ApexOptions = {
    theme: {
      mode: "dark",
    },
    chart: {
      height: 400,
      type: "candlestick",
    },
    grid: { show: false },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
      categories: data?.map((val) => val.time_close),
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: false,
    },
    title: {
      text: `${coinId.toUpperCase()} Chart`,
      align: "left",
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toFixed(2)}`,
      },
    },
    stroke: {
      width: 3,
    },
  };
  const series = [
    {
      data: data?.map((price) => {
        return {
          x: price.time_close,
          y: [
            price.open.toFixed(3),
            price.high.toFixed(3),
            price.low.toFixed(3),
            price.close.toFixed(3),
          ],
        };
      }),
    },
  ];

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          height={350}
          series={series}
          options={options}
        />
      )}
    </div>
  );
}

export default Chart;
