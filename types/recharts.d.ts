import { ComponentType } from 'react';
import { 
  LineChart as RechartsLineChart,
  BarChart as RechartsBarChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar
} from 'recharts';

declare module 'recharts' {
  export const LineChart: ComponentType<any>;
  export const BarChart: ComponentType<any>;
  export const Line: ComponentType<any>;
  export const XAxis: ComponentType<any>;
  export const YAxis: ComponentType<any>;
  export const CartesianGrid: ComponentType<any>;
  export const Tooltip: ComponentType<any>;
  export const Legend: ComponentType<any>;
  export const ResponsiveContainer: ComponentType<any>;
  export const Bar: ComponentType<any>;
}

export interface ChartComponentsType {
  LineChart: typeof RechartsLineChart;
  BarChart: typeof RechartsBarChart;
  Line: typeof Line;
  XAxis: typeof XAxis;
  YAxis: typeof YAxis;
  CartesianGrid: typeof CartesianGrid;
  Tooltip: typeof Tooltip;
  Legend: typeof Legend;
  ResponsiveContainer: typeof ResponsiveContainer;
  Bar: typeof Bar;
}
