import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "video-react/dist/video-react.css";
import SlickSlider from "./SlickSlider";
import { useEffect, useState } from "react";
import { listLeftCategories } from "@/lib/helper";
import Category_Info from "./Category_Info";
import { apiGetStore } from "@/services/storeService";


const TabsVerticel = () => {

  const [activeTab, setActiveTab] = useState(1);
 
  return (
    <div className="w-full h-screen overflow-hidden overflow-y-hidden border-none ">
      <h3 className="text-center py-2 text-gray-500">Phân loại</h3>
      <Tabs defaultValue={1} className="w-full h-full flex bg-gray-50 rounded-lg" orientation="vertical">
        <div className="w-[30%] h-full flex flex-col py-4 px-2  outline-none   ">
          <TabsList className="w-full h-full flex flex-col items-start justify-start overflow-x-hidden gap-4  mb-20 overflow-y-scroll   tabs-list" >
           {listLeftCategories?.map((category) => (
             <TabsTrigger 
              key={category.id}
              className={`text-xs font-semibold  max-sm:text-[10px] ${activeTab === category.id  ? 'custom-hover' : 'text-gray-500'}`} 
              value={category.id}
              onClick={() => setActiveTab(category.id)}
          >

              {category.name}
            </TabsTrigger>
           ))}
      
           
          </TabsList>
        </div>
        <div className=" w-[70%] h-screen border-none overflow-y-scroll  my-2 tabs-list">
          {listLeftCategories?.map((category) => (
             
              <TabsContent value={category.id} key={category.id}>
                <SlickSlider />
                <Category_Info category={category?.category} mainCategory={category} />
              </TabsContent>
          ))}
         
        
      
        </div>
        
        
      </Tabs>
    </div>
  )
}

export default TabsVerticel