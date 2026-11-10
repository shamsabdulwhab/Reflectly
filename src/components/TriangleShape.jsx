function TriangleShape({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 108" aria-hidden="true">
      <polygon
        points="8,54 96,8 96,100"
        fill="#e94744"
        stroke="#111111"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TriangleShape
