import * as React from "react"
const Chat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...props}
  >
    <g strokeLinecap="round">
      <path
        strokeWidth={2}
        d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={3}
        d="M8 12h.009m3.982 0H12m3.991 0H16"
      />
    </g>
  </svg>
)
export default Chat
