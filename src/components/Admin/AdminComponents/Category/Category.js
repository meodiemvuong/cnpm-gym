import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

function Category() {
    let [trainerCustomer, setTrainerCustomer] = useState(false);
    return (
        <div className="admin-category">
            <ul className="manage-list">
                <li className="manage-item" onClick={() => setTrainerCustomer(!trainerCustomer)}>
                    {!trainerCustomer && <i class="fas fa-caret-right left-icon"></i>}
                    {trainerCustomer && <i class="fas fa-caret-down down-icon"></i>}
                    Quản lý tài khoản
                </li>
                {trainerCustomer &&
                    <li className="manage item">
                        <div className="trainer-customer">
                            <Link to="trainers"><h2 className="manage-account-trainer">Huấn luyện viên</h2></Link>
                            <Link to="customers"><h2 className="manage-account-customer">Học viên</h2></Link>
                        </div>
                    </li>
                }
                <li className="manage-item">Sự kiện</li>
                <li className="manage-item">Tạo blog</li>
                <li className="manage-item">Sản phẩm</li>
            </ul>
        </div>
    )
}

export default Category
