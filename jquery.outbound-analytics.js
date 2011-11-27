(function($){
 $.fn.outboundAnalytics = function(options) {

  var defaults = {
    trackPath: 'outbound',
    pathSuffix: '',
    pathSuffixAttribute: null,
    target: '_blank'
  };

  var options = $.extend(defaults, options);

  return this.each(function() {
    var that = $(this);

    if (options.target) {
      that.attr('target', options.target);
    }

    var gaUrl = [];
    gaUrl.push(options.trackPath);
    options.pathSuffix ? gaUrl.push(options.pathSuffix) : null;
    options.pathSuffixAttribute && that.attr(options.pathSuffixAttribute) ? gaUrl.push(that.attr(options.pathSuffixAttribute)) : null;
    gaUrl.push(that.attr('href'));
    gaUrl = gaUrl.join('/');
    that.click(function(e) {
      if (_gaq) {
        _gaq.push(['_trackPageview', gaUrl]);
      }
    });

  });
 };
})(jQuery);

