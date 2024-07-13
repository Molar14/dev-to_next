const DevLogo = (props) => (
    <svg width="100" height="50" viewBox="0 0 370 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="225" height="150" fill="#0A0A0A" rx="20" ry="20" />
    <text 
      x="30%" 
      y="40%" 
      fontFamily="Arial, sans-serif" 
      fontSize="80" 
      fill="#FFFFFF" 
      textAnchor="middle" 
      alignmentBaseline="central"
      dy=".3em"
    >
      DEV
    </text>
  </svg>
);

  const Lupa = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64">
    <circle cx="27" cy="27" r="16" stroke="black" strokeWidth="4" fill="none"/>
    <line x1="41" y1="41" x2="58" y2="58" stroke="black" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);
  
  export { Lupa, DevLogo};