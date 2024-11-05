import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarChartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          product_title: item.product_title,
          price: item.price,
        }));
        setData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex items-center justify-center pt-7">
      <div className="w-full p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Product Prices
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart width={800} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
            <XAxis
              dataKey="product_title"
              stroke="#4a5568"
              tick={{ fontSize: 10 }}
              angle={-45}
              textAnchor="end"
              interval={0} // Ensures every label is shown
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#4a5568" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartPage;
