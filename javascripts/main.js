(function (window) {
  $(function(){
    var showGuide = $('#show-welldrop-guide');
    var guide = $('#welldrop-guide');
    var clickHandler = function(){
      var visible = guide.css('display') == 'block';
      if (visible)
        guide.css('display', 'none')
      else
        guide.css('display', 'block')
      showGuide.text(!visible ? 'Hide Guide' : 'Show Guide');
      if (!visible)
        window.location.hash = '#welldrop-guide';
      return false;
    };
    showGuide.click(clickHandler);
    if (window.location.hash == '#welldrop-guide')
      clickHandler();
  });
})(window)
