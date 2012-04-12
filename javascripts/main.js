(function (window) {
  $(function(){
    var showGuide = $('#show-guide');
    var guide = $('#guide');
    var clickHandler = function(){
      var visible = guide.css('display') == 'block';
      if (visible)
        guide.css('display', 'none')
      else
        guide.css('display', 'block')
      showGuide.text(!visible ? 'Hide Guide' : 'Show Guide');
      if (!visible)
        window.location.hash = '#guide';
      return false;
    };
    showGuide.click(clickHandler);
    if (window.location.hash == '#guide')
      clickHandler();
  });
})(window)
