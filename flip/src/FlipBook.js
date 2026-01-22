// src/FlipBook.js
import React, { useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './FlipBook.css';

// Import images
import page_1_png from './images/page1.webp';
import page_2_png from './images/page2.webp';
import page_3_png from './images/page3.webp';
import page_4_png from './images/page4.webp';
import page_5_png from './images/page5.webp';
import page_6_png from './images/page6.webp';
import page_7_png from './images/page7.webp';
import page_8_png from './images/page8.webp';
import page_9_png from './images/page9.webp';
import page_10_png from './images/page10.webp';
import page_11_png from './images/page11.webp';
import page_12_png from './images/page12.webp';
import page_13_png from './images/page13.webp';

const Page = React.forwardRef(({ content, isImage, pageNumber }, ref) => (
  <div className={`page ${pageNumber === 1 ? 'page-1' : ''}`} ref={ref}>
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
        height={323}
        size="stretch"
        minWidth={150}   // Minimum width per page set to 150px
        maxWidth={1000}
        minHeight={120}
        maxHeight={850}
        flippingTime={700}
        maxShadowOpacity={0}
        showCover={true}
        mobileScrollSupport
        className="demo-book"
        ref={flipBookRef}
      >
        {/* First page (cover) */}
        <Page content={page_1_png} isImage pageNumber={1} />

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
