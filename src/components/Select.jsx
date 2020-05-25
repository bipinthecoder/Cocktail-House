import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Select =({array,selected,handler,val})=>{
    return(
        <select className={`custom-select bg-info text-light mr-2`}  key={uuidv4()} customName={selected} value={val.select} onChange={(e)=>handler(e,selected)} name='select'>
            <option  key={uuidv4()} style={{textAlign:"center"}} selected>{selected}</option>
            {array.map((item)=>(
                <option key={uuidv4()} value={item} style={{textAlign:"center"}}>{item}</option>
            ))}
        </select>
    )
}


export default Select;




