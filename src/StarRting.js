import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starcontainerStyle = {
  display: "flex",
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages = [],
}) {
  const [rating, setRating] = useState(0);
  const [temprating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  const texStyle = {
    margin: "0",
    lineHeight: "1",
    color,
    fontSize: `${size}`,
  };

  return (
    <div style={containerStyle}>
      <div style={starcontainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i}>
            onrate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={temprating ? temprating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          </Star>
        ))}
      </div>
      <p style={texStyle}>
        {messages.length === maxRating
          ? messages[temprating ? temprating - 1 : rating - 1]
          : temprating || rating || ""}
      </p>
    </div>
  );
}

function Star({ children }) {
  const { onrate } = children;
  const starStyle = {
    width: `${children.size}`,
    height: `${children.size}`,
    display: "block",
    cursor: "pointer",
  };
  console.log(children);
  return (
    <span
      style={starStyle}
      onClick={onrate}
      onMouseEnter={children.onHoverIn}
      onMouseLeave={children.onHoverOut}
    >
      {children.full ? (
        <svg
          width={children.size}
          height="24"
          viewBox="0 0 24 24"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L14.5 8.5L21 9L16 13L18 20L12 16.5L6 20L8 13L3 9L9.5 8.5L12 2Z"
            fill="#fcc419"
            stroke="currentColor"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L14.5 8.5L21 9L16 13L18 20L12 16.5L6 20L8 13L3 9L9.5 8.5L12 2Z"
            // fill="#fcc419"
            stroke="currentColor"
          />
        </svg>
      )}
    </span>
  );
}
