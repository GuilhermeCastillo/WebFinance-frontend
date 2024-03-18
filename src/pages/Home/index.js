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

  const dataBalance = [
    ["Mes", "Receitas", "Despesas"],
    ["Abril", 1000, 400],
    ["Março", 1000, 400],
    ["Abril", 2000, 4000],
  ];

  const optionsBalance = {
    chart: {
      title: "Balanço Mensal",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
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
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={dataBalance}
        options={optionsBalance}
      />
    </div>
  );
};

export default Home;
