import React from "react";
import style from "./MainStyles.module.css";

const Footer = ()=>{
    return(
        <div className="row" style={{height:300}}>
            <div className="col-3"></div>
            <div className="col-6">
                <h5 className={`text-center ${style.footerHead}`} style={{marginTop:100}}>Get Latest Updates</h5>
                <p></p>
                <div className={`text-center d-flex flex-column bd-highlight mb-3">`}>
                    <input placeholder="Enter your Mail" style={{borderRadius:"50px",textAlign:"center"}}></input>
                    <p></p>
                    <button className={`btn btn-success w-50 mx-auto`}>Send</button>
                </div>
                <div className={`mb-5 text-center`}>
                © 2020 Copyright:CockTail House
                </div>
            </div>
            <div className="col-3"></div>
        </div>

    )
}


export default Footer;