import React from 'react';
import { Button } from '@decap-cms/ui';

const PromptButtonWidget = ({ onChange, value, classNameWrapper }) => {
  const handleClick = () => {
    // 1. Prompt the user for text.
    const text = window.prompt('Enter your text:');
    
    // 2. If text is entered, update the editor's value.
    if (text !== null) {
      // Get the current value of the markdown field.
      // `value` is the markdown string itself.
      const currentValue = value || '';
      
      // We'll append the new text to the end of the current content.
      // For more advanced insertion, you would need to manage the cursor position.
      // A simple append works for a lot of use cases.
      onChange(currentValue + ' ' + text);
    }
  };

  return (
    <div className={classNameWrapper}>
      <Button onClick={handleClick}>Insert Text from Prompt</Button>
    </div>
  );
};

export default PromptButtonWidget;