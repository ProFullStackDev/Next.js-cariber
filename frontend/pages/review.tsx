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
            <div id="block-person-1">
                <div className="container">
                    <div className="frame align-items-center justify-content-center">
                        <div className="block-type--image text-col-11">
                            <div className="row block box-shadow-large background-light aos-init aos-animate" >
                                <Image className="image-image"
                                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/bPYsO3kwQHOr4QyXSv7K_123288476_3453648371357312_9054237649683120135_n.webp"
                                    alt=""
                                    width={200}
                                    height={200} />
                                <div className="block-text">
                                    <p style={{ marginBottom: 14 }}>
                                        <strong>
                                            <span style={{ color: '#2c3e50' }}>
                                                &quot;ถ้าข้าพเจ้ามีเวลา 6 ชั่วโมงในการตัดต้นไม้ ข้าพเจ้าจะใช้เวลา 4 ชั่วโมงแรกลับขวานให้คม&quot;
                                                <br />
                                                เป็นวาทะของ&quot;อับราฮัม ลินคอล์น&quot; อดีตผู้นำสหรัฐอเมริกา
                                                <br />
                                                <br />
                                                วิกฤติโควิด-19 ครั้งนี้หนักหนาสาหัสมาก
                                                <br />
                                                แต่วันหนึ่งมันต้องผ่านไป
                                                <br />
                                                และเมื่อวันที่ฟ้าเปิด ท้องฟ้าสดใส
                                                <br />
                                                ใครที่ลับขวานได้คมกว่าก็จะได้เปรียบ
                                            </span>
                                        </strong>
                                    </p>
                                    <h5 style={{ marginBottom: 0 }}>
                                        <strong className="mt-auto">
                                            <span>
                                                <a href="https://www.facebook.com/118209918234524/posts/4271535732901901/?d=n" style={{ color: "#1e4397", fontSize: 16 }}>
                                                    Facebook page : หนุ่มเมืองจันท์
                                                </a>
                                            </span>
                                        </strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}