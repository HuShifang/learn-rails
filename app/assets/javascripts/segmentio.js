//THIS IS THE BOOK'S CODE; THE UNCOMMENTED CODE IS NEWER, FROM https://railsapps.github.io/rails-google-analytics.html
/*var analytics=analytics||[];(function(){var
e=["identify","track","trackLink","trackForm","trackClick","trackSubmit","page",
"pageview","ab","alias","ready","group"],t=function(e){return
function(){analytics.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var
n=0;n<e.length;n++)analytics[e[n]]=t(e[n])})(),analytics.load=function(e){var
t=document.createElement("script");t.type="text/javascript",t.async=!0,
t.src=("https:"===document.location.protocol?"https://":"http://")+
"d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/"+e+"/analytics.min.js";var
n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)};
analytics.load("VLOHRW1O6QCvXDizQknyCzBAQF7RXC8o");
$(document).on('page:load', function() {
  console.log('page loaded');
  analytics.pageview();
  analytics.trackForm($('#new_visitor'), 'Signed Up');
  analytics.trackForm($('#new_contact'), 'Contact Request');
})*/


  // Create a queue, but don't obliterate an existing one!
  window.analytics = window.analytics || [];

  // A list of the methods in Analytics.js to stub.
  window.analytics.methods = ['identify', 'group', 'track',
    'page', 'pageview', 'alias', 'ready', 'on', 'once', 'off',
    'trackLink', 'trackForm', 'trackClick', 'trackSubmit'];

  // Define a factory to create stubs. These are placeholders
  // for methods in Analytics.js so that you never have to wait
  // for it to load to actually record data. The `method` is
  // stored as the first argument, so we can replay the data.
  window.analytics.factory = function(method){
    return function(){
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      window.analytics.push(args);
      return window.analytics;
    };
  };

  // For each of our methods, generate a queueing stub.
  for (var i = 0; i < window.analytics.methods.length; i++) {
    var key = window.analytics.methods[i];
    window.analytics[key] = window.analytics.factory(key);
  }

  // Define a method to load Analytics.js from our CDN,
  // and that will be sure to only ever load it once.
  window.analytics.load = function(key){
    if (document.getElementById('analytics-js')) return;

    // Create an async script element based on your key.
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'analytics-js';
    script.async = true;
    script.src = ('https:' === document.location.protocol
      ? 'https://' : 'http://')
      + 'cdn.segment.io/analytics.js/v1/'
      + key + '/analytics.min.js';

    // Insert our script next to the first script element.
    var first = document.getElementsByTagName('script')[0];
    first.parentNode.insertBefore(script, first);
  };

  // Add a version to keep track of what's in the wild.
  window.analytics.SNIPPET_VERSION = '2.0.9';

  // Load Analytics.js with your key, which will automatically
  // load the tools you've enabled for your account. Boosh!
  window.analytics.load('VLOHRW1O6QCvXDizQknyCzBAQF7RXC8o');

  // Make the first page call to load the integrations. If
  // you'd like to manually name or tag the page, edit or
  // move this call however you'd like.
  /*  */
  window.analytics.page();
