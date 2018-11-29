import React from 'react';
import  DestinationItem from './destinationitem'

const Liste=(props)=>{
    return(
        props.news.map((el,i)=>{ return <DestinationItem item1 ={el}  key={i} />

        })
    )
}
export default  Liste;