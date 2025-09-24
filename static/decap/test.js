const promptButtonWidget = {
  // Use a unique ID for your widget
  id: 'prompt-injector',
  // The label will be visible in the component list, but we're only using
  // this registration for its side effects (the button).
  label: 'Text Prompt Button',
  
  // onMount is called when the widget is initialized.
  // We use it to register a custom button on the editor instance.
  onMount: (editor) => {
    // 1. Define the button's action (the prompt and insert logic)
    const promptAndInsert = () => {
      // Use a native JavaScript prompt to get user input.
      const text = window.prompt('Enter your inline text:');
      
      // If the user enters text, insert it into the editor at the cursor position.
      if (text) {
        // The `insertText` method is available on the editor instance.
        editor.insertText(text);
      }
    };
    
    // 2. Register the custom button in the editor toolbar
    editor.addButton({
      id: 'prompt-text',          // Unique button ID
      title: 'Prompt for Text',  // Tooltip/Aria label
      icon: 'add',               // Use a simple icon name
      action: promptAndInsert    // The function to execute on click
    });
  },
  
  // Since this is purely a toolbar button, we don't need any fields or rendering.
  // The following properties are mandatory but can be stubbed out.
  fields: [],
  toBlock: () => '',
  fromBlock: () => ({}),
  toMarkdown: () => '',
  fromMarkdown: () => ({}),
};

// Register the custom editor component
CMS.registerEditorComponent(promptButtonWidget);