import logo_login from "@/assets/logo_login.png"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useMediaQuery } from "@mui/material";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apiLoginSuccess, apiRegister } from "@/services/authService";
import { loginSuccessAction } from "@/stores/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import {  Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
const Login = () => {
    const [activeTab, setActiveTab] = useState('phone');
    const [isLogin, setIsLogin] = useState(true)
    const isMobile = useMediaQuery("(max-width:600px)");
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const location = useLocation();
    const showAlert = location.state?.showAlert || false;
    const [alert, setAlert] = useState(false);
    useEffect(() => {
      if (showAlert) {
        setAlert(true);
        const timer = setTimeout(() => {
          setAlert(false);
        }, 10000);
  
        // Dọn dẹp timeout khi component unmount
        return () => clearTimeout(timer);
      }
    }, [showAlert]);
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      resetField,
      watch,
      formState: { errors },
      reset
    } = useForm();
    
    const dispatch = useDispatch();
    const router = useNavigate();
    const { isLoggedIn, token } = useSelector((state) => state.auth);

   useEffect(() => {
    if (isLoggedIn && token) {
      if(window.location.pathname === "/login") {
        navigate("/")
        localStorage.setItem("page", 0)
      }
    } 
  }, [isLoggedIn, token, navigate]);
    const onLogin = async (data) => {
      try {
          const rs = await apiLoginSuccess(data);
          if (rs?.success === 0) {
            dispatch(loginSuccessAction(data));
            reset()
            router("/");
            // toast.success("Đăng nhập thành công");
          } else {
            toast.error("Sai tên đăng nhập hoặc mật khẩu");
          }
      } catch (error) {
        console.error(error);
        toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
      }
    };
    const onRegister = async(data) => {
      console.log(data)
       try{
        const res = await apiRegister(data);
        if (res?.success) {
          reset()
          setIsLogin(!isLogin)
          toast.success("Đăng kí thành công");
        
        }
        if (!res?.success) {
          toast?.error(res.message);
        }
       }catch(error) {
        console.error(error);
        toast.error("Đã xảy ra lỗi, vui lòng thử lại sau");
       }
    }
  return (
    <>
       
       {isLogin ? 
       <form onSubmit={handleSubmit(onLogin)}>
       <div className="flex flex-col gap-12 max-sm:gap-4 w-full h-screen px-2 ">
        <div className="flex items-center w-full gap-32">
        <KeyboardArrowLeftIcon
            sx={{ fontSize  : `${isMobile ? "40px" : "40px"}`}}
            className="text-gray-400 cursor-pointer"
            onClick={() => {
              navigate("/")
              localStorage.setItem("page", 0)
            }}
          />
          <h3 className="text-gray-500 text-center flex items-center justify-start w-full max-sm:text-base text-lg">Đăng nhập</h3>     
        </div>
        <img src={logo_login} alt="logo_login" className="w-[73px] h-[73px] max-sm:w-10 max-sm:h-10" />
        <div className="flex flex-col gap-4 relative">
            <h3 className="text-3xl font-bold max-sm:text-lg">Chào mừng đăng nhập</h3>
            <h3 className="text-3xl font-bold max-sm:text-lg">Wallmart</h3>
            {alert && (
              <div className="absolute top-10 z-20 w-[80%] px-4 text-center h-20 left-0 mx-auto bg-black opacity-80 rounded-xl ">
                <span className="text-white w-full h-full flex items-center justify-center">
                  Tài khoản của bạn đã bị khóa! Vui lòng liên hệ CSKH để biết thêm chi tiết!
                </span>
              </div>
            )}
        </div>
        <Tabs defaultValue="phone" className="w-[450px] max-sm:w-[350px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="phone"  className={`text-lg max-sm:text-sm ${activeTab === "phone" ? " custom-switch" : ""}`} onClick={() => {
          setActiveTab("phone")
          reset()
        }}>Đăng nhập di động</TabsTrigger>
        <TabsTrigger value="email" className={`text-lg max-sm:text-sm ${activeTab === "email" ? " custom-switch" : ""}`} onClick={() => {
          setActiveTab("email")
          reset()
        }}>Đăng nhập hộp thư</TabsTrigger>
      </TabsList>
      <TabsContent value="phone" className="w-[450px] max-sm:w-[350px]">
       {activeTab === "phone" && <div className="flex flex-col gap-10 py-8">
       <div className="flex flex-col gap-4">
       <input type="text" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto" placeholder="Vui lòng nhập số điện thoại" {...register("phone", {
                  required: "Số điện thoại là bắt buộc",
                  validate: (value) => {
                    if (value.length < 10 ||  value.length > 11) {
                      return "Vui lòng điền đúng số điện thoại";
                    }
                  },
                })} />
        {errors.phone && (
              <p className="text-red-500 text-xs px-2">{errors.phone.message}</p>
            )}
       {/* <input type="password" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto" placeholder="Vui lòng nhập mật khẩu"  {...register("password", {
                  required: "Mật khẩu là bắt buộc",
                  validate: (value) => {
                    if (value.length < 5 ) {
                      return "Vui lòng điền mật khẩu lớn hơn 4 kí tự";
                    }
                  },
                })}/> */}
                 <div className="relative flex items-center">
                    <input
                      type={hiddenPassword ? "password" : "text"}
                      placeholder="Vui lòng nhập mật khẩu"
                      {...register("password", {
                        required: "Mật khẩu là bắt buộc",
                        validate: (value) => {
                          if (value.length < 5 ) {
                            return "Vui lòng điền mật khẩu lớn hơn 4 kí tự";
                          }
                        },
                      })}
                      className="h-12 px-4  shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto"
                    />
                    {hiddenPassword ? (
                      <Eye
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute top-3.5 right-8 max-sm:top-[18px] max-sm:w-4 text-gray-400 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute top-3.5 right-8 max-sm:top-[18px] max-sm:w-4 text-gray-400 cursor-pointer"
                      />
                    )}
                  </div>
                  {/* errors will return when field validation fails  */}
                  
                  {errors.password && (
                        <p className="text-red-500 text-xs px-2">{errors.password.message}</p>
                      )}
                </div>
       {/* <div className="flex flex-col gap-2">
       <div className="flex gap-2 items-center max-sm:text-xs max-sm:gap-1">
            <input type="radio" className="w-4 h-4 max-sm:w-2 max-sm:h-2 cursor-pointer" {...register("radio", {
                  required: "Vui lòng đọc điều khoản",
                 
                })}/>
            <span className="break-words text-gray-500">
            Tôi đã đọc và đồng ý .Chính sách bảo mật người dùng
            </span>
        </div>
        {errors.radio && (
              <p className="text-red-500 text-xs px-2">{errors.radio.message}</p>
            )}
       </div> */}
        
        <div className="px-8 w-full">
        <button className="button w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2 " type="submit">Đăng nhập</button>
        </div>
        <div>
        <h3 className="text-gray-500 text-xl cursor-pointer max-sm:text-sm hover:text-red-500 " onClick={() => {
          setIsLogin(!isLogin)
          reset()
          // setActiveTab("phone")
        }
        }>Đăng kí người dùng mới</h3>
        </div>
        
       </div>}

      </TabsContent>
      <TabsContent value="email" className="w-[450px] max-sm:w-[350px]">
        {activeTab === "email" && <>

      <div className="flex flex-col gap-10 py-8">
       <div className="flex flex-col gap-4">
          <input type="text" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto" placeholder="Vui lòng nhập email" {...register("email", {
                  required: "Email là bắt buộc",
                  validate: (value) => {
                    if (!value.toLowerCase()
                      .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      )) {
                      return "Vui lòng điền đúng email";
                    }
                  },
                })} />
         {errors.email && (
              <p className="text-red-500 text-xs px-2">{errors.email.message}</p>
            )}
          <div className="relative flex items-center">
                    <input
                      type={hiddenPassword ? "password" : "text"}
                      placeholder="Vui lòng nhập mật khẩu"
                      {...register("password", {
                        required: "Mật khẩu là bắt buộc",
                        validate: (value) => {
                          if (value.length < 5 ) {
                            return "Vui lòng điền mật khẩu lớn hơn 4 kí tự";
                          }
                        },
                      })}
                      className="h-12 px-4  shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto"
                    />
                    {hiddenPassword ? (
                      <Eye
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute top-3.5 right-8 max-sm:top-[18px] max-sm:w-4 text-gray-400 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute top-3.5 right-8 max-sm:top-[18px] max-sm:w-4 text-gray-400 cursor-pointer"
                      />
                    )}
                  </div>
          {errors.password && (
                  <p className="text-red-500 text-xs px-2">{errors.password.message}</p>
                )}
          </div>
       {/* <div className="flex flex-col gap-2">
       <div className="flex gap-2 items-center max-sm:text-xs max-sm:gap-1">
            <input type="radio" className="w-4 h-4 max-sm:w-2 max-sm:h-2 cursor-pointer"   {...register("radio", {
                  required: "Vui lòng đọc điều khoản",
                 
                })}/>
            <span className="break-words text-gray-500">
            Tôi đã đọc và đồng ý .Chính sách bảo mật người dùng
            </span>
           
            
        </div>
        {errors.radio && (
              <p className="text-red-500 text-xs px-2">{errors.radio.message}</p>
            )}
       </div> */}
        <div className="px-8 w-full">
        <button className="button w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2 " type="submit">Đăng nhập</button>
        </div>
        <h3 className="text-gray-500 text-xl cursor-pointer max-sm:text-sm hover:text-red-500 " onClick={() => {
          setIsLogin(!isLogin)
          reset()
          // setActiveTab("phone")
        }
        }>Đăng kí người dùng mới</h3>
        
       </div>
       </>}
      </TabsContent>
    </Tabs>
        </div> 
        </form>
     : 
     <form onSubmit={handleSubmit(onRegister)}>
     <div className="flex flex-col gap-12  w-full h-screen px-4">
        <div className="flex items-center w-full">
        <KeyboardArrowLeftIcon
            sx={{ fontSize  : `${isMobile ? "40px" : "40px"}`}}
            className="text-gray-400"
            onClick={() => window.history.back()}
          />
          <h3 className="text-gray-500 text-center flex items-center justify-center w-full max-sm:text-base text-lg">Đăng ký</h3>     
        </div>
        <img src={logo_login} alt="logo_login" className="w-[73px] h-[73px] max-sm:w-10 max-sm:h-10" />
        <div className="flex flex-col gap-4">
            <h3 className="text-3xl max-sm:text-lg font-bold">Chào mừng đăng ký</h3>
            <h3 className="text-3xl max-sm:text-lg font-bold">Wallmart</h3>
        </div>
        <Tabs defaultValue="phone" className="w-[450px] max-sm:w-[350px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="phone"  className={`text-lg max-sm:text-sm ${activeTab === "phone" ? " custom-switch" : ""}`} onClick={() => {
          setActiveTab("phone")
          reset()
        }}>Đăng ký di động</TabsTrigger>
        <TabsTrigger value="email" className={`text-lg max-sm:text-sm ${activeTab === "email" ? " custom-switch" : ""}`} onClick={() => {
          setActiveTab("email")
          reset()
        }}>Đăng ký hộp thư</TabsTrigger>
      </TabsList>
      <TabsContent value="phone" className="w-[450px] max-sm:w-[350px]">
      {activeTab === "phone" &&  <div className="flex flex-col gap-10 py-8">
       <div className="flex flex-col gap-4">
       <input type="text" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto" placeholder="Vui lòng nhập số điện thoại" {...register("phone", {
                  required: "Số điện thoại là bắt buộc",
                  validate: (value) => {
                    if (value.length < 10 ||  value.length > 11) {
                      return "Vui lòng điền đúng số điện thoại";
                    }
                  },
                })} />
        {errors.phone && (
              <p className="text-red-500 text-xs px-2">{errors.phone.message}</p>
            )}
       <div className="relative flex items-center">
                    <input
                      type={hiddenPassword ? "password" : "text"}
                      placeholder="Vui lòng nhập mật khẩu"
                      {...register("password", {
                        required: "Mật khẩu là bắt buộc",
                        validate: (value) => {
                          if (value.length < 5 ) {
                            return "Vui lòng điền mật khẩu lớn hơn 4 kí tự";
                          }
                        },
                      })}
                      className="h-12 px-4  shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto"
                    />
                    {hiddenPassword ? (
                      <Eye
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute top-3.5 right-8 max-sm:top-[18px] max-sm:w-4 text-gray-400 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute top-3.5 right-8 max-sm:top-[18px] max-sm:w-4 text-gray-400 cursor-pointer"
                      />
                    )}
                  </div>
        {errors.password && (
              <p className="text-red-500 text-xs px-2">{errors.password.message}</p>
            )}
       </div>
       <div className="flex flex-col gap-2">
       <div className="flex gap-2 items-center max-sm:text-xs max-sm:gap-1">
            <input type="radio" className="w-4 h-4 max-sm:w-2 max-sm:h-2 cursor-pointer" {...register("radio", {
                  required: "Vui lòng đọc điều khoản",
                 
                })}/>
            <span className="break-words text-gray-500">
            Tôi đã đọc và đồng ý .Chính sách bảo mật người dùng
            </span>
        </div>
        {errors.radio && (
              <p className="text-red-500 text-xs px-2">{errors.radio.message}</p>
            )}
       </div>
        <div className="px-8 w-full">
        <button className="button w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2 " type="submit">Đăng ký ngay</button>
         
        </div>
        <h3 className="text-gray-500 text-xl cursor-pointer max-sm:text-sm hover:text-red-500" onClick={() => {
          setIsLogin(!isLogin)
          reset()
          // setActiveTab("phone")
        }
        }>Đăng nhập ngay</h3>
       </div>}
      </TabsContent>

      <TabsContent value="email" className="w-[450px] max-sm:w-[350px]">
      {activeTab === "email" && <div className="flex flex-col gap-10 py-8">
       <div className="flex flex-col gap-4">
       <input type="text" className="h-12 px-4 shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto" placeholder="Vui lòng nhập email" {...register("email", {
                  required: "Email là bắt buộc",
                  validate: (value) => {
                    if (!value.toLowerCase()
                      .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      )) {
                      return "Vui lòng điền đúng email";
                    }
                  },
                })} />
         {errors.email && (
              <p className="text-red-500 text-xs px-2">{errors.email.message}</p>
            )}
       <div className="relative flex items-center">
                    <input
                      type={hiddenPassword ? "password" : "text"}
                      placeholder="Vui lòng nhập mật khẩu"
                      {...register("password", {
                        required: "Mật khẩu là bắt buộc",
                        validate: (value) => {
                          if (value.length < 5 ) {
                            return "Vui lòng điền mật khẩu lớn hơn 4 kí tự";
                          }
                        },
                      })}
                      className="h-12 px-4  shadow-sm outline-none font-medium placeholder:text-gray-white max-sm:placeholder:text-xs w-[90%] mx-auto"
                    />
                    {hiddenPassword ? (
                      <Eye
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute top-3.5 right-8 max-sm:top-[18px] max-sm:w-4 text-gray-400 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute top-3.5 right-8 max-sm:top-[18px] max-sm:w-4 text-gray-400 cursor-pointer"
                      />
                    )}
                  </div>
       {errors.password && (
              <p className="text-red-500 text-xs px-2">{errors.password.message}</p>
            )}
       </div>
       <div className="flex flex-col gap-2">
       <div className="flex gap-2 items-center max-sm:text-xs max-sm:gap-1">
            <input type="radio" className="w-4 h-4 max-sm:w-2 max-sm:h-2 cursor-pointer"   {...register("radio", {
                  required: "Vui lòng đọc điều khoản",
                 
                })}/>
            <span className="break-words text-gray-500">
            Tôi đã đọc và đồng ý .Chính sách bảo mật người dùng
            </span>
           
            
        </div>
        {errors.radio && (
              <p className="text-red-500 text-xs px-2">{errors.radio.message}</p>
            )}
       </div>
        <div className="px-8 w-full">
        <button className="button w-full py-4 px-4 bg-red-500 rounded-full text-white text-xl max-sm:text-base max-sm:py-2 " type="submit">Đăng ký ngay</button>
        </div>
        <h3 className="text-gray-500 text-xl cursor-pointer max-sm:text-sm hover:text-red-500" onClick={() => {
          setIsLogin(!isLogin)
          reset()
          // setActiveTab("phone")
        }
        }>Đăng nhập ngay</h3>
       </div>}

      </TabsContent>
    </Tabs>
    </div>
    </form>

    }
    </>
  )
}

export default Login