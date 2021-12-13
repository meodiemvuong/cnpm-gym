import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import avatar from './../../store/imgs/trainer1.jpg'

import styles from './CustomerDetailInfor.module.css'

function CustomerDetailInfor() {
    return (
       <div classname="grid" >
        <div className="row">
            
            <div className="col l-5 m-0 c-0">
                <div className={clsx(styles.avatar)}
                    style={{
                        backgroundImage: `url(${avatar})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                </div>
            </div>
            <div className="col l-7 m-12 c-12">
                <div className={clsx(styles.infor)}>
                    <div className={clsx(styles.inforWrapper)}>
                        <div className={clsx(styles.inforContent)}>
                            <h3 className={clsx(styles.inforLabel)}>Họ tên</h3>
                            <input
                                style={{ pointerEvents: 'none' }}
                                type="text"
                                className={clsx(styles.inforText)}
                                value="Nguyễn Quang Dũng"
                                id='trainer-name' />
                        </div>
                        <label htmlFor='trainer-name' className={clsx(styles.inforBtn)}>Chỉnh sửa</label>
                    </div>

                    <div className={clsx(styles.inforWrapper)}>
                        <div className={clsx(styles.inforContent)}>
                            <h3 className={clsx(styles.inforLabel)}>Ngày sinh</h3>
                            <input
                                style={{ pointerEvents: 'none' }}
                                type="date"
                                className={clsx(styles.inforText)}
                                value='2020-12-11'
                                onChange={(e) => {}}
                                id='trainer-gender' />
                        </div>
                        <label htmlFor='trainer-gender' className={clsx(styles.inforBtn)}>Chỉnh sửa</label>
                    </div>

                    <div className={clsx(styles.inforWrapper)}>
                        <div className={clsx(styles.inforContent)}>
                            <h3 className={clsx(styles.inforLabel)}>Số điện thoại</h3>
                            <input
                                style={{ pointerEvents: 'none' }}
                                type="text"
                                className={clsx(styles.inforText)}
                                value="0123456789"
                                id='trainer-phone' />
                        </div>
                        <label htmlFor='trainer-phone' className={clsx(styles.inforBtn)}>Chỉnh sửa</label>
                    </div>

                    <div className={clsx(styles.inforWrapper)}>
                        <div className={clsx(styles.inforContent)}>
                            <h3 className={clsx(styles.inforLabel)}>Tài khoản</h3>
                            <input
                                style={{ pointerEvents: 'none' }}
                                type="text"
                                className={clsx(styles.inforText)}
                                value="dungnq123"
                                id='trainer-account' />
                        </div>
                        <label htmlFor='trainer-account' className={clsx(styles.inforBtn)}>Chỉnh sửa</label>
                    </div>

                    <div className={clsx(styles.inforWrapper)}>
                        <div className={clsx(styles.inforContent)}>
                            <h3 className={clsx(styles.inforLabel)}>Chiều cao</h3>
                            <input
                                style={{ pointerEvents: 'none' }}
                                type="text"
                                className={clsx(styles.inforText)}
                                value="173cm"
                                id='trainer-account' />
                        </div>
                        <label htmlFor='trainer-account' className={clsx(styles.inforBtn)}>Chỉnh sửa</label>
                    </div>

                    <div className={clsx(styles.inforWrapper)}>
                        <div className={clsx(styles.inforContent)}>
                            <h3 className={clsx(styles.inforLabel)}>Cân nặng</h3>
                            <input
                                style={{ pointerEvents: 'none' }}
                                type="text"
                                className={clsx(styles.inforText)}
                                value="60kg"
                                id='trainer-account' />
                        </div>
                        <label htmlFor='trainer-account' className={clsx(styles.inforBtn)}>Chỉnh sửa</label>
                    </div>

                    {/* <div className={clsx(styles.inforWrapper)}>
                        <div className={clsx(styles.inforContent)}>
                            <h3 className={clsx(styles.inforLabel)}>Mật khẩu</h3>
                            <input
                                style={{ pointerEvents: 'none' }}
                                type="password"
                                className={clsx(styles.inforText)}
                                value="dungnq123"
                                id='trainer-password' />
                        </div>
                        <label htmlFor='trainer-password' className={clsx(styles.inforBtn)}>Chỉnh sửa</label>
                    </div> */}

                    {/* <div className={clsx(styles.inforWrapper)}>
                        <div className={clsx(styles.inforContent)}>
                            <h3 className={clsx(styles.inforLabel)}>Xác nhận mật khẩu</h3>
                            <input
                                style={{ pointerEvents: 'none' }}
                                type="password"
                                className={clsx(styles.inforText)}
                                value="dungnq123"
                                id='trainer-password-auth' />
                        </div>
                        <label htmlFor='trainer-password-auth' className={clsx(styles.inforBtn)}>Chỉnh sửa</label>
                    </div> */}
                    <button className={clsx(styles.inforSave)}>Lưu lại</button>
                </div>
            </div>

           </div>
        </div>
    )
}

export default CustomerDetailInfor
