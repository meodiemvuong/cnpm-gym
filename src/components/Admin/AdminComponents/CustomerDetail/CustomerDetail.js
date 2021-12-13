import React from 'react'
import clsx from 'clsx'
import avatar from './../../../../store/imgs/trainer1.jpg'
import styles from './CustomerDetail.module.css'

function CustomerDetail() {
    return (
        <div className="row">
            <div className="col l-4">
                <div className={clsx(styles.avatar)}>
                    <img src={avatar} alt="" className={clsx(styles.avatarImg)} />
                    <div className={clsx(styles.edit)}>
                        <i class="fas fa-edit"></i>
                        Chỉnh sửa thông tin
                    </div>
                    <div className={clsx(styles.delete)}>
                        <i class="fas fa-trash-alt"></i>
                        Xóa hội viên
                    </div>
                </div>
            </div>
            <div className="col l-8">
                <div className={clsx(styles.infor)}>
                    <div className={clsx(styles.inforWrapper)}>
                        <h1 className={clsx(styles.inforLabel)}>Họ tên</h1>
                        <input type="text" className={clsx(styles.inforText)} />
                    </div>
                    <div className={clsx(styles.inforWrapper)}>
                        <h1 className={clsx(styles.inforLabel)}>Giới tính</h1>
                        <input type="text" className={clsx(styles.inforText)} />
                    </div>
                    <div className={clsx(styles.inforWrapper)}>
                        <h1 className={clsx(styles.inforLabel)}>Ngày sinh</h1>
                        <input type="text" className={clsx(styles.inforText)} />
                    </div>
                    <div className={clsx(styles.inforWrapper)}>
                        <h1 className={clsx(styles.inforLabel)}>Số điện thoại</h1>
                        <input type="text" className={clsx(styles.inforText)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetail
