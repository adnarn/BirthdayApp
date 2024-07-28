import React, {useState} from 'react'
import axios from 'axios'




const Contents = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')



const Submit = (e)=>{
          e.preventDefault();
          axios.post("http://localhost:4000/", {name,date})
          .then(result => console.log(result))
          .catch(err => console.log(err))

          window.location.reload()

}

  return (
    <>
 <form className='form-container' onSubmit={Submit}>
    <div className="form-elements">
     <label htmlFor="Name">Name: </label>
    <input 
                  type="text" 
                  id='Name'  
                  value={name}
                   onChange={(e)=>setName(e.target.value)}
             />
      </div>

      <div className="form-elements">
                    <label htmlFor="Date">D.O.B: </label>
                    <input 
                            type="date" 
                            id='Date'
                            value={date}
                            onChange = {(e)=> setDate(e.target.value)}
                    />

      </div>

        <button className='submit-button' type="submit">
             Submit
        </button>

 </form>
 </>
  )
}

export default Contents