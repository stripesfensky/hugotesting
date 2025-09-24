// In a separate JS file, loaded after Decap CMS
CMS.registerEditorComponent({
  id: 'wiki-link',
  label: 'Insert Wiki Link',
  to: 'inline',
  fields: [
    { name: 'text', label: 'Widget Text', widget: 'string' }
  ],
  fromBlock: (match) => {
    // Logic to convert matched text into inline widget data
    return {
      text: match[1]
    };
  },
  toBlock: (obj) => {
    // Logic to convert inline widget data back to a string for saving
    return `{{< my-inline-widget "${obj.text}" >}}`;
  },
  // Optionally, a `pattern` for automatic conversion
  // pattern: /^\[\[MyWidget (.*?) (.*?)\]\]$/,
});