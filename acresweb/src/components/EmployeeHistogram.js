import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function EmployeeHistogram() {
  // Sample data for employee clock-in times
  const employeeData = [
    { employee: 'John', clockIn: { Monday: 8, Tuesday: 9, Wednesday: 8.5, Thursday: 8.75, Friday: 9 } },
    { employee: 'Alice', clockIn: { Monday: 9, Tuesday: 8.5, Wednesday: 9.25, Thursday: 8.5, Friday: 8 } },
    // Add more employees and clock-in data as needed
  ];

  // Process employee data to create series for BarChart
  const seriesData = [];
  const xAxisData = [{ data: [] }];
  employeeData.forEach(employee => {
    Object.keys(employee.clockIn).forEach(day => {
      const index = xAxisData[0].data.indexOf(day);
      if (index === -1) {
        xAxisData[0].data.push(day);
      }
    });
  });
  xAxisData[0].data.sort((a, b) => {
    const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return daysOrder.indexOf(a) - daysOrder.indexOf(b);
  });
  employeeData.forEach(employee => {
    const series = { data: Array(xAxisData[0].data.length).fill(null) };
    Object.keys(employee.clockIn).forEach(day => {
      const index = xAxisData[0].data.indexOf(day);
      series.data[index] = employee.clockIn[day];
    });
    seriesData.push(series);
  });

  return (
    <BarChart
      series={seriesData}
      height={400}
      xAxis={[{ data: xAxisData[0].data, scaleType: 'band' }]} // Ensure scaleType is 'band'
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
