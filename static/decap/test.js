const promptControl = {
  // A React component that renders the button in the editor.
  // The 'editor' prop provides methods to interact with the editor.
  buttons: [
    {
      label: 'Prompt for Text',
      icon: 'add',
      id: 'prompt-button',
      // The 'prompt' function is called when the button is clicked.
      prompt: (editor) => {
        // Use a native JavaScript prompt to get user input.
        const text = window.prompt('Enter your text:');
        
        // If the user enters text, insert it into the editor.
        if (text) {
          editor.insertText(text);
        }
      },
    },
  ],
};

CMS.registerEditorComponent({
  // The unique identifier for your component.
  id: 'test',
  // The name that will appear in the editor.
  label: 'Prompt Button',
  // The React component to render the button.
  // This is a simple button for demonstration.
  // The actual button logic is in the 'promptControl'.
  buttons: promptControl.buttons,
  // The fields for this component (if it were a block).
  // This isn't strictly necessary for a simple inline button.
  fields: [],
  // This function is required for block-style components, but we're
  // using it for its side effects with the `buttons` property.
  toBlock: () => '',
  fromBlock: () => ({}),
});