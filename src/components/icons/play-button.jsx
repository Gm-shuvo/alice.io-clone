import React from "react";

const PlayButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="play-button group cursor-pointer">
      <div className="play-button-inner-wrap relative">
        {/* Inner Circle */}
        <div className="play-button-inner">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="31" cy="31" r="31" fill="#E686B4" />
            <path
              className="play-button__arrow"
              d="M20 16 L46 31 L20 46 Z"
              fill="currentColor"
              stroke="#0d0d0d"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Inner Shadow */}
        <div className="play-button-inner-shadow absolute inset-0 rounded-full " />

        {/* Animated Rays */}
        <div className="play-button-rays absolute inset-0">
          <svg
            className="rays-svg w-full h-full"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="rays">
              {Array.from({ length: 48 }).map((_, i) => (
                <line
                  key={i}
                  x1="150"
                  y1="150"
                  x2="150"
                  y2="-10"
                  transform={`rotate(${i * 15},150,150)`}
                  stroke="#0d0d0d"
                  strokeLinecap="round"
                  strokeWidth="2"
                  strokeDasharray="20 200"
                  style={{ animationDelay: `${(i % 2) * -0.02}s` }}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
