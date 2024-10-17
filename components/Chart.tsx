"use client";

import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Chart({
  text,
  labels,
  series,
}: {
  text: string;
  labels: string[];
  series: number[];
}) {
  return (
    <div className="bg-white rounded-md p-5 border">
      <p className="mb-1">{text}</p>
      <p className="text-sm mb-5 text-gray-500">
        {series.reduce((acc, serie) => acc + serie, 0)} respuestas
      </p>
      <div className="flex items-center justify-center">
        <ApexChart
          type="pie"
          height="100%"
          options={{ labels, legend: { show: false } }}
          series={series}
        />
      </div>
    </div>
  );
}
