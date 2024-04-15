import React from "react";
import useTheme from "../contexts/theme";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-5 bg-[#8F88FF] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#FFE86E] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2B2727]"></div>
      <span
        className={`ml-3 text-sm font-semibold font-body ${
          themeMode === "dark"
            ? "lg:text-white"
            : "text-white lg:text-[#4731D3]"
        }`}
      >
        {themeMode === "dark" ? "LIGHT MODE" : "DARK MODE"}
      </span>
    </label>
  );
}

export default ThemeBtn;
