import React from "react";
import Title from "../Components/Title/Title";

const ErrorPage = () => {
    return(
    <div style={{height: '100vh',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <Title title={"404"} subTitle={"NOT FOUND"}/>
    </div>
    )
}

export default ErrorPage