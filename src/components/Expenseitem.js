import React from "react";
import "./Expenseitem.css";
const Expenseitem = props => {  //yha pr props me data aarha hai app.js se 
//     const [newTitle,setNewTitle]=useState("");
//   const [title,setTitle]=useState(props.title);

//   const clickhandler =()=>{
//     setTitle(newTitle);
//   }

//   const changehandler=(e)=>{
//   setNewTitle(e.target.value);
//   }
return(
    <div className="expense-item">
   
    <div className="expense-item-description">
        <div className="titletwo">{props.body}</div>
        <div className="titletwo">{props.title}</div>
        <div className="expense-item-price">{props.userId}</div>
        {/* <input type="text" value={newTitle} onChange={changehandler}></input>
        <button onClick={clickhandler}>change title</button> */}
    </div>
    </div>
)
}

export default Expenseitem;