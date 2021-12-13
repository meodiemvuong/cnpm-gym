import React from "react"
import { Header, CustomerInfor, Footer, Timetablee } from "../components";
import {  CustomerDetailInfor  } from "../components"
function CustomerPage() {
    return (
        <>
            <Header />
            <div className="grid wide">
                <div className="row">
                    <div className="col l-10 l-o-1">
                        <div 
                            style={{
                                marginTop: '90px'
                            }}
                            className="wrapper">
                            <CustomerInfor />
                            
                            {/* <CustomerDetailInfor /> */}
                        </div>
                    </div>

                    
                    
                </div>
                <div classname="">
                            <Timetablee/>
                    </div>
            </div>
            
            <Footer />
        </>
    )
}
export default CustomerPage