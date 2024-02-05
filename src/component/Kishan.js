import React from 'react'

export default function Kishan(props) {
  return (
    <div>
       <center> <h2>{props.title}  {props.surname}</h2></center>
    </div>
  )
}
// Kishan.propTypes={title:propTypes.string.isRequriedgu,
//                   surname:propTypes.string}
Kishan.defaultProps={
  title:'kishan',
  surname:"vishwakarma"
}