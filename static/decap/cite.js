CMS.registerEditorComponent({
  id: 'cite',
  label: 'Citation Reference',
  fields: [
    { 
      name: 'ref', 
      label: 'Reference Number', 
      widget: 'number' 
    }
  ],
  fromBlock: function(match) {
    return {
      ref: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< cite ${data.ref} >}}`;
  }
});