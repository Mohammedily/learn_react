import React from 'react'
import {Redirect, Route} from "react-router-dom"


const Screen = ({component: Component, ...rest}) => {
return(
<Route 
{...rest}
render={
    (props)  => localStorage.getItem("id") ? (
      <Component {...props}/>
    ) : (
        <Redirect to="/"/>
    )
}
/>
)
}

export default Screen;