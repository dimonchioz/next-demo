interface HamburgerMenuBtnProps {
  isMenuOpen: boolean;
}

export const HamburgerMenuBtn: React.FC<HamburgerMenuBtnProps> = ({
  isMenuOpen,
}) => {
  return (
    <button className="relative group">
      <div
        className={`relative flex overflow-hidden items-center justify-center rounded-full w-11 h-11 transform transition-all bg-primary ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md ${
          isMenuOpen && "ring-4"
        }`}
      >
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isMenuOpen && "translate-x-10"
            }`}
          ></div>
          <div
            className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
              isMenuOpen && "translate-x-10"
            }`}
          ></div>
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
              isMenuOpen && "translate-x-10"
            }`}
          ></div>

          <div
            className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
              isMenuOpen && "translate-x-0 w-12"
            }`}
          >
            <div
              className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                isMenuOpen && "rotate-45"
              }`}
            ></div>
            <div
              className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                isMenuOpen && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};
