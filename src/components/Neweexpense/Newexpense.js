import React from "react";
import Expenseform from "./Expenseform";
import "./Newexpense.css";

const Newexpense = (props) => {         
const getformdata = (getdata) =>{  // child ka data use krne ke liye parent me ek function bnao i.e getformdata() ,and if form ko neeche <Expenseform></Expenseform> me as a prop pass kr do
const addexpenseid ={
    ...getdata,
    id:Math.random().toString()
}
props.senddatatonewexpense(addexpenseid)

}

    return(
<div className="new-expense"> 
<Expenseform onsaveexpensedata = {getformdata}/> 
</div>
    )
}

export default Newexpense;