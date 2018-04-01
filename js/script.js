$(document).ready(function() {
  /**
   *
   * Image Gallery with Vertical Thumbnails
   *
   */

  $(".detail-tabs").tab();

  $(".slider-wrap").on("click", ".thumb_x a", function(e) {
    e.preventDefault();
    var thisThumbItem = $(this);

    //set large image src
    thisThumbItem
      .parents(".img-gallery-wrap")
      .find(".big-img img")
      .fadeTo("slow", 0.7, function() {
        var thisBigImg = $(this);
        thisBigImg.attr("src", thisThumbItem.attr("data-largeImg"));
        thisBigImg.fadeTo("slow", 1);
      });

    //set selected thumbnail
    thisThumbItem
      .parents(".thumbwrap")
      .find(".thumb_x")
      .removeClass("added-select");
    thisThumbItem.parents(".thumb_x").addClass("added-select");
  });

  /**
   *
   * BX SLIDER
   *
   */

  var bxSlider = $(".bxslider").bxSlider({
    pager: false,
    nextText: ['<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    prevText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>'],
    onSlideAfter: function($slideEl) {
      $slideEl.find(".thumb_x a").first().trigger("click");
    }
  });

  /**
   *
   * OWL Carousel
   *
   */

    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots:false,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });

  /**
   *
   * Star Rating
   *
   */

  $(".starrr").starrr();
});
