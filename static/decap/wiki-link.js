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
      page: match[1]
    };
  },
  toBlock: function(data) {
    return `{{< wiki-link "${data.page}" >}}`;
  }
});