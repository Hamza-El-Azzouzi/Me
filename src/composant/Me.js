import { useState, useEffect } from "react";

function Me() {
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const textToType = '<span> hi , <span className="name-color" style={{color:"#0077B5"}}>hamza</span> here .</span>';
  // const textToType = ' hi hamza here  . ';
  let currentIndex = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length - 1) {
        setTypedText(prevTypedText => prevTypedText + textToType[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prevCursorVisible => !prevCursorVisible);
    }, 400);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentIndex]);
  return (
    <div id="intro">
      <div className="name">
        <div className="line-1">
          <span className="super" dangerouslySetInnerHTML={{ __html: typedText }}></span>
          <span className="cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>
            <i></i>
          </span>
        </div>

        <div className="fade-in-section is-visible">
          <div className="intro-subtitle">
          Welcome to my world of innovation and coding craftsmanship!
          </div>
          <div className="intro-desc">
          As a full-stack web developer based in Taza,
           my passion lies in the realms of both front-end and back-end development.
            With a fascination for crafting seamless human-computer interactions,
             I'm dedicated to bringing innovative digital experiences to life. 
          Welcome to my portfolio, where the art of coding meets the canvas of creativity!
          </div>
          <a href="mailto:elazzouzi.hamza20@gmail.com" className="intro-contact btn btn-outline" style={{ color: "#FFA500", borderColor: '#FFA500' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFA500" className="bi bi-envelope-open-fill svg" viewBox="0 0 16 16">
              <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
            </svg>
            Say Hi !!
          </a>
        </div>
      </div>
    </div>
  )
}
export default Me   