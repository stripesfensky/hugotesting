// The CMS object is available because you're loading decap-cms.js from a CDN.

CMS.registerEditorComponent({
  // Unique identifier for your component
  id: 'prompt-for-text',
  // The label that appears in the editor toolbar
  label: 'Prompt for Text',
  // The 'buttons' property is the key to adding an inline button
  buttons: [
    {
      label: 'Add Text', // Tooltip text for the button
      id: 'add-text-button',
      // The 'prompt' function is called when the button is clicked.
      // The `editor` argument is passed by DecapCMS, and it
      // provides methods to manipulate the editor content.
      prompt: (editor) => {
        // Use a native JavaScript prompt to get user input
        const text = window.prompt('Enter your text:');

        // Check if the user entered text and didn't cancel
        if (text !== null && text.trim() !== '') {
          // The `editor.insertText()` method is a low-level API
          // that inserts the text at the current cursor position.
          editor.insertText(text);
        }
      },
    },
  ],
  // These properties are required by DecapCMS but are irrelevant for an inline button.
  toBlock: () => '',
  fromBlock: () => ({}),
  fields: [],
});