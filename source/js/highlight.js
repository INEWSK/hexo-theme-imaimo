  var trim_indent = true;
  var line_number = true;
  // enable highlight
  $('.article pre code').each(function(i, block) {
    var caption = $(this).parent().prev(code_caption_selector);
    if (typeof caption === 'undefined') {
      return;
    }
    var ds = caption.data();
    if (typeof ds === 'undefined') {
      ds = {trim_indent: 'frontend', line_number : 'frontend'}
    }
    var texts = $(this).text().split('\n');
    if (ds.trim_indent === 'frontend') {
      console.log("trim indent in front-end");
      var tab = texts[0].match(/^\s{0,}/);
      if (tab) {
        var arr = [];
        texts.forEach(function(temp) {
          arr.push(temp.replace(tab, ''));
        });
        $(this).text(arr.join('\n'));
      }
    }

    if (ds.line_number === 'frontend') {
      console.log("show line number in front-end");
      var lines = texts.length - 1;
      var $numbering = $('<ul/>').addClass('pre-numbering');
      $(this).addClass('has-numbering').parent().append($numbering);
      for (i = 1; i <= lines; i++) {
        $numbering.append($('<li/>').text(i));
      }
    }

    hljs.highlightBlock(block);
  });