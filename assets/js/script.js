var todoArr = ['Spesa', 'Cucinare', 'Cucire', 'Telefonare']

$(function() {

  for(var i=0; i<todoArr.length; i++) {
    $('.todo-box').append('<li><h5>' + todoArr[i] + '</h5></li>')
  }

  $('input').keyup(function(event) {
    if(event.which == 13) {
      var clone = $('ul li').clone()

    }
  })
})