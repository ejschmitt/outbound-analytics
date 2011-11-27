outbound-analytics
==================

A jQuery plugin that allows simple tracking of outbound link clicks
using google analytics. This plugin tracks outbound clicks as page views, allowing conversion tracking. Requires google analytics tracking code to be available.

Defaults
--------
* Target will be set to 'blank', this can be disabled.
* Tracking pages will be recorded as 'outbound/{ URL }'

Quickstart
----------
Add the plugin to the page that includes the google analytics tracking
code.

Add a class to outbound links you want to track, such as:

```html
<a href='http://example.com' class='outbound'>Click me</a>
```

Trigger the plugin

```javascript
$(function() {
  $('.outbound').outboundAnalytics();
});
```

This would track a click on the link as a page view to google analytics as a page view of:
```
'/outbound/http://example.com'
```

Advanced Usage
--------------
OutboundAnalytics contains several settings that can be changed for
better tracking, these settings are as follows:

* trackPath - default: 'outbound'
* target - default: '_blank'
* pathSuffix - default: ''
* pathSuffixAttribute - default: null

### trackPath

trackPath sets the first part of the fake url sent to GA for tracking,
can be changed to anything for greater flexibility.

Example

```javascript
$('.outbound').outboundAnalytics({trackPath: 'bounce'}); => '/bounce/http://example.com'
```

### target

target simply sets the target attribute for the links. It is recommended to keep it as '_blank' so that the tracking push to google is not inturrupted by the page redirect.

To disable opening link in new window:

```javascript
$('.outbound').outboundAnalytics({target: null});
```

### pathSuffix
pathSuffix allows greater control of url path specifications in GA. It is the suffix that will be added to the trackPath of the url.

Examples

```javascript
$('.outbound').outboundAnalytics({pathSuffix: 'home_page'}); => '/outbound/home_page/http://example.com'
$('.outbound').outboundAnalytics({pathSuffix: 'deep/inner/page'}); => '/outbound/deep/inner/page/http://example.com'
```

### pathSuffixAttribute
pathSuffixAttribute is very similar to pathSuffix but is a specification of the attribute of the html element that should be used as a path suffix.
This allows better control of multiple links on a page.

Examples

```html
<script>
  $('.outbound').outboundAnalytics({pathSuffixAttribute: 'data-outbound-suffix'});
</script>
<a href='http://example.com' class='outbound' data-outbound-suffix='custom-link'>Click me</a>

Tracked Url: '/outbound/custom-link/http://example.com'
```

### All together now
Some examples using the settings together

```html
<script>
  $('.outbound').outboundAnalytics({pathSuffix: 'bounce', pathSuffixAttribute: 'data-outbound-suffix'});
</script>
<a href='http://example.com' class='outbound' data-outbound-suffix='custom-link'>Click me</a>

Tracked Url: 'outbound/bounce/custom-link/http://example.com'
```


```html
<script>
  $('.outbound').outboundAnalytics({pathSuffix: 'amazon', pathSuffixAttribute: 'data-outbound-suffix'});
</script>
<a href='http://example.com' class='outbound' data-outbound-suffix='suggested/deals_index/text_link'>Click me</a>

Tracked Url: '/amazon/suggested/deals_index/text_link/http://example.com'
```
