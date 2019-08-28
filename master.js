$(document).ready(function(){

    $('.hamburger').click(function(){
        $('.mobile-nav').css('right','0');
        $('.black').addClass('enable');
        let delay = 150;
        setTimeout(function(){
            $('.mobile-nav a:nth-child(1) .mobile-link').css('opacity','1');
            $('.mobile-nav a:nth-child(1) .mobile-link').css('top','0');
        },delay);
        setTimeout(function(){
            $('.mobile-nav a:nth-child(2) .mobile-link').css('opacity','1');
            $('.mobile-nav a:nth-child(2) .mobile-link').css('top','0');
        },delay*2);
        setTimeout(function(){
            $('.mobile-nav a:nth-child(3) .mobile-link').css('opacity','1');
            $('.mobile-nav a:nth-child(3) .mobile-link').css('top','0');
        },delay*3);
    });

    $('.cross img').click(function(){
        $('.mobile-nav').css('right','-100%');
        $('.black').removeClass('enable');
        $('.mobile-link').css('opacity','0');
        $('.mobile-link').css('top','50px');
    });

    $('.black').click(function(){
        $('.mobile-nav').css('right','-100%');
        $('.black').removeClass('enable');
        $('.mobile-link').css('opacity','0');
        $('.mobile-link').css('top','50px');
    });

	// $("body").fadeIn(250);
    $('.loader').fadeOut(250);
    // $('.circle').css('left','0%');
    // $('.tiny-circle').css('top','25%');
    // $('.tiny-circle').css('left','-2%');
    // $('.inner-circle').css('left','50%');
    // $('.square').css('left','5%');
    // $('.square').css('top','75%');
    // $('.square').css('transform','translate(-50%,-50%) rotate(-45deg)');
    setTimeout(function(){
        $('button.highlight').css('opacity','1');
        $('button.highlight').css('top','0');
        // $('.circle').css('transition','all.05s cubic-bezier(.43,.13,.09,1.45)');
        // $('.tiny-circle').css('transition','all.05s cubic-bezier(.43,.13,.09,1.45)');
        // $('.inner-circle').css('transition','all.05s cubic-bezier(.43,.13,.09,1.45)');
        // $('.square').css('transition','all.05s cubic-bezier(.43,.13,.09,1.45)');
    },1000);

    var LazyDifference = 4*$(window).height()/5;
 
    // $("a").click(function(event){
    //     event.preventDefault();
    //     linkLocation = this.href;
    //     $("body").fadeOut(250, redirectPage);      
    // });         
    // function redirectPage() {
    //     window.location = linkLocation;
    // }

    // $('.button-split button').click(function(){
    //     $('article').removeClass('hide');
    //     $('.button-split').css('display','none');
    //     $('body, html').animate({scrollTop: $(window).scrollTop() + $(window).height()/4}, 1000);
    // });

    // $('.all-button').click(function(){
    //     $('.button-split').css('display','none');
    //     $('article').removeClass('hide');
    //     $('article').css('top','0px');
    //     $('article').css('opacity','1');
    //     $('.work-button').removeClass('active');
    //     $('.all-button').addClass('active');
    // });
    // $('.web-button').click(function(){
    //     $('.button-split').css('display','none');
    //     $('article').addClass('hide');
    //     $('article').css('top','0px');
    //     $('article').css('opacity','1');
    //     $('article.Web').removeClass('hide');
    //     $('.work-button').removeClass('active');
    //     $('.web-button').addClass('active');
    // });
    // $('.design-button').click(function(){
    //     $('.button-split').css('display','none');
    //     $('article').addClass('hide');
    //     $('article').css('top','0px');
    //     $('article').css('opacity','1');
    //     $('article.Design').removeClass('hide');
    //     $('.work-button').removeClass('active');
    //     $('.design-button').addClass('active');
    // });
    // $('.ml-button').click(function(){
    //     $('.button-split').css('display','none');
    //     $('article').addClass('hide');
    //     $('article').css('top','0px');
    //     $('article').css('opacity','1');
    //     $('article.ML').removeClass('hide');
    //     $('.work-button').removeClass('active');
    //     $('.ml-button').addClass('active');
    // });
    // $('.videos-button').click(function(){
    //     $('.button-split').css('display','none');
    //     $('article').addClass('hide');
    //     $('article').css('top','0px');
    //     $('article').css('opacity','1');
    //     $('article.Videos').removeClass('hide');
    //     $('.work-button').removeClass('active');
    //     $('.videos-button').addClass('active');
    // });
    // $('.mobile-button').click(function(){
    //     $('.button-split').css('display','none');
    //     $('article').addClass('hide');
    //     $('article').css('top','0px');
    //     $('article').css('opacity','1');
    //     $('article.Mobile').removeClass('hide');
    //     $('.work-button').removeClass('active');
    //     $('.mobile-button').addClass('active');
    // });

    function slideUpLazy(className,scrollVal){
        if (!$(className).offset()) return false;
        if($(className).offset().top == 0){
            return false;
        }

        else if(scrollVal>$(className).offset().top - LazyDifference){
            $(className).css('top','0px');
            $(className).css('opacity',1);
            return true;
        }

        return false;
    }

    let loaded = false;

    $(window).scroll(function(){
        i = $(window).scrollTop();
        if(i>0){
            $('header').addClass('shadow');
            $('.cross').css('height','80px');
        }
        else{
            $('header').removeClass('shadow');
            $('.cross').css('height','120px');
        }

        if(!loaded){
            slideUpLazy('section h2',i);
            // slideUpLazy('.work-filter',i);
            slideUpLazy('.a-kitty',i);
            slideUpLazy('.a-workaholic',i);
            slideUpLazy('.a-pixel',i);
            slideUpLazy('.a-rounders',i);
            slideUpLazy('.a-build',i);
            //slideUpLazy('.a-poetry-rnn',i);
            //slideUpLazy('.a-manuscript',i);
            //slideUpLazy('.a-camouflage',i);
            // slideUpLazy('.a-wct',i);
            //slideUpLazy('.a-gnn',i);
            slideUpLazy('.a-rounders',i);
            slideUpLazy('.a-playsmid',i);
            //slideUpLazy('.a-sentiment',i);
            //slideUpLazy('.a-face',i);
            //slideUpLazy('.a-inkhostel',i);
            //slideUpLazy('.a-burgerbot',i);
            slideUpLazy('.a-ftt',i);
            loaded = slideUpLazy('.a-sixth-sense',i);
            //slideUpLazy('.a-bubblejs',i);
            // slideUpLazy('.a-spherical',i);
            // loaded = slideUpLazy('.a-vwo',i);
            //loaded = slideUpLazy('.a-source-code',i);
            //loaded = slideUpLazy('.a-google-doodle',i);
        }
    });

    // $('section.intro').mousemove(function(e){
    //     if(movement){
    //     $('.tiny-circle').css('top',25/100*$('.circle-wrapper').height() + (e.clientY - $('section.intro').height()/2)/20);
    //     $('.tiny-circle').css('left',-2/100*$('.circle-wrapper').width() + (e.clientX - $('section.intro').width()/2)/20);
    //     $('.square').css('top',75/100*$('.circle-wrapper').height() + (e.clientY - $('section.intro').height()/2)/30);
    //     $('.square').css('left',5/100*$('.circle-wrapper').width() + (e.clientX - $('section.intro').width()/2)/30);
    //     $('.inner-circle').css('top',50/100*$('.circle-wrapper').height() + (e.clientY - $('section.intro').height()/2)/40);
    //     $('.inner-circle').css('left',50/100*$('.circle-wrapper').width() + (e.clientX - $('section.intro').width()/2)/40);
    //     $('.circle').css('top',0/100*$('.circle-wrapper').height() + (e.clientY - $('section.intro').height()/2)/60);
    //     $('.circle').css('left',0/100*$('.circle-wrapper').width() + (e.clientX - $('section.intro').width()/2)/60);
    //     }
    // });
});