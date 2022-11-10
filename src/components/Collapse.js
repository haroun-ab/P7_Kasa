import React from 'react';
import { useState, useRef } from 'react';
import '../styles/Collapse.css';
function Collapsible(props) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  // }
  return (
    <section>
      <h2
        onClick={() => {
          setOpen(!open);
          document.querySelector('.content').animate(
            [
              // keyframes
              { transform: 'transform: scaleY(0)' },
              { transform: 'transform: scaleY(1)' },
            ],
            {
              // timing options
              duration: 1000,
              iterations: 1,
            }
          );
        }}
      >
        {props.label}

        <svg
          style={
            open
              ? { transform: 'rotate(180deg)', top: '14px' }
              : { transform: 'rotate(0deg)' }
          }
          xmlns="http://www.w3.org/2000/svg"
          width="0.8em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1280"
        >
          <path
            fill="white"
            d="M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
          />
        </svg>
      </h2>

      <div
        className="content-parent"
        ref={contentRef}
        style={
          open
            ? {
                height: contentRef.current.scrollHeight + 'px',
              }
            : { height: '0px', overflow: 'hidden' }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </section>
  );
}

export default Collapsible;
