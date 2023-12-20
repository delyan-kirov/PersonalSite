import React, { useRef } from 'react';
import './Dash.css';

interface DashProps {
  onTextChange: (newText: string) => void; // Add type annotation for onTextChange prop
}

function Dash({ onTextChange }: DashProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      // Call the function passed as a prop to update the text content
      onTextChange(textareaRef.current.value);
    }
  };

  return (
    <div className="dash-container">
      <textarea
        ref={textareaRef}
        name="text"
        onInput={handleTextareaInput}
        defaultValue=""
        className="auto-resize-textarea"
        placeholder={'Type here...'}
      ></textarea>
    </div>
  );
}

export default Dash;