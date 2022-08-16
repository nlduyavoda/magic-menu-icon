import { useRef, useState } from "react";
import './App.scss'

const toggleModal = (props, state) => {
  if (state) {
    props.current.classList.remove("active");
    props.current.classList.add("inactive");
    props.current.addEventListener("animationend", () => {
    });
  } else {
    props.current.classList.add("active");
    props.current.classList.remove("inactive");
  }
};

export default function App() {
  const [toggle, setActive] = useState(false);
  const middleItem = useRef(null);
  const containerRef = useRef(null);

  const handleToglge = () => {
    setActive(!toggle);
    if (containerRef) {
      toggleModal(containerRef, toggle);
    }
  };
  
  return (
    <div className="App">
      <div
        className="menu-icon-container"
        ref={containerRef}
      >
        <div className="item top" ></div>
        <div className="item middle" ref={middleItem}></div>
        <div className="item bottom" ></div>
      </div>

      <button onClick={handleToglge}>toggle</button>
    </div>
  );
}
