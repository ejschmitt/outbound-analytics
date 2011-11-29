(function($){
 $.fn.outboundAnalytics = function(options) {

  var defaults = {
    includeDestination: true,
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
    if (options.pathSuffix) { gaUrl.push(options.pathSuffix) };
    if (options.pathSuffixAttribute && that.attr(options.pathSuffixAttribute)) { gaUrl.push(that.attr(options.pathSuffixAttribute)) };
    if (options.includeDestination) { gaUrl.push(that.attr('href')) };
    gaUrl = gaUrl.join('/');
    that.click(function(e) {
      if (_gaq) {
        _gaq.push(['_trackPageview', gaUrl]);
      }
    });

  });
 };
})(jQuery);

