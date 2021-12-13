// import React from "react"
// import { Header } from ".."
// import './Trainer.css'
// import traineravatar from '../../store/imgs/trainer1.jpg'
// import { Footer } from ".."
// import { useState } from "react"
import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import avatar from './../../store/imgs/avatar.jpg'
import { Popup } from './../'
import userProfileAPI from './../../api/userProfileAPI'

import styles from './Trainer.module.css'
import Timetablee from '../Timetablee'



function Trainer(){
    let [isPTag, setPTag] = useState(true);

    let [nameUpdating, setNameUpdating] = useState(false);
    let [phoneUpdating, setPhoneUpdating] = useState(false);
    let [birthdayUpdating, setBirthdayUpdating] = useState(false);
    // let [addressUpdating, setAddressUpdating] = useState(false);
    let [sexUpdating, setsexUpdating] = useState(false);
    let[descriptionUpdating, setDescriptionUpdating] = useState(false);
    // let [registerUpdating, setRegisterUpdating] = useState(false);
    // let [outdateUpdating, setOutdateUpdating] = useState(false);
    let [showPopup, setShowPopup] = useState(false);

    let nameRef = useRef(null);
    let phoneRef = useRef(null);
    let birthdayRef = useRef(null);
    let sexRef = useRef(null);
    // let addressRef = useRef(null);
    let descriptionRef = useRef(null);
    let outdateRef = useRef(null);

    let [userProfile, setUserProfile] = useState({
        id: 1,
        name: 'Thanh Binh',
        phone: '0856174003',
        birthday: '16/09/2001',
        sex: 'Nam',
        // address: '236 Hoang Quoc Viet',
        description: 'Tôi có 2 năm kinh nghiệm chơi LOL',
        // expire_at: '1/1/2022',
        avatar_url: 'url'
    });
    let [profileOnChange, setProfileOnChange] = useState({
        name: userProfile.name,
        phone: userProfile.phone,
        birthday: userProfile.birthday,
        sex: userProfile.sex,
        // address: userProfile.address,
        description: userProfile.description,
        // expire_at: userProfile.expire_at,
        avatar_url: userProfile.avatar_url
    })
    const handleEdit = () => {
        setPTag(false);
    }
    const handleCancel = () => {
        setPTag(true);
    }

    // Để show Popup sau khi cập nhật thành công
    // useEffect(() => {
    //     if (showPopup) {
    //         var id = setTimeout(() => {
    //             setShowPopup(prev => !prev);
    //         }, 1000)
    //     }
    //     return () => {
    //         clearTimeout(id);
    //     }
    // }, [showPopup])

    // Lấy profile về
    useEffect(() => {
        (async () => {
            const response = await userProfileAPI.getProfile();
            if (response && response.status && response.status.data) {
                userProfile = { ...response.data.data };
                setUserProfile(userProfile);
            }
        })()
    }, [])

    // Upload Avatar

    const handleUploadAvatar = async (e) => {
        // Upload lên Cloudinary

        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'rubygymimages');

        const response = await fetch('https://api.cloudinary.com/v1_1/dzgdwey0f/image/upload', {
            method: 'POST',
            body: data
        })

        const file = await response.json();
        userProfile = {
            ...userProfile,
            avatar_url: file.secure_url
        }

        //const response = await userProfileAPI.updateAvatar(data)

        setUserProfile(userProfile)
        console.log(file);
        console.log(userProfile)

        //================================================================

        // Upload lên server
        // const file = e.target.files[0];
        // const formData = new FormData();
        // formData.append('File', file);

        // const response = await userProfileAPI.updateAvatar(formData);

        // if (response && response.status && response.data) {
        //     userProfile = {
        //         ...userProfile,
        //         avatar_url: response.data
        //     }
        //     setUserProfile(userProfile);
        // }
        // if (response && !response.status) {
        //     alert(response.message)
        // }
    }


    //Update Profile
    const handleUpdate = async () => {
        setPTag(true);
        setUserProfile({
            name: profileOnChange.name,
            phone: profileOnChange.phone,
            birthday: profileOnChange.birthday,
            sex: profileOnChange.sex,
            // address: profileOnChange.address,
            description: profileOnChange.description,
            expire_at: profileOnChange.expire_at,
            avatar_url: profileOnChange.avatar_url
        })
        console.log(userProfile);
        const response = await userProfileAPI.updateProfile(userProfile);
        if (response && response.status) setShowPopup(prev => !prev);
        if (response && !response.status && response.message) {
            alert(response.message)
        }
    }


    return (
        <div className="grid wide">
                <div className="row">
                    <div className="col l-10 l-o-1">
                        <div 
                            style={{
                                marginTop: '90px'
                            }}
                            className="wrapper">
                            
{/* Thông tin cá nhân */}
            <div className={clsx(styles.inforField)}>
                <h1 className={clsx(styles.inforHeading)}>Thông tin cá nhân</h1>
                <div className="row">

                    {/* Avatar */}
                    <div className="col l-5 m-0 c-0">
                        <div
                            className={clsx(styles.avatar)}
                            style={{
                                backgroundImage: userProfile.avatar_url ?
                                    `url(${userProfile.avatar_url})` :
                                    `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <label
                                htmlFor="avatarChoose"
                                className={clsx(styles.chooseAvatar)}
                            >
                                <i className={clsx(styles.chooseAvatarIcon, "fas fa-camera")}></i>
                            </label>
                            <input
                                type="file"
                                id="avatarChoose"
                                hidden
                                onChange={handleUploadAvatar}
                            />
                        </div>
                    </div>

                    {/* Thông tin */}
                    <div className="col l-7 m-12 c-12">
                        <div className={clsx(styles.infor)}>
                            <div className={clsx(styles.inforWrapper)}>

                                {/* Tên */}
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Họ tên</h3>
                                    {isPTag ? (
                                        <b>{userProfile.name}</b>
                                    ) : (
                                        <input
                                            //readOnly={!nameUpdating}
                                            //ref={nameRef}
                                            type="text"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.name}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    name: e.target.value,
                                                })
                                            }}
                                            id='trainer-name' />
                                    )}
                                </div>
                            </div>

                            {/* Giới tính */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Giới tính</h3>
                                    {isPTag ? (
                                        <b>{userProfile.sex}</b>
                                    ) : (
                                        <select
                                            // disabled={!sexUpdating}
                                            // ref={sexRef}
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.sex}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    sex: e.target.value
                                                })
                                            }}
                                        >
                                            <option>Nam</option>
                                            <option>Nữ</option>
                                        </select>
                                    )}
                                </div>

                            </div>
                            {/* Ngày sinh */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày sinh</h3>
                                    {isPTag ? (
                                        <b>{userProfile.birthday}</b>
                                    ) : (
                                        <input
                                            // readOnly={!birthdayUpdating}
                                            // ref={birthdayRef}
                                            type="date"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.birthday}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    birthday: e.target.value
                                                })
                                            }}
                                            id='trainer-birthday' />
                                    )}
                                </div>

                            </div>

                            {/* Số điện thoại */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Số điện thoại</h3>
                                    {isPTag ? (
                                        <b>{userProfile.phone}</b>
                                    ) : (
                                        <input
                                            // readOnly={!phoneUpdating}
                                            // ref={phoneRef}
                                            type="text"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.phone}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    phone: e.target.value
                                                })
                                            }}
                                            id='trainer-phone' />
                                    )}
                                </div>

                            </div>

                            {/* Địa chỉ */}
                            {/* <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Địa chỉ</h3>
                                    {isPTag ? (
                                        <b>{userProfile.address}</b>
                                    ) : (
                                        <input
                                            // readOnly={!addressUpdating}
                                            // ref={addressRef}
                                            type="text"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.address}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    address: e.target.value
                                                })
                                            }}
                                            id='trainer-address' />
                                    )}
                                </div>

                            </div> */}

                            {/* Mô tả */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Mô tả</h3>
                                    {isPTag ? (
                                        <b>{userProfile.description}</b>
                                    ) : (
                                        <input
                                            // readOnly={!registerUpdating}
                                            // ref={descriptionRef}
                                            type="text"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.description}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    description: e.target.value
                                                })
                                            }}
                                            id='trainer-register' />
                                    )}
                                </div>

                            </div>

                            {/* Ngày hết hạn */}
                            {/* <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày hết hạn</h3>
                                    {isPTag ? (
                                        <b>{userProfile.expire_at}</b>
                                    ) : (
                                        <input
                                            // readOnly={!outdateUpdating}
                                            // ref={outdateRef}
                                            type="date"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.expire_at}
                                            onChange={(e) => {
                                                setProfileOnChange(prev => ({
                                                    ...profileOnChange,
                                                    expire_at: e.target.value
                                                }))
                                            }}
                                            id='trainer-outdate' />
                                    )}
                                </div>
                            </div> */}
                            {isPTag ? (
                                <button onClick={handleEdit}>chỉnh sửa</  button>
                            ) : (
                                <div>
                                    <button onClick={() => {
                                        //setNameUpdating(prev => !prev);
                                        handleUpdate();
                                    }}>Lưu</  button>
                                    <button onClick={handleCancel}>Huỷ</ button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lịch tập luyện */}
            <section className={clsx(styles.contentField)}>
                    
                    
                    <div className="trainer-schedule">
                    <Timetablee />
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
                                    <td rowspan="3">Thứ 3</td>
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
                                    <td rowspan="3">Thứ 4</td>
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
                                    <td rowspan="3">Thứ 5</td>
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
                                    <td rowspan="3">Thứ 6</td>
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
                                    <td rowspan="3">Thứ 7</td>
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
                                    <td rowspan="3">Chủ nhật</td>
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
                        <div className="trainer-students">
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
                    </div>

                    </div>
                </section>

                

            
                        </div>
                    </div>
                </div>
            </div>
    )
}






// function Trainer() {
//     let [isPTag, setPTag] = useState(true);
//     let [trainerState, setTrainerState] = useState({
//         name: 'Thanh Binh',
//         sex: 'nam',
//         date: '16/9/2001',
//         phone: '0856174003',
//         address: '236 Hoang Quoc Viet'
//     });
//     let [stateOnChange, setStateOnChange] = useState({
//         name: trainerState.name,
//         sex: trainerState.sex,
//         date: trainerState.date,
//         phone: trainerState.phone,
//         address: trainerState.address
//     });
//     const handleUpdate = () => {
//         setPTag(false);
//     }
//     const handleSave = () => {
//         setPTag(true);
//         setTrainerState({
//             name: stateOnChange.name,
//             sex: stateOnChange.sex,
//             date: stateOnChange.date,
//             phone: stateOnChange.phone,
//             address: stateOnChange.address
//         })
//     }
//     const handleCancel = () => {
//         setPTag(true);
//     }
//     return (
//         <>
//             <Header />
//             <div className="trainer-main">
//                 <h1>Thông tin cá nhân</h1>
//                 <div className="row">
//                     <div className="col l-3 m-0 ">
//                         <div className="trainer-avatarname">
//                             <img src={traineravatar} className="trainer-avatar" />
//                             <span className="trainer-name">Tran Van A</span>
//                         </div>
//                     </div>
//                     <div className="col l-9 m-12">
//                         <div className="trainer-info-frames">
//                             <div className="trainer-info">
//                                 <b>Họ tên</b><br />
//                                 {isPTag ? (
//                                     <b>{trainerState.name}</b>
//                                 ) : (
//                                     <input
//                                         className="trainer-input trainer-input-name"
//                                         type="text"
//                                         name="name"
//                                         value={stateOnChange.name}
//                                         onChange={(e) => {
//                                             const name = e.target.value;
//                                             setStateOnChange({ ...stateOnChange, name });

//                                         }}
//                                     />
//                                 )}
//                                 <br />
//                                 <b>Giới tính</b><br />
//                                 {isPTag ? (
//                                     <b>{trainerState.sex}</b>
//                                 ) : (
//                                     <select
//                                         name="sex"
//                                         className="trainer-input trainer-input-sex"
//                                         value={stateOnChange.sex}
//                                         onChange={(e) => {
//                                             const sex = e.target.value;
//                                             setStateOnChange({ ...stateOnChange, sex });
//                                         }}>
//                                         <option value="nam">nam</option>
//                                         <option value="nữ">nữ</option>
//                                     </select>
//                                 )}
//                                 <br />
//                                 <b>Ngày sinh</b><br />
//                                 {isPTag ? (
//                                     <b>{trainerState.date}</b>
//                                 ) : (
//                                     <input
//                                         className="trainer-input trainer-input-date"
//                                         type="date"
//                                         name="date"
//                                         value={stateOnChange.date}
//                                         onChange={(e) => {
//                                             const date = e.target.value;
//                                             setStateOnChange({ ...stateOnChange, date });
//                                         }}
//                                     />
//                                 )}
//                                 <br />
//                                 <b>Số điện thoại</b><br />

//                                 {isPTag ? (
//                                     <b>{trainerState.phone}</b>
//                                 ) : (
//                                     <input
//                                         className="trainer-input trainer-input-phone"
//                                         type="text"
//                                         name="phone"
//                                         value={stateOnChange.phone}
//                                         onChange={(e) => {
//                                             const phone = e.target.value;
//                                             setStateOnChange({ ...stateOnChange, phone });
//                                         }}
//                                     />
//                                 )}

//                                 <br />
//                                 <b>Địa chỉ</b><br />
//                                 {isPTag ? (
//                                     <b>{trainerState.address}</b>
//                                 ) : (
//                                     <input
//                                         className="trainer-input trainer-input-address"
//                                         type="text"
//                                         name="address"
//                                         value={stateOnChange.address}
//                                         onChange={(e) => {
//                                             const address = e.target.value;
//                                             setStateOnChange({ ...stateOnChange, address });
//                                         }}
//                                     />
//                                 )}
//                                 <br />
//                                 {isPTag ? (
//                                     <button onClick={handleUpdate}>chỉnh sửa</  button>
//                                 ) : (
//                                     <div>
//                                         <button onClick={handleSave}>lưu</  button>
//                                         <button onClick={handleCancel}>Huỷ</ button>
//                                     </div>
//                                 )}
//                                 console.log({trainerState});
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }
export default Trainer