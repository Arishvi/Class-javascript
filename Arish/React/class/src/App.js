import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react'


function App() {
  const[items,setItems]=useState(
    [
      {id:1,
        checked:true,
        item:"pratice Codeing"
      },

      {id:2,
        checked:false,
        item:"play cricket"
      },

      {id:3,
        checked:false,
        item:"Read about Ai"
      }
    ]);


    const handleCheck=(id)=>{
     const listItems=items.map((item)=>item.id===id ? {...item,checked:!item.checked}:item)
     setItems(listItems)
     localStorage.setItem('todo_list',JSON.stringify(listItems))
    }
    
    const handleDelete=(id)=>{
      const listItems=items.filter((item)=>item.id!==id)
      setItems(listItems)
      localStorage.setItem('todo_list',JSON.stringify(listItems))

    }
return(
  <div>
  <Header title='MookiMa'/>
  <Content 
  items={items}
  handleCheck={handleCheck}
  handleDelete={handleDelete}

  />
  <Footer
  lenght={items.length}
  />



  </div>

)
}

export default App;
 

<h1 className=''></h1>