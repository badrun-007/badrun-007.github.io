

window.onscroll = function() {myFunction()};

function myFunction() {
	var winscroll = document.body.scrollTOp || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winscroll / height) * 100;
	var myBar = document.getElementById('myBar');
	myBar.style.width = scrolled + "%";
	
}




$('.page-scroll').on('click', function(){
	
	//ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap elemen ybs
	var elementujuan = $(tujuan);

	//pindah scroll 
	$('html, body').animate ({
		scrollTop: elementujuan.offset().top -50
	}, 1000);

});

//paralax

$(window).scroll(function() {
	var wscrool = $(this).scrollTop();
	
	$('.jumbotron img').css ({
		'transform' : 'translate(0px, '+ wscrool/4 +'%)'
	})

	$('.jumbotron h1').css ({
		'transform' : 'translate(0px, '+ wscrool/2 +'%)'
	})

	$('.jumbotron p').css ({
		'transform' : 'translate(0px, '+ wscrool/1.2 +'%)'
	})
// akhir paralax


});
