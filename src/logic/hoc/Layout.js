import React from 'react';
import Header from "../../components/mainSearch/MainSearch";




export const Layout =  (props)=>{
    return(
        <div className="layoutBlock">
            <Header />
            {props.children}
        </div>

    )
}