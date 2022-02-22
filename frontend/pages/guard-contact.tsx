import Footer from "../components/footer";
import FormCheckbox from "../components/formCheckbox";
import FormInput from "../components/formInput";
import FormSelect from "../components/formSelect";
import Header from "../components/header";

export default function GuardContact() {
  return (
    <div className="background-smooth guard-contact">
      <Header />
      <div className="sizer">
        <div className="container flex-column-center">
          <div className="card-form col-7 p-0">
            <div className="form-guard row">
              <div className="col-6 p-0 lg-p-r-15">
                <FormInput id={"first_name"}
                  label="ชื่อ"
                  description="ภาษาไทย หรือ ภาษาอังกฤษ"
                  type={"text"}
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  minLength={0} />
              </div>
              <div className="col-6 p-0 lg-p-l-15">
                <FormInput id={"last_name"}
                  label="สกุล"
                  description="ภาษาไทย หรือ ภาษาอังกฤษ"
                  type={"text"}
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  minLength={0} />
              </div>
            </div>
            <div className="form-guard">
              <div className="col-6 p-0 lg-p-r-15">
                <FormInput id={"phone_number"}
                  label="เบอร์โทรศัพท์"
                  type={"text"}
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  minLength={0} />
              </div>
            </div>
            <div className="form-guard">
              <FormInput id={"address"}
                label="ที่อยู่"
                description="เลขที่ หมู่ ซอย ถนน แขวง/ตำบล เขต/อำเภอ"
                type={"text"}
                required={true}
                placeholder={""}
                onChange={() => { }}
                minLength={0} />
            </div>
            <div className="form-guard">
              <FormSelect id={"province"}
                label="จังหวัด"
                required={true}
                placeholder={""}
                onChange={() => { }}
                item={[]} />
            </div>
            <div className="form-guard">
              <div className="col-6 p-0 lg-p-r-15">
                <FormInput id={"zip_code"}
                  label="รหัสไปรษณีย์"
                  type={"text"}
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  minLength={0} />
              </div>
            </div>
            <div className="form-guard row">
              <div className="col-1 p-0 lg-m-r-15">
                <FormInput id={"day"}
                  label="วัน"
                  description="DD"
                  type={"text"}
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  minLength={0} />
              </div>
              <div className="col-1 p-0 lg-m-x-15">
                <FormInput id={"month"}
                  description="MM"
                  label="เดือน"
                  type={"text"}
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  minLength={0} />
              </div>
              <div className="col-3 p-0 lg-m-x-15">
                <FormInput id={"year"}
                  description="YYYY"
                  label="ปีเกิดของคุณ"
                  type={"text"}
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  minLength={0} />
              </div>
            </div>
            <div className="form-guard">
              <div className="col-6 p-0 lg-p-r-15">
                <FormSelect id={"career"}
                  label="อาชีพปัจจุบันของคุณ"
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  item={[]} />
              </div>
            </div>
            <div className="form-guard">
              <FormInput id={"current_location"}
                label="ตำแหน่งปัจจุบันของคุณ"
                type={"text"}
                required={true}
                placeholder={""}
                onChange={() => { }}
                minLength={0} />
            </div>
            <div className="form-guard">
              <div className="col-6 p-0 lg-p-r-15">
                <FormSelect id={"career"}
                  label="อุตสาหกรรมของคุณ"
                  required={true}
                  placeholder={""}
                  onChange={() => { }}
                  item={[]} />
              </div>
            </div>
            <div className="form-guard">
              <label className="color-black">
                หัวข้อการเรียนที่สนใจ <span className="color-red">*</span>
              </label>
              <div className="m-t-10">
                <FormCheckbox id={"check-1"}
                  label="ธุรกิจและการเงิน"
                  onChange={() => { }}
                />
                <FormCheckbox id={"check-1"}
                  label="กานงานและอาชีพ"
                  onChange={() => { }}
                />
                <FormCheckbox id={"check-1"}
                  label="เทคโนโลยีและนวัตกรรม"
                  onChange={() => { }}
                />
                <FormCheckbox id={"check-1"}
                  label="สุขภาพ"
                  onChange={() => { }}
                />
                <FormCheckbox id={"check-1"}
                  label="เกมและกีฬา"
                  onChange={() => { }}
                />
                <FormCheckbox id={"check-1"}
                  label="ศิลปะและความบันเทิง"
                  onChange={() => { }}
                />
                <FormCheckbox id={"check-1"}
                  label="อาหารและโภชนาการ"
                  onChange={() => { }}
                />
                <FormCheckbox id={"check-1"}
                  label="การสื่อสารและวัฒนธรรม"
                  onChange={() => { }}
                />
                <FormCheckbox id={"check-1"}
                  label="การพัฒนาตนเอง"
                  onChange={() => { }}
                />
                <div className="row">
                  <FormCheckbox id={"check-1"}
                    label="Other:"
                    onChange={() => { }}
                  />
                  &nbsp;
                  &nbsp;
                  <FormInput id={"other_check"}
                    type={"text"}
                    required={false}
                    placeholder={""}
                    onChange={() => { }}
                    minLength={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}