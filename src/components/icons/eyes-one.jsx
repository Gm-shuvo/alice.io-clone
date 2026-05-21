"use client";

import React, { useId } from "react";

export const EyesOne = () => {
  const id = useId();

  const leftClip = `${id}-left`;
  const rightClip = `${id}-right`;

  return (
    <div className="flex gap-4 items-center justify-center">
      {/* LEFT EYE */}
      <svg
        className="w-[40px] h-[30px]"
        viewBox="0 0 26 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={leftClip}>
            <path d="M12.7864 0C6.90566 0 1.81183 5.83236 0 8.74854C1.98438 11.5957 7.31979 17.2901 12.7864 17.2901C18.253 17.2901 23.6919 11.3541 25.7281 8.38614C23.8645 5.59076 18.6671 0 12.7864 0Z" />
          </clipPath>
        </defs>

        {/* eye white */}
        <path
          d="M12.7864 0C6.90566 0 1.81183 5.83236 0 8.74854C1.98438 11.5957 7.31979 17.2901 12.7864 17.2901C18.253 17.2901 23.6919 11.3541 25.7281 8.38614C23.8645 5.59076 18.6671 0 12.7864 0Z"
          fill="white"
        />

        {/* pupil */}
        <g clipPath={`url(#${leftClip})`} transform="translate(4 3)">
          <ellipse cx="13" cy="9" rx="4.4" ry="8.2" fill="#0D0D0D" />
        </g>
      </svg>

      {/* RIGHT EYE */}
      <svg
        className="w-[40px] h-[30px]"
        viewBox="0 0 26 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={rightClip}>
            <path d="M12.7864 0C6.90566 0 1.81183 5.83236 0 8.74854C1.98438 11.5957 7.31979 17.2901 12.7864 17.2901C18.253 17.2901 23.6919 11.3541 25.7281 8.38614C23.8645 5.59076 18.6671 0 12.7864 0Z" />
          </clipPath>
        </defs>

        {/* eye white */}
        <path
          d="M12.7864 0C6.90566 0 1.81183 5.83236 0 8.74854C1.98438 11.5957 7.31979 17.2901 12.7864 17.2901C18.253 17.2901 23.6919 11.3541 25.7281 8.38614C23.8645 5.59076 18.6671 0 12.7864 0Z"
          fill="white"
        />

        {/* pupil */}
        <g clipPath={`url(#${rightClip})`} transform="translate(4 3)">
          <ellipse cx="13" cy="9" rx="4.4" ry="8.2" fill="#0D0D0D" />
        </g>
      </svg>
    </div>
  );
};
