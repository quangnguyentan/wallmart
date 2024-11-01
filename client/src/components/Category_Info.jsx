import { list_info_product_classify } from "@/lib/helper"



const Category_Info = ({ categoryIndex }) => {
    console.log(categoryIndex)
  return (
    <div className="px-2 pb-28">
        {categoryIndex === 1 && <div>
                <div className="grid grid-cols-3 gap-4 " >
            {list_info_product_classify.map((list) => (
                    <div className="flex flex-col gap-2 justify-center items-center cursor-pointer" key={list.id}>
                        <img src={list.thumbnail} alt={list.name} className="w-16 h-16 mix-blend-darken" />
                        <span className="text-center">{list.name}</span>
                    </div>
            ))}
                </div>    
           
        </div>}
        {categoryIndex === 2 && <div>
                <div className="grid grid-cols-3 gap-4 " >
            {list_info_product_classify.map((list) => (
                    <div className="flex flex-col gap-2 justify-center items-center " key={list.id}>
                        <img src={list.thumbnail} alt={list.name} className="w-16 h-16 mix-blend-darken" />
                        <span className="text-center">{list.name}</span>
                    </div>
            ))}
                </div>    
           
        </div>}
    </div>
  )
}

export default Category_Info