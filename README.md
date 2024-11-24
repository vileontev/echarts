# React-приложение с использованием библиотеки [**echarts.js**](https://echarts.apache.org/en/index.html) и библиотеки компонентов [**Consta UI Kit**](https://consta.design/libs/uikit)
## Consta UI 
Из библиотеки компонентов был использован компонент ChoiceGroup, который является группой кнопок и нужен для того, чтобы выбрать из списка один или несколько вариантов (в моём случае - один, мульти-выбор отключен через свойство multiple).
## Echarts 
Для удобной работы с echarts был создан кастомный хук useCurrency в папке hooks для управления валютами и создан файл options в папке data, который содержит в себе логику для формирования опций графика. В файле data.ts представлен массив данных, используемый для отрисовки визуализации графиков.
## Conclusion
Согласно ТЗ, в приложении присутствуют:
1. Тултипы, отображающиеся при наведении на график и показывающие значение в данной точке
2. Среднее значение за период
3. Переключение курсов валют
4. Компоненты из библиотеки Consta UI Kit
5. Вёрстка по макету
## Template
https://www.figma.com/file/CppcOcor3NP1BfrppRgd4a/Test?node-id=0%3A1&mode=dev
## Video Review
<video src="https://github.com/user-attachments/assets/403a53ed-4512-4160-b4a8-e01281b39782" controls="controls" style="max-width: 100%;"></video>
