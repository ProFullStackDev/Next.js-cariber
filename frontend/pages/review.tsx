import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

export default function Review() {
    return (
        <div className="bg-review">
            <Header />
            <div className="sizer">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="block-type-image text-col-12" style={{ marginBottom: 40 }}>
                            <div className="block box-shadow-none background-unrecognized aos-init aos-animate">
                                <div className="image">
                                    <a href="https://checkout.cariber.co/?add-to-cart=685&amp;cfp=bGFyZ2ViYW5uZXJfY291cnNlcw==">
                                        <Image className="image-image"
                                            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/WwCSkYs4TKWw0zpTBGtQ_file.jpg"
                                            alt=""
                                            width={1260}
                                            height={282.017} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="block-titel" className="block-type--text text-center col-7" style={{ marginBottom: 50 }}>
                            <div className="block box-shadow-large background-unrecognized aos-init aos-animate">
                                <h1>
                                    <span style={{ color: '#e74e25' }}>
                                        Wall of Love
                                    </span>
                                </h1>
                                <h4>
                                    <span style={{ color: '#e74e25' }}>
                                        ผู้เรียนมีความเห็นอย่างไรกับ Cariber
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}