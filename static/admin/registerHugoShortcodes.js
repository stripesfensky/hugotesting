CMS.registerEditorComponent({
  id: "cite",
  label: "Citation",
  fields: [{name: "ref", label: "Citation reference number (starting from 1)", widget: "number"}],
  pattern: /^{{< cite ([0-9]+) >}}/m,
  fromBlock: function(match) {
    return {
      ref: match[1]
    };
  },
  toBlock: function(obj) {
    return `{{< cite ${obj.ref} >}}`;
  },
  toPreview: function(obj) {
    return `<sup>${obj.ref}</sup>`;
  },
});