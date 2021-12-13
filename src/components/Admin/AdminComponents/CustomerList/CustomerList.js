import React from 'react'
import { CustomerDetail } from '../../..'

import './CustomerList.css'


function CustomerList() {
    return (
        <div className="customer-list-wrapper">
            <h1 className="customer-heading">Học viên</h1>
            <div className="">
                <CustomerDetail/>
            </div>
        </div>
    )
}

export default CustomerList
