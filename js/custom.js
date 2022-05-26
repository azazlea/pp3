$(document).ready(function () {


  var $openBtn = $('.open-btn'),
    $closeBtn = $('.close-btn'),
    $dimLayer = $('.dim-layer'),
    $modal = $('.modal-container');


  $openBtn.click(function(){
    modalShow();
  });

  $closeBtn.click(function(){
    modalHide();
  });

  $dimLayer.click(function(){
    modalHide();
  });


  // 모달을 보여줘요.
  function modalShow(){
    $modal.addClass('active');
    console.log('show');
  }

   // 모달을 숨겨줘요.
   function modalHide(){
    $modal.removeClass('active');
    console.log('hide');
  }

});