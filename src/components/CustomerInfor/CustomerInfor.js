import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import avatar from './../../store/imgs/avatar.jpg'
import { Popup } from './../'
import userProfileAPI from './../../api/userProfileAPI'

import styles from './CustomerInfor.module.css'

// Trang này có thể hiển thị với cả học viên, huấn luyện viên và admin
// Thông tin chi tiết của mỗi học viên

function CustomerInfor() {
    let [isPTag, setPTag] = useState(true);

    let [nameUpdating, setNameUpdating] = useState(false);
    let [phoneUpdating, setPhoneUpdating] = useState(false);
    let [birthdayUpdating, setBirthdayUpdating] = useState(false);
    let [addressUpdating, setAddressUpdating] = useState(false);
    let [genderUpdating, setGenderUpdating] = useState(false);
    let [registerUpdating, setRegisterUpdating] = useState(false);
    let [outdateUpdating, setOutdateUpdating] = useState(false);
    let [showPopup, setShowPopup] = useState(false);

    let nameRef = useRef(null);
    let phoneRef = useRef(null);
    let birthdayRef = useRef(null);
    let genderRef = useRef(null);
    let addressRef = useRef(null);
    let registerRef = useRef(null);
    let outdateRef = useRef(null);

    let [userProfile, setUserProfile] = useState({
        name: 'Thanh Binh',
        phone: '0856174003',
        birthday: '16/9/2001',
        gender: 'Nam',
        address: '236 Hoang Quoc Viet',
        create_at: '10/12/2021',
        expire_at: '1/1/2022',
        avatar_url: 'url',
    });
    let [profileOnChange, setProfileOnChange] = useState({
        name: userProfile.name,
        phone: userProfile.phone,
        birthday: userProfile.birthday,
        gender: userProfile.gender,
        address: userProfile.address,
        create_at: userProfile.create_at,
        expire_at: userProfile.expire_at,
        avatar_url: userProfile.avatar_url
    })
    const handleEdit = () => {
        setPTag(false);
    }
    const handleCancel = () => {
        setPTag(true);
    }

    // Để show Popup sau khi cập nhật thành công
    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                setShowPopup(prev => !prev);
            }, 1000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup])

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
            gender: profileOnChange.gender,
            address: profileOnChange.address,
            create_at: profileOnChange.address,
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
        <div className="grid">

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

                            {/* Giới tính */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Giới tính</h3>
                                    {isPTag ? (
                                        <b>{userProfile.gender}</b>
                                    ) : (
                                        <select
                                            // disabled={!genderUpdating}
                                            // ref={genderRef}
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.gender}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    gender: e.target.value
                                                })
                                            }}
                                        >
                                            <option>Nam</option>
                                            <option>Nữ</option>
                                        </select>
                                    )}
                                </div>

                            </div>



                            {/* Địa chỉ */}
                            <div className={clsx(styles.inforWrapper)}>
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

                            </div>

                            {/* Ngày đăng ký */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày đăng ký</h3>
                                    {isPTag ? (
                                        <b>{userProfile.create_at}</b>
                                    ) : (
                                        <input
                                            // readOnly={!registerUpdating}
                                            // ref={registerRef}
                                            type="date"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.create_at}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    create_at: e.target.value
                                                })
                                            }}
                                            id='trainer-register' />
                                    )}
                                </div>

                            </div>

                            {/* Ngày hết hạn */}
                            <div className={clsx(styles.inforWrapper)}>
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
                            </div>
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
            <div className={clsx(styles.inforField)}>
                <h1 className={clsx(styles.inforHeading)}>Thông tin tập luyện</h1>
            </div>

            <Popup trigger={showPopup} message="Cập nhật thành công nhé" />
        </div>
    )
}

export default CustomerInfor
