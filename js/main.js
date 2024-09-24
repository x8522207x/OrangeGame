$(document).ready(() => {
    $('.modal_wrap').css('display', 'none');
    setTimeout(() => {
        $('.loading').remove();
        $('.modal').toggleClass('hide');
        $('.modal_wrap').css('display', '');
    }, 1000);

    ['.event_banner', '.event_gnb_menu'].forEach(ele => $(ele).on('click', () => {
        $('.event_banner').toggleClass('-open');
    }));

    $('.event_gnb_gamestart').on('click', () => {
        window.open("https://galaxy.beanfun.com/webapi/view/login/twp?redirect_url=https://warsofprasia.beanfun.com/Main");
    });

    $('.detail_p1 .video-open').on('click', () => {
        openVideo("MPfzOYYc6jM");
    });

    $('.detail_p4 .video-open').on('click', () => {
        openVideo("5NYtraQokmo");
    });

    $('.modal_close').on('click', () => {
        $('.modal').css('opacity', '0');
        $('.plate_modal').toggleClass('-active');
        $('.modal.type--youtube').toggleClass('hide');
        $('.modal_box_veil').toggleClass('-hide');
        $('.youtube--2').remove();
    });

    const pageSwiper = () => {
        const swiper = new Swiper('.section-pages', {
            direction: 'vertical',
            // slidesPerView: "auto",
            touchReleaseOnEdges: true,
            mousewheel: {
                releaseOnEdges: true,
            },
            loop: false,
            slideActiveClass: 'animated',
            noSwiping: true,
            noSwipingSelector: 'button',
            autoHeight: true,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
            on: {
                init: (swiper) => {
                    $('.gotop').on('click', () => {
                        swiper.slideTo(0);
                    });
                },
                slideChange: (swiper) => {
                    const removeAnimate = ['#p1Video', '.detail_p1', '.title', '.detail_p2', '.title', '.title_p2', '.dimmed_p2', '.title_p3', '.detail_p3', '.title_p4', '.bg_p4', '.visible-roomy', '.title_p5', '.detail_p5', '.bg_p6', '.title_p6', '.detail_p6', '.bg_p7', '.title_p7'];
                    removeAnimate.forEach(ele => $(ele).removeClass('animate'));
                    ['active', 'point'].forEach(cl => ['.depth_1', '.depth_2'].forEach(ele => $(ele).removeClass(cl)));
                    $('.swiper-slide').off('scroll');
                    $('.swiper-slide').removeClass('scrollable');
                    $('.gotop').removeClass('show');

                    if (swiper.realIndex === 0) {
                        addAnimateClass(['#p1Video', '.detail_p1', '.title']);
                        $('.swiper-slide')[0].classList.add('scrollable');
                        $('.depth_1')[0].classList.add('active');
                        $('.depth_1')[0].classList.add('point');
                    } else if (swiper.realIndex === 1) {
                        $('.gotop').addClass('show');
                        addAnimateClass(['.detail_p2', '.title_p2', '.dimmed_p2']);
                        $('.swiper-slide')[1].classList.add('scrollable');
                        $('.depth_1')[0].classList.add('active');
                        $('.depth_2')[0].classList.add('active');
                        $('.depth_2')[0].classList.add('point');
                    } else if (swiper.realIndex === 2) {
                        $('.gotop').addClass('show');
                        addAnimateClass(['.title_p3', '.detail_p3']);
                        $('.swiper-slide')[2].classList.add('scrollable');
                        $('.depth_1')[0].classList.add('active');
                        $('.depth_2')[1].classList.add('active');
                        $('.depth_2')[1].classList.add('point');
                    } else if (swiper.realIndex === 3) {
                        $('.gotop').addClass('show');
                        addAnimateClass(['.title_p4', '.bg_p4']);
                        $('.swiper-slide')[3].classList.add('scrollable');
                        $('.depth_1')[1].classList.add('active');
                        $('.depth_1')[1].classList.add('point');
                    } else if (swiper.realIndex === 4) {
                        $('.gotop').addClass('show');
                        addAnimateClass(['.visible-roomy', '.title_p5', '.detail_p5']);
                        $('.swiper-slide')[4].classList.add('scrollable');
                        $('.depth_1')[1].classList.add('active');
                        $('.depth_2')[2].classList.add('active');
                        $('.depth_2')[2].classList.add('point');
                    } else if (swiper.realIndex === 5) {
                        $('.gotop').addClass('show');
                        addAnimateClass(['.bg_p6', '.title_p6', '.detail_p6']);
                        $('.swiper-slide')[5].classList.add('scrollable');
                        $('.depth_1')[2].classList.add('active');
                        $('.depth_1')[2].classList.add('point');
                    } else if (swiper.realIndex === 6) {
                        $('.gotop').addClass('show');
                        addAnimateClass(['.bg_p7', '.title_p7']);
                        $('.swiper-slide')[6].classList.add('scrollable');
                        $('.depth_1')[3].classList.add('active');
                        $('.depth_1')[3].classList.add('point');
                    }
                },
                slideChangeTransitionStart: function (swiper) {
                    swiper.allowTouchMove = false;
                },
                slideChangeTransitionEnd: (swiper) => {
                    swiper.allowTouchMove = true;
                },
                touchStart: (swiper, event) => {
                    var currentSlide = swiper.slides[swiper.activeIndex];
                    var slideScrollTop = currentSlide.scrollTop;
                    var scrollHeight = currentSlide.scrollHeight;
                    var clientHeight = currentSlide.clientHeight;

                    var isAtTop = (slideScrollTop === 0);
                    var isAtBottom = (slideScrollTop + clientHeight >= scrollHeight);

                    if (isAtTop || isAtBottom) {
                        swiper.allowTouchMove = true;
                    } else {
                        swiper.allowTouchMove = false;
                    }
                    event.stopPropagation();
                },
                touchMove: (swiper, event) => {
                    var currentSlide = swiper.slides[swiper.activeIndex];
                    var slideScrollTop = currentSlide.scrollTop;
                    var scrollHeight = currentSlide.scrollHeight;
                    var clientHeight = currentSlide.clientHeight;

                    if (slideScrollTop === 0 || slideScrollTop + clientHeight >= scrollHeight) {
                        swiper.allowTouchMove = true;
                    } else {
                        swiper.allowTouchMove = false;
                    }
                    event.stopPropagation();
                }
            }
        });

        $('.swiper-slide')[0].classList.add('scrollable');
        swiper.slideTo(0);
        $('.depth_1')[0].classList.add('active');
        $('.depth_1')[0].classList.add('point');

        for (let i = 0; i < 7; i++) {
            addPageClick(i, swiper);
        }
    }

    if ($(window).width() > 768) {
        pageSwiper();
    } else {
        let index = 1;
        $('.event_gnb').toggleClass('type_default');
        $('.event_gnb').toggleClass('type_clear');
        $('.right_arrow').toggleClass('active');
        $('.progress1').toggleClass('active');
        $('.reward1').toggleClass('active');
        new Swiper('.section-pages', {
            direction: 'vertical',
            slidesPerView: "auto",
            touchReleaseOnEdges: true,
            mousewheel: {
                releaseOnEdges: true,
            },
            loop: false,
            freeMode: {
                enabled: true,
                sticky: false,
                momentumBounce: false,
            },
            slideActiveClass: 'animated',
            autoHeight: true,
            speed: 1000,
            passiveListeners: false,
            on: {
                init: (swiper) => {
                    window.addEventListener('scroll', () => {
                        // 获取当前 scrollTop 值
                        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        if (scrollTop > 0) {
                            $('.gotop').addClass('show');
                        } else {
                            $('.gotop').removeClass('show');
                        }
                    });

                    $('.gotop').on('click', () => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    });
                }
            }
        });

        $('.left_arrow').on('click', () => {
            if (index === 2) {
                $('.progress1').toggleClass('active');
                $('.progress2').toggleClass('active');
                $('.left_arrow').toggleClass('active');
                $('.reward1').toggleClass('active');
                $('.reward2').toggleClass('active');
            } else {
                $('.progress2').toggleClass('active');
                $('.progress3').toggleClass('active');
                $('.right_arrow').toggleClass('active');
                $('.reward2').toggleClass('active');
                $('.reward3').toggleClass('active');
            }
            index--;
        });
        $('.right_arrow').on('click', () => {
            if (index === 1) {
                $('.progress1').toggleClass('active');
                $('.progress2').toggleClass('active');
                $('.left_arrow').toggleClass('active');
                $('.reward1').toggleClass('active');
                $('.reward2').toggleClass('active');
            } else {
                $('.progress2').toggleClass('active');
                $('.progress3').toggleClass('active');
                $('.right_arrow').toggleClass('active');
                $('.reward2').toggleClass('active');
                $('.reward3').toggleClass('active');
            }
            index++;
        });
    }
});

const addPageClick = (index, swiper) => {
    $(`.page_p${index + 1}`).on('click', () => {
        swiper.slideTo(index);
    });
}

const addAnimateClass = (arr) => {
    arr.forEach(ele => $(ele).addClass('animate'));
}

const openVideo = (video) => {
    $('.plate_modal').toggleClass('-active');
    $('.modal').css('opacity', '1').css('visibility', 'inherit');
    $('.modal.type--youtube').toggleClass('hide');
    $('.modal_box_veil').toggleClass('-hide');
    $('.modal_source').append(
        `<iframe width="auto" height="auto" class="modal_youtube youtube--2"
        src="https://www.youtube.com/embed/${video}?si=1_stAmmA1RL7LFrt"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>`);
}
