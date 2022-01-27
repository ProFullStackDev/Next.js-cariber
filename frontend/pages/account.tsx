import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import UserManager from "../auth/userManager";
import PurchasedCard from "../components/account/purchasedCard";
import Img from "../components/image";
import * as staticData from "../components/static/account"

export default function Account() {
  const timeZone = staticData.timeZone
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const router = useRouter()
  const userManager = new UserManager()

  useEffect(() => {
    !userManager.isLoggedIn() && router.replace('/login')
  })

  function handleClick() {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };
  return (
    <div className="account">
      <div className="site-action-bar site-action-bar-members">
        <div className="header-account container">
          <div className="header-left">
            <Link href="/">
              <a className="back-link" href="#">
                <span className="text-light">
                  <i className="fas fa-chevron-left"></i>
                  &nbsp;&nbsp;Back to Cariber
                </span>
              </a>
            </Link>
          </div>
          <div className="action-buttons pull-right">
            <Link href="/account">
              <a className="btn-setting">
                Settings
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container account-content">
        <div className="row side-by-side">
          <div className="col-4">
            <h2 className="title">Profile Settings</h2>
            <p className="subtitle text-light">Change your basic profile information.</p>
          </div>
          <div className="col-8 card-form">
            <div className="panel panel-default panel-form">
              <div className="panel-body">
                <div className="form-group required">
                  <label className="control-label string required" htmlFor="member_name">
                    Full Name
                  </label>
                  <input id="member_name" className="form-control string required" type="text" />
                </div>
                <div className="form-group required">
                  <label className="control-label string required" htmlFor="member_email">
                    E-mail
                  </label>
                  <input id="member_email" className="form-control string required" type="text" />
                </div>
                <div className="form-group required">
                  <label className="control-label string required" htmlFor="member_time_zone">
                    Time Zone
                  </label>
                  <select className="form-control time_zone optional" id="member_time_zone">
                    <option value=""></option>
                    {timeZone.map((value, index) => {
                      return (
                        <option key={index} value={value.value}>{value.text}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="form-group boolean optional">
                  <div className="checkbox">
                    <label>
                      <input className="boolean optional" type="checkbox" value="1" name="product_update_notification_" id="product_update_notification" />
                      Please notify me about updates to my products.
                    </label>
                  </div>
                </div>
                <div className="form-group boolean optional">
                  <div className="checkbox">
                    <label>
                      <input className="boolean optional" type="checkbox" value="1" name="reply_comment_notification" id="reply_comment_notification" />
                      Please notify me when a reply to one of my posts or comments is created.
                    </label>
                  </div>
                </div>
                <div className="form-group boolean optional">
                  <div className="checkbox">
                    <label>
                      <input className="boolean optional" type="checkbox" value="1" name="new_products_and_promotions" id="new_products_and_promotions" />
                      Please email me about new products and promotions.
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="member_avatar">
                    Avatar
                  </label>
                  <div className="media">
                    <div className="media-left">
                      <Img id="member-avatar-preview"
                        className="avatar img-circle media-object"
                        alt="Avatar"
                        src="https://www.gravatar.com/avatar/d42fb2edb07445e1e602fc89e8e65160?s=64&amp;d=https://s3.amazonaws.com/kajabi-storefronts-production/static_assets/default_avatar.jpg"
                        width={64}
                        height={64} />
                    </div>
                    <div className="media-body media-middle">
                      <p className="t-sage-body t-sage--color-grey sage-spacer-bottom-xs">
                        Recommended dimensions of
                        <strong>
                          &nbsp;100x100
                        </strong>
                      </p>
                      <input className="d-none" type="file" accept="image/*" ref={hiddenFileInput} />
                      <button type="button" onClick={handleClick} className="btn btn-primary btn-outline filepicker-btn fp-input">
                        Change Avatar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row side-by-side">
          <div className="col-4">
            <h2 className="title">Social Profile</h2>
            <p className="subtitle text-light">Edit information displayed publicly in communities.</p>
          </div>
          <div className="col-8 card-form">
            <div className="panel panel-default panel-form">
              <div className="panel-body">
                <div className="form-group required">
                  <label className="control-label string required" htmlFor="member_bio">
                    Bio
                  </label>
                  <textarea id="member_bio" className="form-control string required" />
                </div>
                <div className="form-group required">
                  <label className="control-label string required" htmlFor="member_location">
                    Location
                  </label>
                  <input id="member_location" className="form-control string required" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row side-by-side">
          <div className="col-4">
            <h2 className="title">Password</h2>
            <p className="subtitle text-light">Change your password.</p>
            <p className="subtitle text-light">Leave this blank to keep your current password.</p>
          </div>
          <div className="col-8 card-form">
            <div className="panel panel-default panel-form">
              <div className="panel-body">
                <div className="form-group required">
                  <label className="control-label string required" htmlFor="member_current_password">
                    Current Password
                  </label>
                  <input id="member_current_password" className="form-control string required" type="text" />
                  <p className="help-block">
                    <Link href="/forgot-password" passHref={true}>
                      <a>
                        Forgot?
                      </a>
                    </Link>
                  </p>
                </div>
                <div className="form-group required">
                  <label className="control-label string required" htmlFor="member_new_password">
                    New Password
                  </label>
                  <input id="member_new_password" className="form-control string required" type="text" />
                </div>
                <div className="form-group required">
                  <label className="control-label string required" htmlFor="member_verify_password">
                    Verify Password
                  </label>
                  <input id="member_verify_password" className="form-control string required" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row side-by-side">
          <div className="col-4">
            <h2 className="title">Purchase History</h2>
            <p className="subtitle text-light">The Offers you have purchased and the Products you have been granted access to.</p>
          </div>
          <div className="col-8 card-form">
            <div className="panel panel-default panel-form">
              <div className="panel-body">
                <PurchasedCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}