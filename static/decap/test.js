// The function that gets called when the button is clicked.
function promptAndInsert(editor) {
  // Use a native JavaScript prompt to get user input.
  const text = window.prompt('Enter your text:');

  // If the user enters text, insert it into the editor at the current cursor position.
  if (text !== null) {
    editor.insertText(text);
  }
}

// Register the custom editor component.
CMS.registerEditorComponent({
  // A unique identifier for your component.
  id: 'prompt-for-text',
  // The label for the button in the editor toolbar.
  label: 'Prompt for Text',
  // The `buttons` property is an array of objects that define the buttons.
  buttons: [
    {
      label: 'Prompt', // The tooltip text for the button.
      id: 'prompt-button', // A unique ID for this specific button.
      // This is the function that is executed when the button is clicked.
      prompt: promptAndInsert,
    },
  ],
  // These properties are required but will not affect the behavior for an inline button.
  toBlock: () => '',
  fromBlock: () => ({}),
  fields: [],
});