

import { Link } from "react-router-dom"



const Category_Info = ({ category, mainCategory }) => {
  
  return (
    <div className="px-2 pb-28">
                <div className="grid grid-cols-3 gap-4 " >
            {category && category?.map((list) => (
                    <Link to="/list-product" key={list.id} state={list?.name}>
                    
                    <div className="flex flex-col gap-2 justify-center items-center cursor-pointer" >
                        <img src={list.thumbnail} alt={list.name} className="w-16 h-16 mix-blend-darken" />
                        <span className="text-center max-sm:text-xs">{list.name}</span>
                    </div></Link>
            ))}
                </div>    
           
      
    </div>
  )
}

export default Category_Info