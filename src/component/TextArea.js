import React, { useState } from 'react';

export default function TextArea({mode}) {
  const [text, settext] = useState("write a text to change");
  const [infoText, setInfoText] = useState('');

  const upper = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    setInfoText('Text converted to UPPERCASE.');
  };

  const lower = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    setInfoText('Text converted to lowercase.');
  };

  const cngletter = (event) => {
    settext(event.target.value);
  };

  const countWords = () => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    setInfoText(`Number of Words: ${words.length}`);
  };

  const countSpaces = () => {
    const spaces = (text.match(/ /g) || []).length;
    setInfoText(`Number of Spaces: ${spaces}`);
  };

  const countLines = () => {
    const lines = text.split(/\r\n|\r|\n/).filter(Boolean);
    setInfoText(`Number of Lines: ${lines.length}`);
  };










  const textareaStyle = {
    color: mode.isDarkMode ? '#61DAFB' : 'black',
    backgroundColor: mode.isDarkMode ? 'black' : 'white',
    border: '3px solid ' + (mode.isDarkMode ? '#61DAFB' : 'black')
  };

  // Use the `mode` prop to set the color of the heading and the p tag
  const infoTextStyle = {
    color: mode.isDarkMode ? '#61DAFB' : 'black',
  };
  const btnstyle = {
    color: mode.isDarkMode ? '#61DAFB' : 'black',
    backgroundColor: mode.isDarkMode ? 'black' : 'white',
    border: '3px solid ' + (mode.isDarkMode ? '#61DAFB' : 'black')
  };

  return (
    <div>
      <center>
        <div>
        <h1 style={infoTextStyle}>Text Changer</h1>

          {/* <h1>Text Changer</h1> */}
        </div>
        <div>
        <textarea
            name=""
            id=""
            cols="90"
            rows="10"
            value={text}
            onChange={cngletter}
            style={{ ...textareaStyle, background: mode.isDarkMode ? 'black' : 'white' }}
          ></textarea>
          {/* <textarea name="" id="" cols="90" rows="10" value={text} onChange={cngletter}></textarea> */}
        </div>
        <br />
        <div className='btn'>
          <button onClick={upper} style={btnstyle}>UPPERCASE</button>
          <button onClick={lower} style={btnstyle}>lowercase</button>
          <button onClick={countWords} style={btnstyle}>Count Words</button>
          <button onClick={countSpaces} style={btnstyle}>Count Spaces</button>
          <button onClick={countLines} style={btnstyle}>Count Lines</button>
        </div>
        <p style={infoTextStyle}>{infoText}</p>
        {/* <p>{infoText}</p> */}
      </center>
    </div>
  );
}
