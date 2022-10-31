import "./Expenses.css";
import React from "react";
import Expenseitem from "./Expenseitem";
const Expenses = props => {
  
    return(
        <div>
        {  props.items.map( expense =>(
<Expenseitem body={expense.body} title={expense.title} userId = {expense.userId}/>
    ))}

        </div>
    )
}

export default Expenses;