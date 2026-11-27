import {
  Pencil,
  Trash2,
  Utensils,
  Bus,
  GraduationCap,
  Clapperboard,
  Wallet,
  Receipt
} from "lucide-react";

const categoryStyles = {
  "Food & Dining": {
    icon: Utensils,
    color: "#ea580c",
    background: "#fff1e5"
  },
  "Travel": {
    icon: Bus,
    color: "#2563eb",
    background: "#dbeafe"
  },
  "Tuition & Fees": {
    icon: GraduationCap,
    color: "#9333ea",
    background: "#f3e8ff"
  },
  "Entertainment": {
    icon: Clapperboard,
    color: "#db2777",
    background: "#fce7f3"
  },
  "Income": {
    icon: Wallet,
    color: "#0c9e6b",
    background: "#d5eee5"
  }
};

function TransactionTable({
  expenses,
  onEdit,
  onDelete
}) {

  return (
    <div className="table-container">

      <table className="transaction-table">

        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant / Details</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {expenses.length === 0 ? (

            <tr>
              <td colSpan={5} className="empty-table">
                No transactions found
              </td>
            </tr>

          ) : (

            expenses.map((expense) => {

              const category =
                categoryStyles[expense.category] || {
                  icon: Receipt,
                  color: "#64748b",
                  background: "#f1f5f9"
                };

              const Icon = category.icon;

              return (
                <tr key={expense.id}>

                  <td>
                    {new Date(
                      expense.date + "T00:00:00"
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </td>

                  <td>

                    <div className="merchant-details">

                      <div
                        className="merchant-icon"
                        style={{
                          color: category.color,
                          backgroundColor:
                            category.background
                        }}
                      >
                        <Icon size={18} />
                      </div>

                      <span>{expense.title}</span>

                    </div>

                  </td>

                  <td>

                    <span
                      className="category-tag"
                      style={{
                        color: category.color,
                        backgroundColor:
                          category.background
                      }}
                    >
                      {expense.category}
                    </span>

                  </td>

                  <td
                    className={
                      expense.type === "income"
                        ? "income-amount"
                        : "expense-amount"
                    }
                  >
                    {expense.type === "income" ? "+" : "-"}
                    ₹{expense.amount.toLocaleString(
                      "en-IN",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      }
                    )}
                  </td>

                  <td>

                    <div className="transaction-actions">

                      <button
                        className="edit-button"
                        onClick={() => onEdit(expense)}
                        title="Edit expense"
                        aria-label="Edit expense"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => onDelete(expense.id)}
                        title="Delete expense"
                        aria-label="Delete expense"
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>

                  </td>

                </tr>
              );

            })

          )}

        </tbody>

      </table>

    </div>
  );
}

export default TransactionTable;