import { Chart } from "react-google-charts";

const Dashboard = () => {
  const dataPie = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const optionsPie = {
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
      subtitle: "receitas e despesas mensal",
    },
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={dataPie}
        options={optionsPie}
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

export default Dashboard;
