import React from 'react';
const ScrollImage = () => {
    return (
        <div className="container">
            <div className="scroll-image">
                <div className="row">
                    <div className="col">
                        <div className="main-scroll-image" >
                            <div>
                                <img src="https://cdn.wallpapersafari.com/98/5/78E3Lg.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col">
                        <div className="sub-scroll-image">
                            <div className="m-1"><img src="https://img.wallpapersafari.com/desktop/1600/900/97/45/63Ekds.jpg"></img></div>
                            <div className="m-1" ><img src="https://i.pinimg.com/originals/d4/b7/0c/d4b70cfd4bb24509cd69912775ab629d.jpg"></img></div>
                            <div className="m-1"><img src="https://img.wallpapersafari.com/desktop/1600/900/97/45/63Ekds.jpg"></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ScrollImage;