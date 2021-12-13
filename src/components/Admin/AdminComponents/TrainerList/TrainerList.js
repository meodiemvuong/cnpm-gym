import React from 'react'
import { TrainerElement } from './../../../'
import './TrainerList.css'


function TrainerList() {
    return (
        <div className="trainer-list-wrapper">
            <div className="trainer-list-header">
                <h1 className="trainer-heading">Huấn luyện viên</h1>
                <button className="trainer-add-btn">Thêm</button>
            </div>
            <div className="row">
                <TrainerElement />
                
            </div>
        </div>
    )
}

export default TrainerList
