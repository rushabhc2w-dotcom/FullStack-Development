

function ExpenseCard({
    title,
    amount,
    icon:Icon,
    color,
    background
}){
    return(
        <div className="expense-card">
            <div className="expense-card-header">
                <p>{title}</p>
                <div className="expense-card-icon" style={
                    {
                        color:color,
                        backgroundColor:background
                    }
                }>
                    <Icon size={22}/>
                </div>
            </div>
            <h2>
                ₹{amount.toLocaleString("en-IN",{
                    minimumFractionDigits:2,
                    maximumFractionDigits:2
                })}
            </h2>
            <p className="expense-card-description">
                Total expenses
            </p>
        </div>
    )
}

export default ExpenseCard;