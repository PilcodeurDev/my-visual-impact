'use client'
/**
 * The external imports
 */
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

/**
 * The internal imports
 */
import styles from './gauge-bar.module.sass'

function GaugeBar({rateSkill}) {
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
    if (typeof window !== 'undefined') {
      setChartData({
        series: [rateSkill],
        options: {},
      });
    }
  }, [rateSkill]);

  return (
    <div id="cart">
      <div id="chart">
        {typeof window !== 'undefined' && (
          <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={350} />
        )}
      </div>
    </div>
  );
}

export default GaugeBar;
