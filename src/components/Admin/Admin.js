import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../store/imgs/logo.png'
import { Routes, Route } from 'react-router-dom'
import { TrainerList, CustomerList, Category, AdminWelcome, TrainerDetail, CustomerDetail } from './../'
import Notfoundpage from '../../pages/Notfoundpage'
import './Admin.css'
import authAPI from '../../api/authAPI'

function Admin() {
    return (
        <div className="admin-wrapper">
            <div className="admin-header-wrapper">
                <div className="grid wide">
                    <div className="admin-header">
                        <div className="admin-header-logo">
                            <Link to='/'><img src={logo} alt="" className="logo-img" /></Link>
                            <Link to='/' className="logo-name">RUBYGYM</Link>
                        </div>
                        <div className="admin-header-heading">
                            Quản lý
                        </div>
                        <div
                            className="admin-header-logout"
                            onClick={() => { authAPI.logout(); }}
                        >
                            Đăng xuất
                        </div>
                    </div>
                </div>
            </div>
            <main className="admin-main">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-2 m-0">
                            <Category />
                        </div>
                        <div className="col l-10 m-12">
                            <div className="admin-content">
                                <Routes>
                                    <Route path="trainers" element={<TrainerList />} />
                                    <Route path="trainers/detail/:id" element={<TrainerDetail />} />
                                    <Route path="customers" element={<CustomerList />} />
                                    <Route path="customers/detail" element={<CustomerDetail />} />
                                    <Route path="" element={<AdminWelcome />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default Admin
