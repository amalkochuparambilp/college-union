import React from "react";
import Title from "../Components/Title/Title";

const ErrorPage = () => {
    return (
        <div>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Title title={"404"} subTitle={"NOT FOUND"} />
            </div>
        </div>
    )
}

export default ErrorPage