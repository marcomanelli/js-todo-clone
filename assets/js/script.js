var todoArr = ['Spesa', 'Cucinare', 'Cucire', 'Telefonare']

$(function() {

  for(var i=0; i<todoArr.length; i++) {
    var clone = $('.todo-line').clone()

    $('.todo-box').append('<li><h5>' + todoArr[i] + '</h5></li>')
  }
})