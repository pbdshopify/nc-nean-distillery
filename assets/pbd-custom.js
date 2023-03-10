  $(document).ready(function(){

      //product description custom tabs
      $(function(){
        $(".product-description h6").nextUntil("h6").hide();
        $(".product-description h6").click(function() {
        $(this).toggleClass("opened");
        $(this).nextUntil("h6").slideToggle();
        });
      });
      
      //add active class
      $('.custom-cocktail-filter li').click(function(){
          $('.active').removeClass('active');
          $(this).addClass('active');
      });
      $('.js-batch-info').click(function(event){
          event.preventDefault();
          $('.batch-information').toggleClass('active');
      });

      //accordion
      $('.accordion__header').click(function() {
          $(".accordion__body").not($(this).next()).slideUp(400);
          $(this).next().slideToggle(400);
          
          $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
          $(this).closest(".accordion__item").toggleClass("open-accordion");
      });

      // init Isotope
      var $grid = $('.custom-cocktailz').isotope({
        // options
      });
      // filter items on button click
      $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

     


});