import React from 'react'

const LandscapeNotice = () => {
  return (
    <>
    <div className="c-landscape-notice">
      <div className="c-grid items-center">
        <div className="col-start-2 col-span-8 md:col-start-2 md:col-span-12 text-center">
          <p className="ts-eyebrow ts-indicator">Attention</p>
        </div>
        <div className="col-start-2 col-span-8 md:col-start-2 md:col-span-12 text-center">
          <p className="ts-2--sm">Please rotate your device</p>
        </div>
        <div className="col-start-2 col-span-8 md:col-start-2 md:col-span-12 flex items-center justify-center">
          <div className="c-notice-icon">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.08 30.6098H23.92M14.04 35H26.96C28.6389 35 30 33.6896 30 32.0732V7.92683C30 6.31039 28.6389 5 26.96 5H14.04C12.3611 5 11 6.31039 11 7.92683V32.0732C11 33.6896 12.3611 35 14.04 35Z"
                stroke="#050B28"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    {/* page-overlay  */}
    <div className="c-page-overlay">
      <div className="c-page-overlay-layer-1" />
      <div className="c-page-overlay-layer-2" />
    </div>
  </>
  
  )
}

export default LandscapeNotice