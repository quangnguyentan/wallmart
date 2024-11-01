import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  // Cập nhật trạng thái khi theme thay đổi
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);
  
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    console.log(newTheme)
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode); // Cập nhật trạng thái sau khi thay đổi theme
  };
  useEffect(() => {
    const element = document?.getElementById('airplane-mode-dark');
    const spanEl = element?.querySelector("span")
    if(spanEl) {
      spanEl?.classList?.add('custom-thumb');
    }
}, []); 
  return (
    <>
      {theme === "light" ? <div className="flex items-center gap-4">
      <span className="text-gray-500">{isDarkMode ? "Chế độ tối" : "Chế độ sáng"}</span>
      <Switch
        className="switch-custom-light"
        id="airplane-mode-light"
        checked={isDarkMode}
        onClick={toggleTheme}
      />
    </div> : <div className="flex items-center gap-4">
      <span className="text-white">{isDarkMode ? "Chế độ tối" : "Chế độ sáng"}</span>
      <Switch
        id="airplane-mode-dark"
        className="switch-custom-dark"
        checked={isDarkMode}
        onClick={toggleTheme}
      />
    </div>}
    </>
  );
}
