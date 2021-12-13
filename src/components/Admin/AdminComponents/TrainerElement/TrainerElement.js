import React from 'react'
import { Link } from 'react-router-dom'
import './TrainerElement.css'

function TrainerElement() {
    var id = 1;
    return (
        <div className="col l-3 m-4 c-6">
            <Link to={`detail/${id}`} className="trainer-link">
                <div className="trainer-wrapper">
                    <div className="trainer-infor">
                        <div className="trainer-name">Lê Thanh Bình</div>
                        <div className="trainer-age">20 tuổi</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TrainerElement
