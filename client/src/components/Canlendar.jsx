

import nga from "../assets/nga.png"
import japan from "../assets/japan.jpg"
import oclock from "../assets/oclock.png"
import already from "../assets/already.png"

import live from "../assets/live.png"
import star from "../assets/star.png"
import mochi from "../assets/mochi.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
const Calendar = () => {
  
  return (
    

<div className="overflow-x-auto shadow-md sm:rounded-lg px-20 w-full py-4">
    <Tabs defaultValue="football" className="w-full">
      <TabsList>
        <TabsTrigger value="football" className="cursor-pointer hover:scale-125 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out ">Bóng đá</TabsTrigger>
        <TabsTrigger value="basketball" className="cursor-pointer hover:scale-125 hover:transition hover:delay-300 hover:duration-300 hover:ease-in-out ">Bóng rổ</TabsTrigger>
      </TabsList>
     
      <TabsContent  value="football" className="flex flex-col items-center gap-20">
      <div className="w-full">
      <div className="items-center flex justify-center gap-4 ">
      <img src={oclock} className="w-[15px] h-[15px]" alt="oclock" />
      <h3 className="text-xs">Trận đấu đang diễn ra</h3>
     </div>
      <div className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> 
        <div className="flex flex-col">
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>  
        </div>
      </div>
      </div>
      <div className="w-full">
      <div className="items-center flex justify-center gap-4 ">
          <img src={already} className="w-[15px] h-[15px]" alt="oclock" />
          <h3 className="text-xs">Trận đấu sắp tới</h3>
        </div>
        <div className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> 
            <div className="flex flex-col">
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>  
            </div>
        </div>
      </div>
      </TabsContent>
             
      <TabsContent value="basketball" className="flex flex-col items-center gap-20">  
      <div className="w-full">
      <div className="items-center flex justify-center gap-4 ">
          <img src={oclock} className="w-[15px] h-[15px]" alt="oclock" />
          <h3 className="text-xs">Trận đấu đang diễn ra</h3>
        </div>
        <div className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> 
            <div className="flex flex-col">
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>
            <div className="border-b flex w-full">
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                    <div className="items-center flex gap-2">
                        <img src={nga} alt="nga" className="w-[35px] h-[35px] object-contain" />
                        <span> Nga FNL2</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>11:00</span>
                        <span>
                          Hiệp 2 46'
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                      <div className="items-center justify-end flex w-2/3 gap-16">
                      <span>SKA Khabarovsk II</span>
                        <span> 1-0</span>
                        <span>FK Oryol</span>
                      </div>
                      <div className="items-center flex gap-8">
                        <span>1-</span>
                        <span>
                        0-0
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                      <Avatar className="w-[25px] h-[25px]">
                      <AvatarImage src={mochi} alt="mochi" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                    </div>
                    <div className="px-6 py-4 flex-1 flex items-center gap-4">
                      <img className="w-[25px] h-[25px]" src={live} alt="live" />
                      <img className="w-[25px] h-[25px]" src={star} alt="star" />

                    </div>
            </div>  
            </div>
        </div>
      </div>
      <div className="w-full">
      <div className="items-center flex justify-center gap-4 ">
      <img src={already} className="w-[15px] h-[15px]" alt="oclock" />
      <h3 className="text-xs">Trận đấu sắp tới</h3>
     </div>
      <div className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> 
        <div className="flex flex-col">
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>
        <div className="border-b flex w-full">
                <div className="px-6 py-4 border-r flex items-center justify-between flex-3">
                <div className="items-center flex gap-2">
                    <img src={japan} alt="nga" className="w-[35px] h-[35px] object-contain" />
                    <span> JPN Nadeshiko League 2</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>11:00</span>
                    <span>
                      Hiệp 2 46'
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 border-r flex items-center justify-between flex-6">
                  <div className="items-center justify-end flex w-2/3 gap-16">
                   <span>SKA Khabarovsk II</span>
                    <span> 1-0</span>
                    <span>FK Oryol</span>
                  </div>
                  <div className="items-center flex gap-8">
                    <span>1-</span>
                    <span>
                    0-0
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4  border-r flex-2 items-center flex justify-center">
                  <Avatar className="w-[25px] h-[25px]">
                  <AvatarImage src={mochi} alt="mochi" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
                </div>
                <div className="px-6 py-4 flex-1 flex items-center gap-4">
                   <img className="w-[25px] h-[25px]" src={live} alt="live" />
                   <img className="w-[25px] h-[25px]" src={star} alt="star" />

                </div>
        </div>  
        </div>
      </div>
      </div>
      </TabsContent>
    </Tabs>
</div>

  )
}

export default Calendar