import React from 'react'

const Talent = () => {
  return (
   <>
     <section
            className="c-section c-section--light c-section--cyan-highlight c-section--title-1"
            data-animate-section=""
            data-nav-section="light"
          >
            <div className="wrap wrap--max">
              <div className="text-center">
                <h2 className="c-section--title-1-h2" data-animate-title="">
                  <div className="title-line">
                    <div className="title-line-inner">
                      <span className="c-title-parts-wrap">
                        <span className="c-title-parts-bg" />
                        <span className="c-title-parts">
                          <span
                            className="c-title-part"
                            data-split-chars=""
                            data-split-resize="false"
                          >
                            Enlighten
                          </span>
                          <span
                            className="c-title-part"
                            data-split-chars=""
                            data-split-resize="false"
                          >
                            Recruit
                          </span>
                          <span
                            className="c-title-part"
                            data-split-chars=""
                            data-split-resize="false"
                          >
                            Reveal
                          </span>
                        </span>
                      </span>
                      your talents
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </section>
          <section
            className="c-section c-section--light c-section--list c-section--cyan-highlight"
            data-animate-section=""
            data-nav-section="light"
          >
            <div className="wrap wrap--max">
              <div className="grid grid-cols-10 lg:grid-cols-14 gap-x-20 lg:gap-x-60">
                <ul
                  className="c-list col-span-8 col-start-2 md:col-span-14 md:col-start-1 lg:col-span-12 lg:col-start-2"
                  data-animate-items=""
                >
                  <li>
                    <h3>01.</h3>
                    <p>
                      Strengthen your decisions using scientifically validated
                      tools and certified services. Knowing the soft skills of
                      your candidates and employees ensures a desirable future
                      for your company.
                    </p>
                  </li>
                  <li>
                    <h3>02.</h3>
                    <p>
                      With our soft skills assessment algorithms, rethink your
                      recruitment, interviews and candidate support to promote a
                      human approach and reduce casting errors.
                    </p>
                  </li>
                  <li>
                    <h3>03.</h3>
                    <p>
                      Identify high potential employees with our unique
                      cognitive-behavioural approach. Build the management of
                      tomorrow and develop the future leaders of your company.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
   </>
  )
}

export default Talent