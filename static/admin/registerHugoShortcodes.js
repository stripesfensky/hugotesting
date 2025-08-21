CMS.registerEditorComponent({
  id: "cite",
  label: "Cite",

  fields: [{name: "ref", label: "Citation Number (starting from 1)", widget: "number"}],

  pattern: /^{{< cite ([0-9]+) >}}/,

  fromBlock: function(match) {
    return {
      ref: match[1]
    };
  },
  toBlock: function(obj) {
    return `{{< cite ${obj.ref} >}}`;
  },
  toPreview: function(obj) {
    return '';
  },
});