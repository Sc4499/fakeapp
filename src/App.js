import React, { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import Newexpense from "./components/Neweexpense/Newexpense";
let expendedata= [{
    id : '1e',
    titletwo : "starbucks",
    title : 'coffee',
    userId: '$400'
},
{   id: '2e',
    titletwo : "Mcdee",
    title : 'burgur',
    userId : '$300'
},
{   id:'3e',
    titletwo : "pizzahut",
    title : 'pizza',
    userId : '$500'
},
{   id:'4e',
    titletwo :"pvR",
    title : 'Movie',
    userId  : '$700'
}];

const App=()=>{
   const[expenses,setExpenses]=useState(expendedata);
   useEffect( ()=>{
fetch("https://jsonplaceholder.typicode.com/posts").then(res=>{
    return res.json();
}).then(data=>{
    setExpenses(data);
})
   },[])

    const returnexpense = (getdatafromnewexpense) => {
const updateexpense = [getdatafromnewexpense, ...expenses]
    setExpenses(updateexpense);

    }

    return (<>
    <Expenses items={expenses}/>
    <Newexpense senddatatonewexpense = {returnexpense}/>
    </>)
}

export default App;