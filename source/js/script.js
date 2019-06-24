(function($){

  // Caption
  $('.single_post').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;
      $(this).parent('p').addClass('p_images');
      $(this).addClass('post_images');
      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  hljs.initHighlightingOnLoad();
  
  //移动设备分类50%
  $('.category-list').addClass('clearfix');
  
})(jQuery);