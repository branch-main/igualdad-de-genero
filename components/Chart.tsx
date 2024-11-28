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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="font-bold text-[17px] text-gray-800 mb-2">{text}</h3>
      <p className="text-[15px] mb-5 text-gray-500">
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
