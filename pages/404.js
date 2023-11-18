import Script from "next/script";
import React from "react";

const Page404 = () => {
    const code = <code>
        <span className={`text-[#ff5087]`}>if </span>
        <span className={`text-[#006255]`}>(</span>
        <span className={`text-[#97db65]`}>pageRoute</span>
        <span className={`text-[#ff5087]`}> === </span>
        <span className={`text-[#ff5087]`}>undefined</span>
        <span className={`text-[#006255]`}>)</span>
        <span className={`text-[#006255]`}>&#123;</span>
        <div>
            <span>  console.log</span>
            <span className={`text-[#006255]`}>(</span>
            <span className={`text-[#fbd54c]`}>&ldquo;Oops! What are you looking for. I could&#39;t find that page.&rdquo;</span>
            <span className={`text-[#006255]`}>);</span>
        </div>
        <div>
            <span>  console.log</span>
            <span className={`text-[#006255]`}>(</span>
            <span className={`text-[#fbd54c]`}>&ldquo;404 | Page not found.&rdquo;</span>
            <span className={`text-[#006255]`}>);</span>
        </div>
        <span className={`text-[#006255]`}>&#125;</span>
    </code>
  return(
      <>
          <section className={`sm:px-6 px-5 pt-10 pb-5 w-full `}>
              <div className={`w-full relative`}>
                  <div className={`absolute relative mx-auto`}>
                      <div className={`absolute z-40 relative`}>
                          <div className={`w-full relative md:space-y-0 h-[400px] space-y-8 flex flex-wrap items-center justify-center`}>
                              <div className={`whitespace-pre-wrap text-secondary-300`}>{code}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Page404;