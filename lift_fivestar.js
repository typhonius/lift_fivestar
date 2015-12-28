/**
 * @file
 *
 * Lift Fivestar integration.
 */

(function ($) {
  Drupal.behaviors.liftfivestar = {
    attach: function (context, settings) {
      $('.fivestar-widget .star', context).click(function() {
        var rating = $(this).parent().find('.star').index(this) + 1;

        // Build the payload for Acquia Lift.
        //var payload = ['captureView', 'fivestar vote', {
        //  rating: rating,
        //  contentId: settings.currentPath,
        //}];

        // Send the data to Acquia Lift.
        _tcaq.push(['captureView', 'Vote', {'rating':rating}]);
        //_tcaq.push(payload);
      });
    }
  };
})(jQuery);

