import React, { useState } from 'react';
import './About.css';
import '../TopBar/TopBar'
import '../Dash/Dash'
import TopBar from '../TopBar/TopBar';
import Dash from '../Dash/Dash';
import MidPanel from '../MidPanel/MidPanel';
import FullPanel from '../FullPanel/FullPanel';

function About() {
  const [textareaContent, setTextareaContent] = useState<string>('');

  const handleTextChange = (newText: string) => {
    setTextareaContent(newText);
  };

  const handleButtonClick = (textContent: string) => {
    console.log(textContent);
  };

  return (
    <div className="App">
      <header className="App-header">
          <div className="TopBar">
              <TopBar onButtonClick={handleButtonClick} textContent={textareaContent} />
          </div>
        <div style={{ margin: '32px' }}></div>
        <div className='FullPanel'>
          <FullPanel></FullPanel>
        </div>
        <div className='MidPanel'>
          <MidPanel></MidPanel>
        </div>
        <div className="Dash">
            <Dash onTextChange={handleTextChange} />
        </div>
        <div className='FullPanel'>
          <FullPanel></FullPanel>
        </div>
      </header>
    </div>
  );
}

export default About;
