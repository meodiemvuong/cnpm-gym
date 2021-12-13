import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../store/imgs/logo.png'
import './ChangePassword.css'
import changePasswordAPI from '../../api/changePasswordAPI'
import { useNavigate } from 'react-router-dom'
import Popup from '../Popup/Popup'

function ChangePassword() {
    const navigate = useNavigate();
    let [userState, setUserState] = useState(false);
    let [formFalse, setFormFalse] = useState(false);
    let [errMsg, setErrMsg] = useState(false);
    let [showPopup, setShowPopup] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        const { newPassword, oldPassword, confirmPassword } = userState;
            // console.log(userState);
        if (!oldPassword || !newPassword || !confirmPassword) return;
        console.log(newPassword);
        console.log(confirmPassword);
        console.log(newPassword !== confirmPassword);
        if (newPassword !== confirmPassword) {
            setFormFalse(true);
            setErrMsg("Mật khẩu nhập lại không trùng khớp!");
            return;
        }
        else {
            const data = {
                old_password: userState.oldPassword,
                new_password: userState.newPassword
            }
            // console.log(user);
            const response = await changePasswordAPI.changePassword(data);
            // console.log(response);
            if (response && response.data && response.data.status) {
                console.log("OK"); 
                setShowPopup(true);
                setTimeout(()=> navigate('/profile'), 2000);
                return;
            }

            setFormFalse(true);
            if (response.data.message == "Invalid token!") navigate('/login');
            else setErrMsg(response.data.message);
            
            return;
        }
    }
    
    const cancelForm = (e) =>{ 
        e.preventDefault();
        navigate('/profile');
    }

    return (
        <div className="form-wrapper">
            {/* Header */}
            <div className="form-header-wrapper">
                <div className="grid wide">
                    <div className="form-header">
                        <div className="form-header-logo">
                            <Link to='/'><img src={logo} alt="" className="logo-img" /></Link>
                            <Link to='/' className="logo-name">RUBYGYM</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header body */}
            < main className="form-body" >
                <div className="form-body-wrapper">
                    <h2 className="form-body-heading">ĐỔI MẬT KHẨU</h2>
                    <div className="form-inner">
                        <form className="form">
                            <div className="form-field-container">
                                <h3 className="form-field">Mật khẩu cũ</h3>
                            </div>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="password"
                                    name="oldPassword"
                                    id="oldPassword"
                                    placeholder="Mật khẩu cũ"
                                    onChange={(e) => {
                                        setFormFalse(false);
                                        const oldPassword = e.target.value;
                                        setUserState({ ...userState, oldPassword });
                                    }}
                                />
                            </div>
                            <div className="form-field-container">
                                <h3 className="form-field">Mật khẩu mới</h3>
                            </div>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    placeholder="Mật khẩu mới"
                                    onChange={(e) => {
                                        setFormFalse(false);
                                        const newPassword = e.target.value;
                                        setUserState({ ...userState, newPassword });
                                    }}
                                />
                            </div>
                            <div className="form-field-container">
                                <h3 className="form-field">Nhập lại mật khẩu mới</h3>
                            </div>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Nhập lại mật khẩu mới"
                                    onChange={(e) => {
                                        setFormFalse(false);
                                        const confirmPassword = e.target.value;
                                        setUserState({ ...userState, confirmPassword });
                                    }}
                                />
                            </div>
                            {formFalse && <h2 className="form-false">{errMsg}</h2>}
                            <div className="btn-group">
                                <button className={userState.oldPassword && userState.newPassword && userState.confirmPassword 
                                                    ? "usersubmit-btn" : "usersubmit-btn inactive"}
                                        onClick={handleForm}>
                                    Đổi mật khẩu
                                </button>
                                <button className="user-cancel-btn" onClick={cancelForm}>Hủy</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Popup trigger={showPopup} message="Đổi mật khẩu thành công"> 
                </Popup>
            </main>
        </div>
    )
}

export default ChangePassword