import { useState } from "react";

function AccordionSection({ isOpen, title, content }) {

    const [isActive, setIsActive] = useState(false)

    return (
      <>
        <div className={`title ${isOpen ? 'active' : ''}`}>
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className={`content ${isOpen ? 'active' : ''}`}>
          <p className={`transition ${isOpen ? 'visible' : 'hidden'}`}>{content}</p>
        </div>
      </>
    );
  }
  
  export default AccordionSection;




  
  