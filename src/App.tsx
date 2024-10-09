import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { ReactECharts } from './Echarts/ReactECharts';
import './theme.css';
import {
  useCurrency,
  getFilteredData,
  getAverage,
  currencies,
} from './hooks/useCurrency';
import { createOptions } from './data/options';

function App() {
  const { value, setValue } = useCurrency();

  // заносим отфильтрованные данные в константу
  const filteredData = getFilteredData(value || currencies[0]);

  // определяем мин. интервал для оси Y (по макету)
  const minInterval = value === '$' ? 3 : 2;

  const option = createOptions({
    value: value || currencies[0],
    filteredData,
    minInterval,
  });

  return (
    <Theme className="theme" preset={presetGpnDefault}>
      <div className="container">
        <main>
          <ReactECharts option={option} />
          <div className="right">
            <ChoiceGroup
              className="currencies"
              value={value}
              onChange={({ value }) => setValue(value)}
              items={currencies}
              getItemLabel={(currency) => currency}
              multiple={false}
              name="ChoiceCurrency"
            />
            <div className="average">
              <p>Среднее за период</p>
              <div>
                <span>
                  {getAverage(filteredData.map((item) => item.value)).toFixed(
                    1 // вывод среднего значения с точностью до десятых
                  )}
                </span>
                ₽
              </div>
            </div>
          </div>
        </main>
      </div>
    </Theme>
  );
}

export default App;
