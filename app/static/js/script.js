$(function(){
    // jQuery Selector -> mirip CSS selector
    // - format umumnya: $('elemenHTML')
    // - langsung elemen (p, body, h1) 
    // - class (.namaClass)
    // - id (.namaid)
    // attribute ([value='isivalue'])

    // Effects -> kasih animasi simpel

    // Hide -> hide(duration) -> duration: 'fast', 'slow', milisecond
    // $("#panel").hide(1000)

    // // SHOW
    // $('#panel').show('fast')

    // // Chaining
    // // $('#panel').hide('slow').show('slow')

    // // TOGGLE -> ganti visibility (kalau lagi hide bakal jadi show dan sebaliknya)
    // $('#panel').toggle(1000)

    // SLIDE -> In/Out/Toggle
    // sama kayak hide/show cuma animasinya sliding
    // $('#panel').slideUp(1000) // buat hide
    // $('#panel').slideDown(1000) // buat show
    // $('#panel').slideToggle(1000) // buat toggle

    // FADE -> In/Out.Toggle/To
    $('#panel').fadeOut('slow') // untuk hide
    $('#panel').fadeIn('slow') // untuk show
    // $('#panel').fadeToggle('slow') // untuk toggle
    $('#panel').fadeTo(1000, 0.5) // (duration, opacity)

    // on click
    $('#btn').on('click', function(){
        $('#panel').animate({
            opacity: '1',
            width: '50px'
        },2000)
    })

    //on mouse enter
    $('#btn').on('mouseenter', function(){
        //animate({ubah elemen}, duration)
        $('#panel').animate({
            rotate: '360deg'
        },'slow')
    })

    // select element slidernya
    var $slider = $('.carousel')
    var $sliderContainer = $('carousel-image-container')
    var $slides = $('.carousel-image')

    //cari width dan height tiap image
    var slideWidth = $slides.width()
    var slideHeight = $slides.height()

    // cari tahu ada berapa image dan total width dari semua image
    var slideCount = $slides.length
    var totalWidth = slideWidth * slideCount

    // buat supaya 1 image aja yang muncul
    $slider.css({
        width: slideWidth,
        height: slideWidth
    })

    // buat supaya defaultnya image ke-2
    // ubah posisi frame/container
    $sliderContainer.css({
        width: totalWidth,
        marginLeft: -slideWidth
    })

    //arrow kiri
    $('#left-arrow').on('click',function(){
        $sliderContainer.animate({
            left: +slideWidth
        }, 'slow', () => {
            $('carousel-image:last-child').prependTo('.carouse-image-container')
            $('.carousel-image-container').css('left','0')
        })
    })

})