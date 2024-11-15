import Card_Product from '@/components/Card_Product'
import DrawRight from '@/components/drawRight';
import { apiGetProduct } from '@/services/productService';
import { apiGetStore } from '@/services/storeService';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Buy_Product_From_Admin = () => {
  const [productList, setproductList] = useState([])
  const { currentData } = useSelector((state) => state.user); 
  
  useEffect(() => {
    getUsers()
  }, []);

  let getUsers = async () => {
    try {
      const products = await apiGetProduct()
      setproductList(products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <Card_Product products={productList} hidden agent/>
    </div>
  )
}

export default Buy_Product_From_Admin