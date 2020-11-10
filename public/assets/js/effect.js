$(document).ready(function () {
    // console.log("Code by tuanha.asia with 💙")
    // Fixed menu
    // var num = $('header').offset().top;
    // $(window).bind('scroll', function () {
    //     if ($(window).scrollTop() > num) {
    //         $('header').addClass('fixed');
    //     } else {
    //         $('header').removeClass('fixed');
    //     }
    // });
    var wrapper = $('.wrapper-bg');

    function wrapperAction(status){
        if(status){
            wrapper.fadeIn()
            overflowBody(1)
        }else{
            wrapper.fadeOut()
            overflowBody(0)
        }
    }
    function overflowBody(status){
        if(status){
            $('body').css('overflow','hidden')
        }else{
            $('body').css('overflow','auto')
        }
    }
    function openModal(){
        $('#modalSubscribe').modal('show');
    }
    function closeMenu(){
        $('header .menu').css('left','-33rem');
        wrapperAction(0)
    }
    function openMenu(){
        gsap.to($('.btn-menu').parent().find('.menu'),{
            duration: 0.4,
            x: 373
        })
        wrapperAction(1)
    }
    var btnShowMenu = $('.btn-menu');
    btnShowMenu.click(function(){
        openMenu();
    })

    var btnCloseMenu = $('.close-menu');
    btnCloseMenu.click(function(){
        closeMenu();
    })   
    
    wrapper.click(function(){
        wrapperAction(0);
        closeMenu();
    })
    
    setTimeout(function(){
        $('#exampleModalCenter').modal('show')
    },30000)

    $('.close-btn').click(function(){
        $('#exampleModalCenter').modal('hide')
    })


    $('.close-modal').click(function(){
        $('#modalSubscribe').modal('hide')
    });   
    $('.goToTop').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    })
    $('.menu-icon').click(function(){
        $('header .menu').css('left',0);
        wrapperAction(1)
    })    

    $('.search-block .list-item .item').click(function(){
        let id = $(this).data('id');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.top-local').find(`.block-${id}`).fadeIn()
        $('.top-local').find(`.block-${id}`).siblings().removeClass('active')
        $('.top-local').find(`.block-${id}`).siblings().hide()
    })   
    
    $('.types .item').click(function(){
        let id = $(this).data('id');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).closest('._body').find(`.block-${id}`).fadeIn();
        $(this).closest('._body').find(`.block-${id}`).siblings().removeClass('active');
        $(this).closest('._body').find(`.block-${id}`).siblings().hide();
    });

    $('.btn-viewmore').click(function(){
        let $this = $(this);
        if($this.hasClass('mininal')){
            $(this).removeClass('mininal');
            $(this).closest('.ticket-box').removeClass('show');
        }else{
            $(this).addClass('mininal');
            $(this).closest('.ticket-box').addClass('show');
        }        
    });
    


      $('#filter-checkbox').change(function() {
          let $this = $(this)
        if(this.checked) {
            $this.closest('.checkbox').addClass('on').removeClass('off')
            $('.filter-box').find('.text').text('Lọc thông minh')
            $('.big-filter-box').addClass('hidden-box')
        }else{
            $this.closest('.checkbox').addClass('off').removeClass('on')
            $('.filter-box').find('.text').text('Lọc bằng tay')
            $('.big-filter-box').removeClass('hidden-box')
        }
        
    });
    $('.pagination .mininal').click(function(){
        $('.filter-box').find('.text').text('Lọc thông minh')
            $('.big-filter-box').addClass('hidden-box')
    });
    $('.widget .mininal').click(function(){
        let $this = $(this);
        if($this.hasClass('up')){
            $this.removeClass('up');
            $this.closest('.widget').removeClass('mininal-widget');
        }else{
            $this.addClass('up');
            $this.closest('.widget').addClass('mininal-widget');
        }
    });
    $('.show-reply').click(function(){
        let $this = $(this);
        if($this.hasClass('hide-reply')){
            $this.removeClass('hide-reply');
            $this.parent().find('.list-reply-comment').removeClass('list-reply-comment-hidden')
        }else{
            $this.addClass('hide-reply');
            $this.parent().find('.list-reply-comment').addClass('list-reply-comment-hidden')
        }
    })
})


$(function () {
    var simplemde = new SimpleMDE({ 
        element: document.getElementById("comment") ,
        status: false
    });
    $('[data-toggle="tooltip"]').tooltip()
  });

