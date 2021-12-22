import Footer from "../components/footer"
import Header from "../components/header"

interface Feature {
    img: string,
    link: string,
    name: string,
    career: string
}

export default function Courses() {
    const features: Feature[] = [
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/hDwO723fRluyELoUEVT7__V2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณฐากร ปิยะพันธ์",
            career: "Employee Survival Guide"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/IpuwFDA2SaCvTK2PTENL__V2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณมณีรัตน์ อนุโลมสมบัติ",
            career: "Scale People, Scale Company"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณบรรยง พงษ์พานิช",
            career: "The Art of Decision Making"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/FI7e8TMJQsGRBJ9WQ1zp_SeaTalk_IMG_1618167619_Cropped_2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณสาธิต กาลวันตวานิช",
            career: "The Power of Creative and Critical Thinking"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/hDwO723fRluyELoUEVT7__V2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณฐากร ปิยะพันธ์",
            career: "Employee Survival Guide"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/IpuwFDA2SaCvTK2PTENL__V2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณมณีรัตน์ อนุโลมสมบัติ",
            career: "Scale People, Scale Company"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณบรรยง พงษ์พานิช",
            career: "The Art of Decision Making"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/FI7e8TMJQsGRBJ9WQ1zp_SeaTalk_IMG_1618167619_Cropped_2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณสาธิต กาลวันตวานิช",
            career: "The Power of Creative and Critical Thinking"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/hDwO723fRluyELoUEVT7__V2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณฐากร ปิยะพันธ์",
            career: "Employee Survival Guide"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/IpuwFDA2SaCvTK2PTENL__V2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณมณีรัตน์ อนุโลมสมบัติ",
            career: "Scale People, Scale Company"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณบรรยง พงษ์พานิช",
            career: "The Art of Decision Making"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/FI7e8TMJQsGRBJ9WQ1zp_SeaTalk_IMG_1618167619_Cropped_2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณสาธิต กาลวันตวานิช",
            career: "The Power of Creative and Critical Thinking"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/hDwO723fRluyELoUEVT7__V2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณฐากร ปิยะพันธ์",
            career: "Employee Survival Guide"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/IpuwFDA2SaCvTK2PTENL__V2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณมณีรัตน์ อนุโลมสมบัติ",
            career: "Scale People, Scale Company"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณบรรยง พงษ์พานิช",
            career: "The Art of Decision Making"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/FI7e8TMJQsGRBJ9WQ1zp_SeaTalk_IMG_1618167619_Cropped_2.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณสาธิต กาลวันตวานิช",
            career: "The Power of Creative and Critical Thinking"
        },
        {
            img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/195AwCRCR3uvRhd5USc3_file.jpg",
            link: "https://www.cariber.co/maneerut-anulomsombut",
            name: "คุณบรรยง พงษ์พานิช",
            career: "The Art of Decision Making"
        },
    ]

    return (
        <div>
            <Header></Header>
            <div className="sizer ">
                <div className="container ">
                    <div className="row align-items-center">
                        <div kjb-settings-id="sections_1612934128394_blocks_1637758931963_settings_width" id="block-1637758931963" className="block-type--image text-col-12hidden--mobile" data-reveal-event="" data-reveal-offset="" data-reveal-units="seconds">
                            <div className="block box-shadow-none background-unrecognized aos-init aos-animate" data-aos="none" data-aos-delay="0" data-aos-duration="0">
                                <div className="image">
                                    <a className="image__link" href="https://checkout.cariber.co/?add-to-cart=685&amp;cfp=bGFyZ2ViYW5uZXJfY291cnNlcw==">
                                        <img className="image__image" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/WwCSkYs4TKWw0zpTBGtQ_file.jpg" kjb-settings-id="sections_1612934128394_blocks_1637758931963_settings_image" alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div kjb-settings-id="sections_1612934128394_blocks_1614761448848_settings_width" id="block-1614761448848" className="block-type--text text-left col-12" data-reveal-event="" data-reveal-offset="" data-reveal-units="seconds">
                            <div className="block box-shadow-none background-unrecognized aos-init aos-animate" data-aos="none" data-aos-delay="0" data-aos-duration="0">
                                <h2 style={{ textAlign: 'center' }}><span style={{ color: '#e74e25' }}>คอร์สทั้งหมด</span></h2>
                            </div>
                        </div>
                        <div className="block-break"></div>
                        {features.map((v, i) => {
                            return (
                                <div key={i} kjb-settings-id="sections_1612934128394_blocks_1612934128393_1_settings_width" id="block-1612934128393_1" className="block-type--feature text-center col-3">
                                    <div className="block box-shadow-large background-light aos-init aos-animate" data-aos="none" data-aos-delay="0" data-aos-duration="0">
                                        <div kjb-settings-id="sections_1612934128394_blocks_1612934128393_1_settings_width" id="block-1612934128393_1" className="block-type--featuretext-centercol-3" data-reveal-event="" data-reveal-offset="" data-reveal-units="seconds">
                                            <div className="feature">
                                                <a href={v.link}>
                                                    <img className="feature__image" src={v.img} kjb-settings-id="sections_1612934128394_blocks_1612934128393_1_settings_image" alt=""></img>
                                                </a>
                                                <div className="feature__text" kjb-settings-id="sections_1612934128394_blocks_1612934128393_1_settings_text">
                                                    <h5 style={{ textAlign: 'center' }}><a href="/thakorn-piyapan"><span style={{ color: '#223f99' }}><strong>{v.name}</strong></span></a></h5>
                                                    <h6 style={{ textAlign: 'center' }}><a href="/thakorn-piyapan"><strong>{v.career}</strong></a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}