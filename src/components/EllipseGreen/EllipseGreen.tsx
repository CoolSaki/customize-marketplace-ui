import * as React from 'react'
import './EllipseGreen.css'

export const EllipseGreen = (): JSX.Element => (
  <div className="EllipseGreen">
    <svg
      width="169"
      height="168"
      viewBox="0 0 169 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_178_1650)">
        <ellipse
          cx="84.5"
          cy="84"
          rx="34.5"
          ry="34"
          fill="url(#paint0_linear_178_1650)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_178_1650"
          x="0"
          y="0"
          width="169"
          height="168"
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
            stdDeviation="25"
            result="effect1_foregroundBlur_178_1650"
          />
        </filter>
        <linearGradient
          id="paint0_linear_178_1650"
          x1="61.592"
          y1="100.592"
          x2="110.844"
          y2="68.3852"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29C98F" />
          <stop offset="1" stopColor="#66D8AF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)
