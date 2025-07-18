import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { currentColor, setColor, setMode, currentMode, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-500 bg-white dark:[#484852] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color ml-4 p-4">
          <p className="font-semibold text-xl">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => {
                setMode("Light");
              }}
              checked={currentMode === "Light" ? true : false}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={() => {
                setMode("Dark");
              }}
              checked={currentMode === "Dark" ? true : false}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color ml-4 p-4">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-3 mt-4">
            {themeColors.map((color, index) => (
              <TooltipComponent
                content={color.name}
                position="TopCenter"
                key={index}
              >
                <div className="relative mt-2 flex gap-5 items-center cursor-pointer">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: color.color }}
                    onClick={() => {
                      setColor(color.color);
                    }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        color.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
