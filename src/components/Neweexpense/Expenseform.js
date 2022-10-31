import React, { useState } from "react";
import "./Expenseform.css";

const Expenseform = (props) => {
const [title,setstatetitle]=useState('');
const [userId,setStateamount]=useState('');
const [body,setStatedate]=useState('');

    const onchangetitle=(event)=>{
setstatetitle(event.target.value);
    }
    const onchangenumber=(event)=>{
        setStateamount(event.target.value);
    }
    const onchangedate=(event)=>{
        setStatedate(event.target.value);
    }

    const submitformdata = (event) =>{
event.preventDefault();

const newexpensedata = {
    title: title,
    userId :userId,
    body : body
}
console.log(newexpensedata);
props.onsaveexpensedata(newexpensedata);// parent se jo data pass kiya the child me vo is onsaveexpensedata main hai 
setStateamount("")
setStatedate("")
setstatetitle("")
    }
  return <form onSubmit={submitformdata}>
    <div className="new-exp-col">
      <div className="new-expenxe-control">
    <label>Title</label>
    <input type="text" id="" value={title} onChange={onchangetitle}/>
  </div>
  <div className="new-expenxe-control">
    <label>Amount</label>
    <input type="number" min="0.01"  step="0.01" id="" value={userId} onChange={onchangenumber}/>
  </div>
  <div className="new-expenxe-control">
    <label>Date</label>
    <input type="text" id="" value={body} onChange={onchangedate}/>
  </div>
  <div className="new-expenxe-control">
    <button type="submit">Add Expense</button>
</div>
</div>

  </form>;
};

export default Expenseform;
