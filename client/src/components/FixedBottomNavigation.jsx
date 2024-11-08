import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

import HomePage from "./Home.responsive";
import Profile from "./Profile.resposive";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Classify from "./Classify";
import Cart from "./Cart";
import { useMediaQuery } from "@mui/material";
export default function FixedBottomNavigation() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const messageExamples = [
    {
      page: <HomePage />,
    },
    {
      page: <Classify />,
    },
    {
      page: <Cart />,
    },
    {
      page: <Profile />,
    },
  ];
  if (!localStorage.getItem("page")) {
    localStorage.setItem("page", 2);
  }
  const page = localStorage.getItem("page");
  const [value, setValue] = useState(Number(page));
  const [activeComponent, setActiveComponent] = useState(
    messageExamples[2].page
  );
  useEffect(() => {
    setActiveComponent(messageExamples[value].page);
  }, [value]);
  return (
    <div className="xl:w-full w-full">
      <CssBaseline />
      {activeComponent}
      <Paper
        sx={{
          position: "fixed",
          overflow: "hidden",
          bottom: 0,
          left: 0,
          right: 0,
          boxShadow: "none",
          "&:focus": {
            color: "#ff9e66",
          },
          opacity: 0.8,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          className="flex lg:w-[30%] mx-auto bg-black focus:bg-[#ff9e66]"
          value={value}
          onChange={(event, newValue) => {
            localStorage.setItem("page", newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label={
              <span
                className="custom-label"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "10px",
                  color: "black",
                }}
              >
                Trang chủ
              </span>
            }
            sx={{
              fontWeight: 600,
            }}
            icon={
              <HomeOutlinedIcon
                sx={{
                  fontSize: `${isMobile ? "20px" : "30px"}`,
                  "&:focus": {
                    color: "#ff9e66",
                  },
                }}
              />
            }
          />
          <BottomNavigationAction
            label={
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "10px",
                  color: "black",
                }}
              >
                Phân loại
              </span>
            }
            sx={{
              fontWeight: 600,
            }}
            icon={
              <CategoryOutlinedIcon
                sx={{
                  fontSize: `${isMobile ? "20px" : "30px"}`,
                  "&:focus": {
                    color: "#ff9e66",
                  },
                }}
              />
            }
          />
          <BottomNavigationAction
            label={
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "10px",
                  color: "black",
                }}
              >
                Giỏ hàng
              </span>
            }
            sx={{
              fontWeight: 600,
            }}
            icon={
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: `${isMobile ? "20px" : "30px"}`,
                  "&:focus": {
                    color: "#ff9e66",
                  },
                }}
              />
            }
          />
          <BottomNavigationAction
            label={
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "10px",
                  color: "black",
                }}
              >
                Của tôi
              </span>
            }
            sx={{
              fontWeight: 600,
            }}
            icon={
              <PersonOutlineOutlinedIcon
                sx={{
                  fontSize: `${isMobile ? "20px" : "30px"}`,
                  "&:focus": {
                    color: "#ff9e66",
                  },
                }}
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
