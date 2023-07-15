import "./DaoCave.scss"
import iphone from "../../assets/img/usecase/1080.png"

const DaoCave = () =>{ 
    return(
    <>
    <div className="container" data-aos="fade-up" data-aos-duration="3000">
        <div className="cta-container">
            <div className="w-layout-grid">
            <div className="content">
                    <div className="cta-content-holder">
                        <div className="fade-in-move-on-scroll">
                            <div className="cta-text">
                            Wanna contribute? Join our DaoCave on Discord
                            </div>
                        </div>
                        <div className="fade-in-move-on-scroll">
                            <div className="cta-description">
                            We take extra care in ensuring you feel like you belong here.
                            </div>
                        </div>
                        <div className="form-holder">
                            <div className="form-block">
                                <form action="" className="wf-form-CTA-FORM">
                                    <div className="fade-in-move-on-scroll">
                                        <input placeholder="Your Email"type="email" className="cta-text-field" />
                                    </div>
                                    <div className="fade-in-move-on-scroll">
                                        <input value="Get me into DaoCave" type="submit" className="button submit-button w-button" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta-iphone-holder">
            <img src={iphone} className="iphone-image"alt="" />
            <div className="hero-iphone-screen-holder"></div>
            </div>
        </div>
    </div>
    </>
    );
}
export default DaoCave;