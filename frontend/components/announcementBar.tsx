import { useState } from "react"
import announcementBarApi from "../apiStrapi/announcementBarApi";

export default function AnnouncementBar() {
  const [text, setText] = useState("");
  announcementBarApi().then((value) => {
    setText(value.data?.attributes?.message)
  })
  if (text) {
    return (
      <div className="announcement-bar text-center">
        <p className="p-4 m-0">
          {text}
        </p>
      </div>
    )
  }
  
  return(
    <div></div>
  )
}