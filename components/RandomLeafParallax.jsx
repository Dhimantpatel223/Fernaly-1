
'use client';
import React, { useEffect, useRef } from 'react';

const LEAF_COUNT = 25;
const LEAF_SVGS = Array.from({ length: 51 }, (_, i) => `/leaf-vector/${i + 1}.svg`);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLeafSvgs(count) {
  const shuffled = [...LEAF_SVGS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const RandomLeafParallax = ({ sectionSelector = '.section', leafCount = LEAF_COUNT }) => {
  const leavesRef = useRef([]);
  const leafSvgs = useRef(getRandomLeafSvgs(leafCount));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      leavesRef.current.forEach((leaf, idx) => {
        if (!leaf) return;
        // Parallax: each leaf moves at a different speed
        const speed = 0.2 + (idx % 10) * 0.07;
        leaf.style.transform = `translateY(${scrollY * speed}px) rotate(${leaf.dataset.rotate}deg)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Randomly position leaves in the section
  const leaves = Array.from({ length: leafCount }).map((_, i) => {
    const top = getRandomInt(5, 85); // percent
    const left = getRandomInt(2, 95); // percent
    const size = getRandomInt(32, 80); // px
    const rotate = getRandomInt(-45, 45);
    const opacity = Math.random() * 0.5 + 0.15;
    return (
      <img
        key={i}
        ref={el => (leavesRef.current[i] = el)}
        src={leafSvgs.current[i]}
        alt="leaf"
        style={{
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: 'auto',
          opacity,
          pointerEvents: 'none',
          zIndex: 1,
          transform: `rotate(${rotate}deg)`
        }}
        data-rotate={rotate}
        draggable={false}
      />
    );
  });

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} aria-hidden="true">
      {leaves}
    </div>
  );
};

export default RandomLeafParallax;
