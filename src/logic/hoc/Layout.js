import React from 'react';
import Header from "../../components/header/Header";




export const Layout =  (props)=>{
    return(
        <div className="layoutBlock">
            <Header />
            {props.children}
        </div>

    )
}