import React from 'react'

import { FaTrashAlt } from "react-icons/fa"

const Content = ({items,handleCheck,handleDelete}) => {

  
  return (
    <main>
      {(items.length)?(<ul> 
        {items.map((item)=>(
      <li className='item' key={item.id}>
       <input
       type='checkbox'
       onChange={()=>handleCheck(item.id)}
       checked={item.checked}
       />
       
       <label
       style={(item.checked)?{textDecoration:'line-throgh'}:null}
        onDoubleClick={()=>handleCheck(item.id)}>
        {item.item}
       </label>

      <FaTrashAlt 
      role='button'
      tabIndex='0'
  onClick={()=>handleDelete(item.id)}
      />
      </li>
        ))}
 
      </ul>
):(<p style={{margintop:'2rem'}}>Your list is empty</p>)
}
      
</main>
  )
}

export default Content