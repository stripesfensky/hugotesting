// A custom button control for the markdown editor.
const promptButtonControl = {
  // A unique ID for the button.
  id: 'prompt-insert-text',
  // The label for the button in the toolbar.
  label: 'Add Text',
  // The `action` function is the key to this solution.
  // It is a simple function that is called when the button is clicked.
  action: (editor) => {
    const text = window.prompt('Enter your text:');
    if (text !== null) {
      editor.insertText(`{{< shortcode "${text}" >}}`);
    }
  },
};

// The `options` property is where the magic happens.
// It allows you to define controls for the editor's toolbar.
CMS.registerEditorComponent({
  id: 'prompt-button-component',
  label: 'Prompt Button',
  options: {
    // The `controls` array defines your custom buttons.
    controls: [
      promptButtonControl,
    ],
  },
  // These properties are required but do not affect the behavior of the custom button.
  toBlock: () => '',
  fromBlock: () => ({}),
  fields: [],
});