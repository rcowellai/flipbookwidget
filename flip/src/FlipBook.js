// src/FlipBook.js
import React, { useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './FlipBook.css';

// Import images
import page_1_png from './images/page_1_png.png';
import page_2_png from './images/page_2_png.png';
import page_3_png from './images/page_3_png.png';
import page_4_png from './images/page_4_png.png';
import page_5_png from './images/page_5_png.png';
import page_6_png from './images/page_6_png.png';
import page_7_png from './images/page_7_png.png';
import page_8_png from './images/page_8_png.png';
import page_9_png from './images/page_9_png.png';
import page_10_png from './images/page_10_png.png';
import page_11_png from './images/page_11_png.png';
import page_12_png from './images/page_12_png.png';
import page_13_png from './images/page_13_png.png';

const Page = React.forwardRef(({ content, isImage }, ref) => (
  <div className="page" ref={ref}>
    <div className="page-content">
      {isImage ? (
        <img src={content} alt="Page Content" className="page-image" loading="lazy" />
      ) : (
        <h2 className="page-text">{content}</h2>
      )}
    </div>
  </div>
));

function FlipBook() {
  const flipBookRef = useRef(null);

  useEffect(() => {
    // After a 1-second delay, flip directly to page index 1
    // This ensures the cover (page 1) shows on load, then auto flips to display pages 2 & 3.
    const timer = setTimeout(() => {
      if (flipBookRef.current) {
        flipBookRef.current.pageFlip().flip(1);
      }
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  const nextButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <div className="flipbook-container">
      <HTMLFlipBook
        width={400}
        height={340}
        size="stretch"
        minWidth={150}   // Minimum width per page set to 150px
        maxWidth={1000}
        minHeight={170}
        maxHeight={850}
        flippingTime={700}
        maxShadowOpacity={0.2}
        showCover={true}
        mobileScrollSupport
        className="demo-book"
        ref={flipBookRef}
      >
        {/* First page (cover) */}
        <Page content={page_1_png} isImage />

        {/* Middle pages (paired) */}
        <Page content={page_2_png} isImage />
        <Page content={page_3_png} isImage />
        <Page content={page_4_png} isImage />
        <Page content={page_5_png} isImage />
        <Page content={page_6_png} isImage />
        <Page content={page_7_png} isImage />
        <Page content={page_8_png} isImage />
        <Page content={page_9_png} isImage />
        <Page content={page_10_png} isImage />
        <Page content={page_11_png} isImage />
        <Page content={page_12_png} isImage />
        <Page content={page_13_png} isImage />

        {/* Last page (back cover) */}
        {/* Removed <Page content={page_14_png} isImage /> to end book on pages 12 & 13 */}
      </HTMLFlipBook>

      {/* Navigation buttons */}
      <button
        type="button"
        onClick={prevButtonClick}
        className="nav-button nav-button-left"
        aria-label="Go to previous page"
      >
        <MdChevronLeft />
      </button>
      <button
        type="button"
        onClick={nextButtonClick}
        className="nav-button nav-button-right"
        aria-label="Go to next page"
      >
        <MdChevronRight />
      </button>
    </div>
  );
}

export default FlipBook;
