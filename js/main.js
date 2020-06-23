/*
1. Сверстать слайдер - done
2. Сделать переключение фотографий влево вправо - done
3. Сделать переключение фотографий по клику на нижние фото - done
4. При клике на большую картинку увеличивать картинку
*/

var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
];

// переменная для пути картинки слайдера
var path = "img/slider/";

var currentImage = 0;

// Первая картинка
$("#main-slider img")
   .attr("src", path + images[currentImage]);

// клик по правой стрелке
$("#main-slider .next").click(function() {
	currentImage++;
	if(currentImage >= images.length) {
		currentImage = 0;
	}
   $("#main-slider img")
       .attr("src", path + images[currentImage]);
   $('#slides ul li').removeClass('active');
   $('#slides ul li').eq(currentImage).addClass('active');
});

// клик по левой стрелке
$("#main-slider .pref").click(function() {
    currentImage--;
    if(currentImage < 1) {
		currentImage = images.length - 1;
	}
		$("#main-slider img")
       .attr("src", path + images[currentImage]);
        $('#slides ul li').removeClass('active');
        $('#slides ul li').eq(currentImage).addClass('active');
});

// Создание карточек фотографий
for(var i = 0; i < images.length; i++) {
	// добавляем элемент в блок с миникартинками
	$('#slides ul').append("<li data-id='" + i + "'>" + 
		"<img src='" + 
		   path + images[i] + 
		"'></li>");
    // если это первая картинка то добавляем класс active
	if(i == 0) {
	    $('#slides ul li').addClass('active');	
	}
}

// Делаем клик по слайдам 
$('#slides ul li'). click(function(e) {
	// убираем у всех элементов класс active
	$('#slides ul li').removeClass('active');
	// на элементе по которому кликнули добавляем класс active
	$(this).addClass('active');
	// получаем id элемента по которому кликнули 
	var id = this.dataset.id;

	// меняем картинку в слайде
	$("#main-slider img")
       .attr("src", path + images[id]);
});

$("#main-slider img").click(function() {
	console.log(this);
	$('#opacity').css({'display':'block'});
	$('#full-image').css({'display':'block'})
	.append('<img src="' + $(this).attr('src') + '">');
});

$("#opacity").click(function() {
    $("#opacity").css({'display':'none'});
    $('#full-image').css({'display':'none'}).empty();
});