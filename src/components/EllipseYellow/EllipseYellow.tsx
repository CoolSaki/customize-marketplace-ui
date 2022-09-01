import * as React from 'react'
import './EllipseYellow.css'

export const EllipseYellow = (): JSX.Element => (
  <div className="EllipseYellow">
    <svg
      width="155"
      height="155"
      viewBox="0 0 155 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_178_1651)">
        <circle
          cx="77.5"
          cy="77.5"
          r="37.5"
          fill="url(#paint0_linear_178_1651)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_178_1651"
          x="0"
          y="0"
          width="155"
          height="155"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_178_1651"
          />
        </filter>
        <linearGradient
          id="paint0_linear_178_1651"
          x1="55"
          y1="82"
          x2="116.364"
          y2="82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7C4C" />
          <stop offset="1" stopColor="#FFB03A" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)
