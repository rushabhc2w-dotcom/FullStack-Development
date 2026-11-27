import { useState } from "react";


function MonthlyChart({expenses}){
    const [year,setYear]=useState(
        new Date().getFullYear()
    );

    const months=[
    "JAN", "FEB", "MAR", "APR",
    "MAY", "JUN", "JUL", "AUG",
    "SEP", "OCT", "NOV", "DEC"
    ];

    const monthlyTotals = Array(12).fill(0);
    expenses.forEach((expense)=>{
        const[expenseYear,month]=expense.date.split("-").map(Number);

        if(
            expenseYear === year && expense.type === "expense"
        ){
            monthlyTotals[month-1]+=expense.amount;
        }
    });

    const maxAmount = Math.max(...monthlyTotals,1);
    const years = [
        ...new Set([
            new Date().getFullYear(),
            ...expenses.map((item)=>
                Number(item.date.split("-")[0])
        )
        ])
    ].sort((a,b)=>b-a);
    return(
        <section className="monthly-chart">
            <div className="chart-header">
                <div>
                    <h3>Monthly Spending Trends</h3>
                    <p>Track your monthly expenses </p>
                </div>
                <select value={year} onChange={(e)=>
                    setYear(Number(e.target.value))
                }>
                    {years.map((item)=>(
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
           <div className="chart-bars">

        {months.map((month, index) => {

          const height =
            (monthlyTotals[index] / maxAmount) * 100;

          return (
            <div className="chart-column" key={month}>

              <div className="bar-container">

                <div
                  className={`chart-bar ${
                    monthlyTotals[index] === maxAmount
                      ? "highlight-bar"
                      : ""
                  }`}
                  style={{
                    height: `${height}%`
                  }}
                  title={`${month}: ₹${monthlyTotals[index].toFixed(2)}`}
                ></div>

              </div>

              <span>{month}</span>

            </div>
          );

        })}

      </div>

    </section>
  );
}

export default MonthlyChart