import { useEffect, useState } from "react"
import announcementBarApi from "../apiStrapi/announcementBarApi";

export default function AnnouncementBar() {
  const [text, setText] = useState("");

  useEffect(() => {
    announcementBarApi().then((value) => {
      setText(value.data?.attributes?.message)
    })
  }, [])

  return (
    <>
      {text
        ? <div className="announcement-bar text-center">
          <p className="p-4 m-0">
            {text}
          </p>
        </div>
        : <div />
      }
    </>
  )

}