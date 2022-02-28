import { useRouter } from "next/router";
import { MouseEventHandler, useState } from "react";
import Popup from "reactjs-popup";
import UserManager from "../auth/userManager";
import CustomLogin from "./customLogin";
import Img from "./image";

interface imagePartialLoginProps {
  url: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function ImagePartialLogin(props: imagePartialLoginProps) {
  const router = useRouter();
  const userManager = new UserManager();
  const [isPopup, setIsPopup] = useState(false);

  function getURl(url: string | null): string {
    return url ? url + "&cid=" + userManager.getEncodedEmail() : '';
  }

  async function interestCourse(link: string) {
    if (userManager.isLoggedIn()) {
      link && router.push(getURl(link));
    } else {
      setIsPopup(true);
    }
  }

  async function setCallbackButtonFN(link: string) {
    setIsPopup(false)
    if (userManager.isLoggedIn()) {
      userManager.updateProfileImage();
      link && router.push(getURl(link));
    }
  }
  return (
    <>
      <a
        onClick={() => interestCourse(props.url)}>
        <Img id="block-yearly-img"
          className="feature-image"
          src={props.src}
          width={props.width}
          height={props.height}
          alt="Cariber Yearly Subscription"
        />
      </a>
      <Popup className="popup-auth"
        open={isPopup}
        modal
        onClose={() => setIsPopup(false)}
        closeOnDocumentClick={false}>
        {(close: MouseEventHandler<HTMLButtonElement>) => {
          return (
            <div className="pop-modal">
              <button className="close" onClick={close}>
                <p>
                  &times;
                </p>
              </button>
              <CustomLogin path={props.url} callbackButton={setCallbackButtonFN} />
            </div>
          )
        }}
      </Popup>
    </>
  )
}