import React from 'react'
export default function List()
{
const college=[{id:1,name:"moni",age:20},
               {id:2,name:"suji",age:20},
              {id:3,name:"sri",age:20}]
              const display=college.map((col)=><li key={col.id}>{col.name}{col.age}</li>)
              return(
                <div style={{backgroundColor:"whitesmoke"}}>
                    <h1>List of Students</h1>
{display}
                </div>
              )
}