// Register a custom toolbar plugin for the markdown editor.
// This function adds a button that uses a simple callback to insert text.
CMS.registerEditorPlugin({
  // A unique name for your plugin.
  // This is what you'll reference in config.yml.
  name: 'prompt-shortcode-plugin',
  
  // The label for the button in the toolbar.
  label: 'Insert Shortcode',
  
  // The function to execute when the button is clicked.
  // The 'editor' object is the ProseMirror editor instance.
  action: (editor) => {
    // 1. Get user input with a native JavaScript prompt.
    const text = window.prompt('Enter your shortcode text:');
    
    // 2. If the user provided text, insert it into the editor.
    if (text !== null) {
      // The `editor.insertText()` method is the key to inline insertion.
      // It places the content at the current cursor position.
      editor.insertText(`{{< prompt_text "${text}" >}}`);
    }
  },
});