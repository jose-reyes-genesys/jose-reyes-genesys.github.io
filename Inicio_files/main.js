// A $( document ).ready() block.
jQuery( document ).ready(function() {
    jQuery('.responisve_menu').click(function(){
    jQuery('.new_nav').toggleClass("show");
    var width = jQuery('document').width();
    if(width < 768){
      console.log("mobile")
    }
  });
});


jQuery(document).ready(function($) { 
  var delay = 100; setTimeout(function() { 
  jQuery('#elementor-tab-title-1891').removeClass('elementor-active');
  jQuery('#elementor-tab-content-1891').css('display', 'none'); }, delay); 

}); 
