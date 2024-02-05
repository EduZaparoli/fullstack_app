import { Box } from "@chakra-ui/react";
import Chart from "react-google-charts";

declare type GoogleChartWrapperChartType = "AnnotationChart" | "AreaChart" | "BarChart" | "BubbleChart" | "Calendar" | "CandlestickChart" | "ColumnChart" | "ComboChart" | "DiffChart" | "DonutChart" | "Gantt" | "Gauge" | "GeoChart" | "Histogram" | "LineChart" | "Line" | "Bar" | "Map" | "OrgChart" | "PieChart" | "Sankey" | "ScatterChart" | "Scatter" | "SteppedAreaChart" | "Table" | "Timeline" | "TreeMap" | "WaterfallChart" | "WordTree";

interface IProps {
    chartType: GoogleChartWrapperChartType;
    data: Array<Object>;
    options: Object
}

export const ChartComponent = ({ chartType, data, options }: IProps) => {

    return (
        <Box>
            <Chart
                height={300}
                width={300}
                chartType={chartType}
                data={data}
                options={options}
            />
        </Box>
    )
}