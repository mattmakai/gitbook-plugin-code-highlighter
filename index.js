var highlight_mark = "&&&";
var highlight_css_class = "code-line-highlight";

module.exports = {
  blocks: {
    code: function(block) {
      // length is 3 if no custom mark is defined in plugins config
      var mark_len = highlight_mark.length;

      // stores the line that may be highlighted
      var highlighted_block = '';

      try {
        // The process can fail (failed to parse)
        highlighted_block = "";
        strs = block.body.split("\n");
        for (var i = 0; i < strs.length; i++) {
          if (strs[i].length > mark_len && strs[i].substring(0, mark_len) == highlight_mark) {
            // if marked for highlight, add span with highlight class
            highlighted_block += '<span class="' + highlight_css_class + '">' 
            highlighted_block += strs[i].substring(mark_len) + "</span>";
          } else {
            highlighted_block += strs[i];
          }
          // add newlines except on final line
          if ((i+1) != strs.length) {
            highlighted_block += "\n";
          }
        }
        //console.log(block.body);
        //console.log(highlighted_block);
      } catch(e) {
      console.warn('Failed to highlight:');
        console.warn(e);
        highlighted_block = block.body;
      }
      return highlighted_block;
    }
  }
};
