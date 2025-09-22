import React, { useEffect } from "react";

const content = [
  { id: "hero", label: "01" },
  { id: "about", label: "02" },
  { id: "experience", label: "03" },
  { id: "technologies", label: "04" },
  { id: "projects", label: "05" },
  { id: "contact", label: "06" },
];

function PageObserver() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      // const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const scrollPercentage =
        (scrollPosition / (documentHeight - window.innerHeight)) * 100;

      const scrollBar = document.getElementById("scrollBar");
      if (scrollBar) {
        scrollBar.style.height = `${scrollPercentage}%`;
      }
    });
  }, []);

  return (
    <div
      id="PageObserver"
      className="fixed w-1 h-[calc(100%-10rem)] bg-gradient-to-b from-pink-300 via-slate-300 to-purple-500 start-96 top-1/2 translate-y-[-50%] rounded-full"
    >
      <div className="relative w-full h-full bg-transparent">
        <div id="scrollBar" className="w-1 bg-slate-700" />
        {content.map((item, index) => {
          let position = index * (100 / (content.length - 1)).toFixed(0);

          if (index === 0) position = 0;

          if (index === content.length - 1) position = 100;

          return (
            <div
              key={item.id}
              className={`w-6 h-6 absolute left-1/2 bg-white rounded-full translate-x-[-50%] cursor-pointer hover:scale-150 duration-500`}
              style={{ top: `${position}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PageObserver;
