import Resume from "../../components/Resume";

import React from "react";
import { Chart } from "react-google-charts";

const Home = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "Despesas por categoria: ",
  };

  return (
    <div>
      <Resume />
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Home;
