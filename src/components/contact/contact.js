import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Contact() {
const [data,SetData] = useState()

  useEffect(()=>{
    axios.get('https://reqres.in/api/unknown')
    .then(response=>{
      console.log(response)
      SetData(response.data.data)
    })
    .catch(error=>console.log(error))
  },[])

  const onSortHandle = () => {
    const dataCopy = data.sort((a, b) =>{
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
  });
    const dataData = [...dataCopy]
    SetData(dataData)
    console.log({dataData})
  }

  return (
    <div>
      {console.log(data)}
      <table>
        <thead>
          <th>Name</th>
          <th>Year</th>
        </thead>
        <tbody>
         {data?.map((item) => {
         return <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.year}</td>
                </tr>
              })}
        </tbody>
      </table>
      <button onClick={onSortHandle}>Button</button>
    </div>
  )
}

export default Contact
