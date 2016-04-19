var highlight_mark = "&&&";
var highlight_css_class = "code-line-highlight";

module.exports = {
  book: {},
  ebook: {},
  blocks: {
    code: function(block) {
      // length is 3 if no custom mark is defined in plugins config
      var mark_len = highlight_mark.length;
      console.log(block.body);

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
                highlighted_block += strs[i].substring(mark_len) + "</span>" + "\n";
            } else {
                highlighted_block += strs[i] + "\n";
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
