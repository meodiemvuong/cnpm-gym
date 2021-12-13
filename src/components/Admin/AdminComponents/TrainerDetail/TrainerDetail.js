import React from 'react'
import './TrainerDetail.css'
import { useParams } from 'react-router-dom'
import avatar from './../../../../store/imgs/trainer1.jpg'
import Timetablee from './../../../Timetablee.js'
import Trainer from './../../../Trainer/Trainer.js'

function TrainerDetail() {
    const id = useParams();
    return (
        <div className="trainer-detail-wrapper">
            <div className="trainer-detail-header">
                <h1 className="trainer-heading">Huấn luyện viên</h1>
                <button className="trainer-add-btn">Thêm</button>
            </div>
            <>
            
            <Trainer />
            
        </>
            <div className="trainer-detail-content">
                {/* <div className="row"> */}
                    {/* <div className="col l-4">
                        <div className="trainer-avatar"
                            style={{
                                backgroundImage: `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                        </div>
                    </div> */}
                    {/* <div className="col l-8">
                        <div className="trainer-detail-infor">
                            <h2 className="trainer-name">
                                <span className="trainer-name-title">Họ và tên:</span>
                                Lê Thanh Bình
                            </h2>
                            <h2 className="trainer-sex">
                                <span className="trainer-sex-title">Giới tính:</span>
                                Nam
                            </h2>
                            <h2 className="trainer-birthday">
                                <span className="trainer-birthday-title">Ngày sinh:</span>
                                16/09/2001
                            </h2>
                            <h2 className="trainer-phone">
                                <span className="trainer-phone-title">Số điện thoại:</span>
                                0856174003
                            </h2>
                            <h2 className="trainer-height">
                                <span className="trainer-description">Mô tả:</span>
                                Đã có 5 năm kinh nghiệm trong việc huấn luyện viên thể hình
                            </h2>
                            <h2 className="trainer-account">
                                <span className="trainer-account-title">Tài khoản:</span>
                                binh1
                            </h2>
                            <h2 className="trainer-password">
                                <span className="trainer-password-title">Mật khẩu:</span>
                                1
                            </h2>
                            
                        </div>
                    </div> */}
                {/* </div> */}

                <div className="row">
                    {/* <div className="trainer-schedule">
                        <h2 className="trainer-schedule-heading">Lịch huấn luyện</h2>
                        <table className="schedule-table">
                            <thead className="schedule-table-header">
                                <tr >
                                    <th>Thứ</th>
                                    <th>Thời gian</th>
                                    <th>Học viên</th>
                                    <th>Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody className="schedule-table-body">
                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Lê Thanh Bình</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Lê Thanh Bình</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Lê Thanh Bình</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Lê Thanh Bình</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Lê Thanh Bình</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>

                                <tr>
                                    <td rowspan="3">Thứ 2</td>
                                    <td rowspan="3">8h-12h</td>
                                    <td>Lê Thanh Bình</td>
                                    <td rowspan="3">Ghi chú</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>
                                <tr>
                                    <td>Lê Thanh Bình</td>
                                </tr>



                            </tbody>
                        </table>

                    </div> */}

                    

                    {/* <div className="trainer-students">
                        <h2 className="trainer-students-heading">Danh sách học viên</h2>
                        <table className="students-table">
                            <thead className="students-table-header">
                                <tr >
                                    <th>Thứ tự</th>
                                    <th>Họ và tên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Số điện thoại</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="students-table-body">
                                <tr>
                                    <td>1</td>
                                    <td>Lê Thanh Bình</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0856174003</td>
                                    <td><button>Xóa</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Lê Thanh Bình</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0856174003</td>
                                    <td><button>Xóa</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Lê Thanh Bình</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0856174003</td>
                                    <td><button>Xóa</button></td>
                                </tr><tr>
                                    <td>4</td>
                                    <td>Lê Thanh Bình</td>
                                    <td>29</td>
                                    <td>Nam</td>
                                    <td>0856174003</td>
                                    <td><button>Xóa</button></td>
                                </tr>




                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default TrainerDetail
