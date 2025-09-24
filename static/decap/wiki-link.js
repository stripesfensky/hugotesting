CMS.registerEditorComponent({
  id: 'wiki-link',
  label: 'Wiki Link',
  fields: [
    { 
      name: 'page', 
      label: 'Page Title', 
      widget: 'string' 
    }
  ],
  fromBlock: function(match) {
    return {
      title: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< wiki-link "${data.title}" >}}`;
  }
});