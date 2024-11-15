import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { apiGetMyStore } from '@/services/storeService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pathImage } from '@/lib/helper';

import Detail_product_agent from '@/pages/Detail_product_agent';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function DrawBottom() {
  const [open, setOpen] = useState(false);
  const [storeList, setStoreList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // Hàm mở Drawer
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  // Fetch dữ liệu store
  const fetchStore = async () => {
    try {
      const store = await apiGetMyStore();
      setStoreList(store[0]);
      setLoading(false);  // Dữ liệu đã được tải
    } catch (error) {
      console.error(error);
      setLoading(false);  // Dù có lỗi thì cũng phải dừng loading
    }
  };

  useEffect(() => {
    fetchStore();
  }, []);
  const DrawerList = (
    <Box className="w-full" role="presentation" onClick={(e) => {
        toggleDrawer(false)
        e.preventDefault()
        e.stopPropagation()
    }}>
      <List className='flex items-center w-full h-screen'>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column w-full">
          <div id="content" className="overflow-y-scroll h-screen scrollbar-hide">
            <Topbar />
            <div className="container-fluid overflow-y-scroll h-screen scrollbar-hide pb-10">
            <Detail_product_agent/>
            </div>
          </div>
        </div>
      </List>
      <Divider />
      <List>
        
      </List>
    </Box>
  );

  return (
    <div>
      <button className="button" onClick={(e) => {
        if (!isLoading && storeList?.cart?.length > 0) {
          setOpen(true); 
        }
        e.preventDefault();
        e.stopPropagation()
        
      }}>
        <span>Add to cart</span>
        <div className="cart">
          <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
          </svg>
        </div>
      </button>

      {/* Drawer */}
      <Drawer open={open} anchor="bottom" onClose={() => setOpen(false)}>
        {isLoading ? (
          <div className="loading-indicator">Loading...</div>  
        ) : (
          DrawerList
        )}
      </Drawer>
    </div>
  );
}
