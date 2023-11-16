import React, { useState } from 'react'
import './style.css'

function PriceList() {
    const[price,setPrice]=useState('')
    const [list,setList]=useState([]);
    const [total,setTotal]=useState(0)
    const [profit,setProfit]=useState(0)
    const handleSubmit=()=>{
        if(price>=100){
            const updatedList=[...list,price];
            setList(updatedList)
            setTotal((prev)=>prev+parseFloat(price))
            setProfit((prev)=>prev+parseFloat(price)-100)
        }
    }
  return (
    <div className='container'>

        <div className='top'>

            <div className='inputdiv'>
            <label htmlFor="">Sale Price * <br /> 
                <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)}/></label><br/><br/>        
             </div>
        <button  onClick={handleSubmit}>Submit</button>
        </div>

        <div className='down' >
        <h2>Output Result</h2>
            <div className='calculationunderdiv'>
            <p className='prices'>Sale Price</p>
        <ul>
        {
            list.map((e)=>{
                return (
                    <li>{e}</li>
                )
            })
        }
        </ul>
        <p className='prices'>Total Price</p>
        {total}
        <p className='prices'>Total Profit</p>
        {profit}
            </div>
        </div>
    </div>
  )
}

export default PriceList

