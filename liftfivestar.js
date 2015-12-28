/**
 * @file
 *
 * Lift Fivestar integration.
 */

(function($){
  Drupal.behaviors.liftfivestar = function(context, settings) {
    $('.fivestar-widget .star', context).click(function() {
      console.log(context);
      console.log(settings);
      /**$form = $(this).parents('form');
      var contentPath = $("[name=content_path]", $form).val();
      var rating = $(this).parent().find('.star').index(this) + 1;
      _gaq.push(['_trackEvent', 'Rating', rating + ' star', contentPath]);
**/
    });
  }
})(jQuery);

