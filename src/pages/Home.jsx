import React, { useRef, useEffect, useState } from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import OurService from '../components/OurService';
import { initializeVisibilityObserver } from '../components/visiblityAnim/initializeVisibilityObserver';
function Home() {
  const elementRefs = useRef([]);
  const [visibleElement, setVisibleElement] = useState(null);

  useEffect(() => {
    const observer = initializeVisibilityObserver(elementRefs.current, (visibleEl) => {
      setVisibleElement(visibleEl);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const divs = [
    { id: 'intro', component: <Intro /> },
    { id: 'about', component: <About /> },
    { id: 'ourService', component: <OurService /> },
  ];

// const FullViewScrollSections = () => {
//   return (
//     <div className="">
//       <div className="h-screen bg-blue-500 snap-start flex items-center justify-center">
//         <h1 className="text-white text-3xl">Section 1</h1>
//       </div>
//       <div className="h-screen bg-green-500 snap-start flex items-center justify-center">
//         <h1 className="text-white text-3xl">Section 2</h1>
//       </div>
//       <div className="h-screen bg-red-500 snap-start flex items-center justify-center">
//         <h1 className="text-white text-3xl">Section 3</h1>
//       </div>
//     </div>
//   );
// };

// export default FullViewScrollSections;

  return (
    <div className=''>
      {divs.map((div, index) => (
        <div
          key={div.id}
          id={div.id}
          ref={(el) => (elementRefs.current[index] = el)}
          className={`${visibleElement === elementRefs.current[index] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 py-4 border my-4 `}
        >
          {div.component}
        </div>
      ))}
    </div>
  );
}

export default Home;
