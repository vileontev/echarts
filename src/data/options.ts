type ChartOptions = {
  value: string;
  filteredData: { month: string; value: number }[];
  minInterval: number;
};

export const createOptions = ({
  value,
  filteredData,
  minInterval,
}: ChartOptions) => {
  return {
    title: {
      text: `Курс ${
        value === '$' ? 'доллара' : value === '€' ? 'евро' : 'юаня'
      }, ${value}/₽`.toUpperCase(),
      left: 'auto',
      textStyle: {
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 24,
      },
    },
    tooltip: {
      trigger: 'axis', // при наведении на точки возникает поп-ап
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: filteredData.map((item) => item.month), // заполнения оси X обозначенным периодом
      axisLine: {
        show: false, // убирает горизонтальную полосу на оси X
      },
      axisTick: {
        show: false, // убираем вертикальные палочки
      },
    },
    yAxis: [
      {
        type: 'value',
        scale: true,
        minInterval: minInterval, // деление по Y (как в видео)
        splitLine: {
          lineStyle: {
            type: 'dashed', // делает линии пунктирными
          },
        },
        axisLabel: {
          formatter: function (value: number, index: number) {
            if (index === 0) {
              return ''; // скрывает первое значение (по макету)
            }
            return value; // возвращает все остальные
          },
        },
      },
    ],
    series: [
      {
        name: `Курс ${
          value === '$' ? 'доллара' : value === '€' ? 'евро' : 'юаня'
        }`,
        data: filteredData.map((item) => item.value), // данные в поп-апе
        type: 'line',
        lineStyle: {
          color: '#F38B00',
        },
        symbol: 'none', // убираем точки с графика
      },
    ],
    grid: {
      // containLabel: true,
    },
    color: ['#F38B00'],
  };
};
