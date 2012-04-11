(function (window) {
  $(function(){
    var visible = false;
    var showGuide = $('#show-guide');
    var guide = $('#guide');
    showGuide.click(function(){
      if (visible)
        guide.hide();
      else
        guide.show();
      visible = !visible;
      showGuide.text(visible ? 'Hide Guide' : 'Show Guide');
      if (visible)
        window.location.hash = 'guide';
      return false;
    });
  });
})(window)
