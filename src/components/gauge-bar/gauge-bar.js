'use client'
/**
 * The external imports
 */
import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
// import ReactApexChart from 'react-apexcharts';


const GaugeBar = ({rateSkill}) => {
  const [Chart, setChart] = useState<any>(null);
  const [chartData, setChartData] = useState({
    series: [75],
    options: {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '58%',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -1,
              left: 0,
              blur: 4,
              opacity: 0.1
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: 'black',
              fontSize: '28px'
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        colors: "#BBA06B",
        opacity: 2,
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['%'],
    },
  });

  useEffect(() => {
    import ('react-apexcharts').then((res) => {
      setChart(res.default);
    });
    setChartData({
      series: [rateSkill],
      options: {},
    });
  }, [rateSkill]);

  return (
    <div id="cart">
      <div id="chart">
        hasType && Chart && <Chart options={chartData.options} series={chartData.series} type="radialBar" height={350} />
          {/* <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="radialBar"
            height={350}
          /> */}
      </div>
    </div>
  );
}

export default GaugeBar;
