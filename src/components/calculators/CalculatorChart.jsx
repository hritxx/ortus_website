'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { abbreviateIndian } from '@/lib/calculators/format';

/** Shared tooltip formatter */
function formatTooltip(value) {
  return '₹' + Math.round(value).toLocaleString('en-IN');
}

/** Line chart — used for FD growth over time */
function LineChartView({ data, config }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey={config.xKey}
          label={{ value: config.xLabel, position: 'bottom', offset: -5 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          tickFormatter={abbreviateIndian}
          tick={{ fontSize: 12 }}
          width={60}
        />
        <Tooltip formatter={formatTooltip} />
        <Legend />
        {config.lines.map((line) => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            name={line.label}
            stroke={line.color}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

/** Stacked bar chart — used for NSC, MF, SSY */
function StackedBarView({ data, config }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey={config.xKey}
          label={{ value: config.xLabel, position: 'bottom', offset: -5 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          tickFormatter={abbreviateIndian}
          tick={{ fontSize: 12 }}
          width={60}
        />
        <Tooltip formatter={formatTooltip} />
        <Legend />
        {config.bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            name={bar.label}
            fill={bar.color}
            stackId="a"
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

/** Simple bar chart — used for HRA comparison */
function BarView({ data, config }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey={config.xKey}
          tick={{ fontSize: 11 }}
          label={{ value: config.xLabel, position: 'bottom', offset: -5 }}
        />
        <YAxis
          tickFormatter={abbreviateIndian}
          tick={{ fontSize: 12 }}
          width={60}
        />
        <Tooltip formatter={formatTooltip} />
        <Legend />
        {config.bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            name={bar.label}
            fill={bar.color}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

const CHART_MAP = {
  line: LineChartView,
  'bar-stacked': StackedBarView,
  bar: BarView,
};

/**
 * CalculatorChart — renders the appropriate chart type
 * based on the calculator config.
 */
export default function CalculatorChart({ chartData, chartConfig }) {
  if (!chartData?.length || !chartConfig) return null;

  const ChartComponent = CHART_MAP[chartConfig.type];
  if (!ChartComponent) return null;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <ChartComponent data={chartData} config={chartConfig} />
    </div>
  );
}
