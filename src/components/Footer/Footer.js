import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3">
                        <div className="footer-item">
                            <h1 className="footer-heading">Chi nhánh Hà Nội</h1>
                            <h3 className="branch-address">Số 336 La Thành – Q.Đống Đa</h3>
                            <h3 className="branch-address">Số 212 Bạch Mai – Q.Hai Bà Trưng</h3>
                            <h3 className="branch-address">Hotline : 0981.33.58.58 – 0965.33.58.58</h3>
                            <h3 className="branch-address">Giờ mở cửa : 8h00 – 21h00</h3>
                        </div>
                    </div>
                    <div className="col l-3">
                        <div className="footer-item">
                            <h1 className="footer-heading">Chi nhánh TP - HCM</h1>
                            <h3 className="branch-address">521/36 Cách Mạng Tháng 8 – P.13 – Q.10</h3>
                            <h3 className="branch-address">Hotline : 0971.33.85.85 – 0352.33.85.85</h3>
                            <h3 className="branch-address">Giờ mở cửa : 8h00 – 21h00</h3>
                        </div>
                    </div>
                    <div className="col l-3">
                        <div className="footer-item">
                             
                            <h1 className="footer-heading">Thông tin liên hệ</h1>                           
                            <b className="branch-address">Facebook:</b>&nbsp;
                            <a href="https://www.facebook.com/locfugoflollow" >facebook.com/RubyGym</a><br />
                            <b className="branch-address">Youtube: </b>&nbsp;
                            <a href="https://www.youtube.com/channel/UCGXfojmxq5qZnoKRj8ZA7bA" >Youtube.com/RubyGym</a><br />
                            <b className="branch-address">Instagram: </b>&nbsp;
                            <a href="https://www.instagram.com/cristiano/" >instagram.com/RubyGym</a><br />
                            <b className="branch-address">Twitter:</b>&nbsp;
                            <a href="https://twitter.com/POTUS" >twitter.com/RubyGym</a><br />
                        </div>
                    </div>
                    <div className="col l-3">
                        <div className="footer-item">
                            <h1 className="footer-heading">Thời gian</h1>
                            <h3 className="branch-address">Thứ Hai - Chủ Nhật: 6:00 - 22:00</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright 2021 @ RUBYGYM. All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
