import { useTheme } from "./theme-provider";

const BottomBar = () => {
  const {  theme } = useTheme();

  return (
    <>
        {theme === "light" ? <div className='bg-white h-[250px] flex flex-col items-center justify-center  w-full'>
        <div className='w-2/3 flex flex-col gap-8'>
        <span className='text-center text-xs'>MeoVangTv Tất cả các tín hiệu phát sóng trực tiếp được người dùng thu thập hoặc tổng hợp từ các công cụ tìm kiếm, tất cả nội dung đều đến từ internet, chúng tôi không cung cấp bất kỳ tín hiệu phát sóng trực tiếp hoặc nội dung video nào. Nếu quyền của bạn bị vi phạm, vui lòng cho chúng tôi biết, chúng tôi sẽ giải quyết vấn đề đó như càng sớm càng tốt.
        </span>
        <span className='text-center text-xs'>
        MeoVangTv là ứng dụng cung cấp dịch vụ phát trực tuyến bóng rổ và bóng đá HD vì chúng tôi giữ bản quyền phát sóng các trận đấu này. Chúng tôi cũng cung cấp thông tin trận đấu toàn diện và kịp thời cho người hâm mộ 24 giờ một ngày. Trang web phát sóng trực tiếp hoàn toàn an toàn và ổn định mà không cần plugin, có các chương trình phát sóng thể thao trực tiếp mới nhất hàng ngày, phân tích dự đoán kết quả trận đấu bóng rổ và bóng đá dựa trên dữ liệu, hồ sơ lịch sử và phân tích trận đấu. Trang web phát sóng trực tiếp hoàn toàn an toàn và ổn định mà không cần plugin, thu thập thông tin phát sóng thể thao trực tiếp mới nhất mỗi ngày, dự đoán kết quả trận đấu bóng rổ và bóng đá dựa trên dữ liệu lớn ban đầu, hồ sơ lịch sử, phân tích tình báo.

          
        </span>
        <span className='text-center text-xs'>  Phiên bản: 6.1.4 （50）</span>
        </div>
    </div> : <div className='bg-[#16181a] text-white flex flex-col items-center justify-center  w-full h-[250px]'>
        <div className='w-2/3 flex flex-col gap-8'>
        <span className='text-center text-xs'>MeoVangTv  Tất cả các tín hiệu phát sóng trực tiếp được người dùng thu thập hoặc tổng hợp từ các công cụ tìm kiếm, tất cả nội dung đều đến từ internet, chúng tôi không cung cấp bất kỳ tín hiệu phát sóng trực tiếp hoặc nội dung video nào. Nếu quyền của bạn bị vi phạm, vui lòng cho chúng tôi biết, chúng tôi sẽ giải quyết vấn đề đó như càng sớm càng tốt.
        </span>
        <span className='text-center text-xs'>
        MeoVangTv là ứng dụng cung cấp dịch vụ phát trực tuyến bóng rổ và bóng đá HD vì chúng tôi giữ bản quyền phát sóng các trận đấu này. Chúng tôi cũng cung cấp thông tin trận đấu toàn diện và kịp thời cho người hâm mộ 24 giờ một ngày. Trang web phát sóng trực tiếp hoàn toàn an toàn và ổn định mà không cần plugin, có các chương trình phát sóng thể thao trực tiếp mới nhất hàng ngày, phân tích dự đoán kết quả trận đấu bóng rổ và bóng đá dựa trên dữ liệu, hồ sơ lịch sử và phân tích trận đấu. Trang web phát sóng trực tiếp hoàn toàn an toàn và ổn định mà không cần plugin, thu thập thông tin phát sóng thể thao trực tiếp mới nhất mỗi ngày, dự đoán kết quả trận đấu bóng rổ và bóng đá dựa trên dữ liệu lớn ban đầu, hồ sơ lịch sử, phân tích tình báo.

          
        </span>
        <span className='text-center text-xs'>  Phiên bản: 6.1.4 （50）</span>
        </div>
    </div>}
    </>
  )
}

export default BottomBar