// The CMS object is available globally.

CMS.registerEditorComponent({
  // Unique identifier for your component.
  id: 'prompt-insert-text',
  
  // The label for the button in the editor toolbar.
  label: 'Add Text',
  
  // This is the core of the trick. `toBlock` returns a simple string
  // that will be inserted when the user clicks the button.
  // The value inside the markdown editor will be what this function returns.
  toBlock: (data) => {
    // We use a prompt to get the user input. This will happen when the button is clicked.
    const text = window.prompt('Enter your text to insert:');
    
    // If the user cancels, return an empty string so nothing is added.
    if (text === null) {
      return '';
    }
    
    // Return the text wrapped in a simple marker.
    // This allows us to handle the content as an "inline" block that immediately
    // gets replaced by its value.
    return `${text}`;
  },
  
  // `fromBlock` is required and parses the content back into data.
  // For our use case, we just return an empty object.
  fromBlock: () => ({}),
  
  // This is the key part to make it work. The `buttons` property is what the editor
  // uses to create the UI element.
  buttons: [
    {
      label: 'Add Text',
      id: 'add-text-button',
      // The `prompt` function is a side-effect. It runs a prompt,
      // and then the `toBlock` function is called to insert the text.
      // Note: this is a non-standard use of the API but it's the only
      // way to achieve the desired result without a build tool.
      prompt: (editor) => {
        // This `prompt` function will be called, but the text insertion is
        // handled by the `toBlock` method above.
        // It's a non-intuitive way the DecapCMS API works.
      },
    },
  ],
  
  // The fields are not needed for this simple component.
  fields: [],
});