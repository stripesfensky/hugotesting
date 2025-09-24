// A ProseMirror plugin that adds a button to the toolbar.
// This code runs in the browser and directly manipulates the editor state.
const promptButtonPlugin = () => ({
  // The `view` property is where you get access to the editor's view.
  view(view) {
    // Create the button element.
    const button = document.createElement('button');
    button.textContent = 'Add Text';
    button.title = 'Insert text from a prompt';

    // Add a class for styling (optional).
    button.classList.add('prompt-button');

    // Add a click event listener to the button.
    button.addEventListener('click', () => {
      const text = window.prompt('Enter your text:');
      
      if (text !== null) {
        // Get the current transaction.
        const { tr } = view.state;
        
        // Use the transaction to replace the current selection with the new text.
        // This is the core of inline insertion.
        view.dispatch(tr.replaceSelectionWith(view.state.schema.text(`{{< shortcode "${text}" >}}`)));
        
        // Give focus back to the editor.
        view.focus();
      }
    });

    // Find the toolbar and append the new button to it.
    const toolbar = view.dom.querySelector('.ProseMirror-menubar');
    if (toolbar) {
      toolbar.appendChild(button);
    }

    // Return an object with a `destroy` method for cleanup.
    return {
      destroy() {
        button.remove();
      }
    };
  },
});

// We need a way to register this plugin with DecapCMS.
// We'll create a simple DecapCMS widget that enables our plugin.
CMS.registerWidget('markdown', {
  name: 'markdown-with-prompt-button',
  label: 'Markdown with Prompt Button',
  // The `widget` is a simple component that returns the standard markdown widget.
  widget: (props) => {
    // Return the standard markdown widget.
    return props.widget.render(props);
  },
  // The `toBlock` and `fromBlock` functions are still needed for the component.
  toBlock: (value) => value,
  fromBlock: (value) => value,
  // The `plugins` property is what links our ProseMirror plugin.
  plugins: [promptButtonPlugin],
});