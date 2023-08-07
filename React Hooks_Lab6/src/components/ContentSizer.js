import React from 'react';
import '../assets/App.css';


function ContentSizer(props) {
  const [contentSize, setContentSize] = React.useState('normal');

  const increaseSize = () => {
    setContentSize('large');
  };

  const decreaseSize = () => {
    setContentSize('normal');
  };

  return (
    <div className={`content-sizer ${contentSize}`}>
      <button className="increase-button" onClick={increaseSize}>
        Increase Content
      </button>
      <button className="decrease-button" onClick={decreaseSize}>
        Decrease Content
      </button>
      <div className="content">
        {/* Render your content here */}
        {contentSize === 'large' ? (
          <p>This is large content for Visually Impaired Users.</p>
        ) : (
          <p>This is normal content.</p>
        )}
      </div>
    </div>
  );
}

export default ContentSizer;


