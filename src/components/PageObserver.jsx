import React, { useEffect, useState } from "react";

function PageObserver() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.scrollHeight;
      const percentage =
        (scrollPosition / (documentHeight - window.innerHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="PageObserver"
      className="hidden lg:block absolute w-1 h-[calc(100%-20rem)] bg-gradient-to-b from-pink-300 via-slate-300 to-purple-500 start-0 top-1/2 translate-y-[-50%] rounded-full"
    >
      <div className="relative w-full h-full bg-transparent">
        <div
          className="w-1 bg-slate-700 overflow-visible flex flex-col items-center justify-end transition-all duration-200 ease-out"
          style={{ height: `${scrollPercentage}%` }}
        >
          <div
            id="indicator"
            className="w-6 h-6 bg-white rounded-full cursor-pointer hover:scale-150 duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default PageObserver;
