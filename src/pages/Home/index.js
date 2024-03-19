import React, { useEffect, useState } from "react";

import Resume from "../../components/Resume";
import Form from "../../components/Form";

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
      subtitle: "receitas e despesas mensal",
    },
  };

  const dataT = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    dataT ? JSON.parse(dataT) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <div>
      <Resume income={income} expense={expense} total={total} />

      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />

      {/* <Chart
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
      /> */}
    </div>
  );
};

export default Home;
