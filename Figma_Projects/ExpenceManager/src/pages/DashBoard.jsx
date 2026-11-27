import { Utensils, Bus, GraduationCap, Clapperboard } from "lucide-react";

import ExpenseCard from "../components/ExpenceCard";
import MonthlyChart from "../components/MonthlyChart";
import TransactionTable from "../components/TransactionTable";

import "../styles/Dashboard.css";

function Dashboard({ expenses, search, onEdit, onDelete, setActivePage }) {
  const categories = [
    {
      title: "Food & Dining",
      icon: Utensils,
      color: "#ea580c",
      background: "#fff1e5",
    },
    {
      title: "Travel",
      icon: Bus,
      color: "#2563eb",
      background: "#dbeafe",
    },
    {
      title: "Tuition & Fees",
      icon: GraduationCap,
      color: "#9333ea",
      background: "#f3e8ff",
    },
    {
      title: "Entertainment",
      icon: Clapperboard,
      color: "#db2777",
      background: "#fce7f3",
    },
  ];
  const calculateTotal = (category) => {
    return expenses
      .filter(
        (expense) =>
          expense.category === category && expense.type === "expense",
      )
      .reduce((total, expense) => total + expense.amount, 0);
  };
  const filteredExpenses = expenses
    .filter((expense) => {
      const searchValue = search.toLowerCase().trim();

      return (
        expense.title.toLowerCase().includes(searchValue) ||
        expense.category.toLowerCase().includes(searchValue)
      );
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  const recentExpenses = filteredExpenses.slice(0, 5);
  return (
    <div className="dashboard-page">
        <div className="expense-cards">
            {
                categories.map((category)=>(
                    <ExpenseCard
                    key={category.title}
                    title={category.title}
                    amount={calculateTotal(category.title)}
                    icon={category.icon}
                    color={category.color}
                    background={category.background}/>
                ))
            }
        </div>
        <MonthlyChart expenses={expenses} />

      {/* Recent Transactions */}

      <section className="recent-transactions">

        <div className="transactions-heading">

          <h3>Recent Transactions</h3>

          <button
            className="view-all-button"
            onClick={() => setActivePage("Transactions")}
          >
            View All
          </button>

        </div>

        <TransactionTable
          expenses={recentExpenses}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      </section>

    </div>
  )
}

export default Dashboard
