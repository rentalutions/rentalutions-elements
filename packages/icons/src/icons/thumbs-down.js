import React, { forwardRef } from "react"
import p from "prop-types"
export const ThumbsDown = forwardRef(function ThumbsDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 2H19.67C20.236 1.98999 20.7859 2.18814 21.2154 2.55682C21.6449 2.9255 21.9241 3.43906 22 4V11C21.9241 11.5609 21.6449 12.0745 21.2154 12.4432C20.7859 12.8119 20.236 13.01 19.67 13H17M10 15V19C10 19.7957 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L17 13V2H5.72C5.23767 1.99455 4.76962 2.1636 4.40209 2.476C4.03457 2.7884 3.79232 3.2231 3.72 3.7L2.34 12.7C2.29649 12.9866 2.31583 13.2793 2.39666 13.5578C2.47749 13.8362 2.6179 14.0937 2.80814 14.3125C2.99839 14.5313 3.23392 14.7061 3.49843 14.8248C3.76294 14.9435 4.05009 15.0033 4.34 15H10Z"></path>
    </svg>
  )
})

ThumbsDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

ThumbsDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

ThumbsDown.displayName = "ThumbsDown"
