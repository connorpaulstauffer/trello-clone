(function() { this.JST || (this.JST = {}); this.JST["boards/board_show"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href=""><<< Back to index</a>\n\n<h2>',  board.get("name") ,'</h2>\n\n<div class="board">\n  <ul class="list-inline sortable-lists" id="lists">\n  </ul>\n</div>\n\n<script type="text/javascript">\n  var h = $(window).height() - $(\'.board\').offset().top;\n  $(\'.board\').height(h - 20);\n</script>\n');}return __p.join('');};
}).call(this);
