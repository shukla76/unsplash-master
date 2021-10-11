import React from 'react'
import "./banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="left">
                <h1>Nature</h1>
                <p>Let's celebrate the magic of mother earth - with images of everything our planet has to offer, from stunning seaescapes, starry skies, and everything in between.</p>
                <p><span>Supported by</span> img <span>IX</span></p>
            </div>
            <div className="right">
                <div className="right-box">
                    <div>
                        <p>Status</p>
                        <span className="open"><b>Open</b></span>
                    </div><hr className="hr"/>
                    <div>
                        <p>Curator</p>
                        <img src="https://user-images.githubusercontent.com/5659117/53183813-c7a2f900-35da-11e9-8c41-b1e399dc3a6c.png" height="20px" alt="unsplash logo"/>
                    </div><hr/>
                    <div>
                        <p>Contributions</p>
                        <span><b>8.2k</b></span>
                    </div><hr/>
                    <div>
                        <p>Top Contributors</p>
                        <div>
                            <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" height="15px" alt=""/>
                            <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" height="15px" alt=""/>
                            <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" height="15px" alt=""/>
                            <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" height="15px" alt=""/>
                            <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" height="15px" alt=""/>
                        </div>
                    </div>
                </div>
                <button>Submit to <b>Nature</b></button>
            </div>
        </div>
    )
}

export default Banner
