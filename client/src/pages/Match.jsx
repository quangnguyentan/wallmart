import VideoCustom from "@/components/video-custom"
import LeftBar from "../components/LeftBar"
import demo from "../assets/demo.jpg"
import VideoList from "@/components/video-list"
import ChatBox from "@/components/ChatBox"
const Match = () => {
  return (
    <>
      <div className="w-[100%] flex flex-col gap-16 px-12">
        <div className="flex gap-2 w-full">
           <div className="w-[70%]"> 
            <VideoCustom match/>
           </div>
           <div className="w-[30%]"> 
            <ChatBox/>
            </div>
        </div>
        <VideoList match />
      </div>
    </>
  )
}

export default Match