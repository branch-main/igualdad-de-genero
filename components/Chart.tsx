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
    <div className="bg-white rounded-md border-1 p-5">
      <p className="mb-1">{text}</p>
      <p className="text-sm mb-5 text-gray-500">
        {series.reduce((acc, serie) => acc + serie, 0)} respuestas
      </p>
      <ApexChart type="pie" height={200} options={{ labels }} series={series} />
    </div>
  );
}
