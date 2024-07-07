
//- 01 --PreLoader---//
//- 02 --Custom Header Sticky---//
//- 03 --Window On Scroll---//
//- 04 --Odometer Counter---//
//- 05 --Magnifique Popup---//
//- 06 --Header Auto Active Class---//
//- 07 --Custom Navbar Header---//
//- 08 --Swipper Slider---//
//- 09 --Custom Reply Box---//
//- 10 --Accordion---//
//- 11 --Dropdown Toggle---//
//- 12 --Current Year---//

$(document).ready(() => {
  "use strict";
     
    //--== Preloader ==--//
    setTimeout(function() {
      $('.preloader').fadeToggle();
    }, 1500);
    //--== Preloader ==--//

    // lenis Scroll Init
    // gsap.registerPlugin(ScrollSmoother); 
    // const lenis = new Lenis();
    // gsap.ticker.add(function (time) {
    //   lenis.raf(time * 400);
    // });
    // gsap.ticker.lagSmoothing(0);
    // ScrollTrigger.update();


 // lenis matchMedia Init
 ScrollTrigger.matchMedia({
  "(min-width: 992px)": function() {
  

    // horizontal scroll 
    // const horizontalSections = document.querySelectorAll(".horizontal");
    // if(horizontalSections){
    //   horizontalSections.forEach(section => {
    //     let horizontalItems = gsap.utils.toArray(section.querySelectorAll(".horizontal-item"));
    //     gsap.to(horizontalItems, {
    //       xPercent: -50 * (horizontalItems.length - 1),
    //       ease: "sine.out",
    //       scrollTrigger: {
    //         trigger: section,
    //         pin: true,
    //         scrub: 9,
    //         snap: 2 / (horizontalItems.length - 4),
    //         end: "+=" + section.offsetWidth
    //       }
    //     });
    //   });
    // }
    const horizontalSections = document.querySelectorAll(".horizontal");

    if (horizontalSections) {
      horizontalSections.forEach(section => {
        let horizontalItems = gsap.utils.toArray(section.querySelectorAll(".horizontal-item"));
    
        // Set the width of the container to fit all items horizontally
        gsap.set(section, { 
          width: `${100 * horizontalItems.length / 3}%`
        });
    
        // Set the width of each item to be a fraction of the container width
        horizontalItems.forEach((item) => {
          gsap.set(item, { 
            width: `${100 / horizontalItems.length}%`
          });
        });
    
        // Create a GSAP timeline
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 4,
            snap: 1 / (horizontalItems.length - 1),
            end: "+=" + section.offsetWidth * (horizontalItems.length - 1)
          }
        });
    
        // Initial slower scrolling animation
        tl.to(horizontalItems, {
          xPercent: -25 * (horizontalItems.length - 1), // Adjust for initial slow scroll
          ease: "none",
          duration: 3 // Duration for the initial slow scroll
        });
    
        // Faster scrolling animation
        tl.to(horizontalItems, {
          xPercent: -50 * (horizontalItems.length - 1),
          ease: "none",
          duration: 2 // Duration for the faster scroll
        });
      });
    }
    

    

  },
  
  // responsive
  // "(max-width: 991px)": function() {

  //   const horizontalSections = document.querySelectorAll(".horizontal");
  //   if(horizontalSections){
  //     horizontalSections.forEach(section => {
  //       let horizontalItems = gsap.utils.toArray(section.querySelectorAll(".horizontal-item"));
  //       gsap.to(horizontalItems, {
  //         xPercent: -0 * (horizontalItems.length - 1),
  //         scrollTrigger: {
  //           pin: false,
  //         }
  //       });
  //     });
  //   }

  // },

});
  
 

  // Text Circle 
  const text = document.querySelector(".texta");
  if (text) {
      console.log("Element with class 'texta' found.");
      console.log("Inner text length:", text.innerText.length);
      if (text.innerText.length > 10) { // Adjust this length condition as needed
          console.log("Text length condition met. Transforming text.");
          text.innerHTML = text.innerText
              .split("")
              .map(
                  (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
              )
              .join("");
          console.log("Text transformation completed.");
      } else {
          console.log("Text length condition not met.");
      }
  } else {
      console.log("Element with class 'texta' not found.");
  }
  


  // Click to Scroll Top
  var ScrollTop = $(".scrollToTop");
  $('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // data background
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

    // scroll down Button
    var scrollButton = document.querySelector('#scrollButton');
    if(scrollButton){
      scrollButton.addEventListener('click', function() {
        window.scrollTo({
          top: window.scrollY + bannerHeight,
          behavior: 'smooth'
        });
      });
    }

    //--== Sticky Header ==--//
    $(window).on("scroll", function () {
      
      var fixed_top = $(".header-section, .cmn-fixed");
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("header-fixed");
      }
      else {
        fixed_top.removeClass("header-fixed");
      }
      // Sticky Header
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("header-fixed");
      }
      else {
        fixed_top.removeClass("header-fixed");
      }
      // Check Scroll 
      if ($(this).scrollTop() < 600) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }

      //--== Odometer Counter ==--//
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });
      //--== Odometer Counter ==--//
  
    });
    //--== Sticky Header ==--//

    //--Global SideBar--
    $('.toggleMain-controls .bar-toggles, .cmn-overlay').on('click', function () {
      $('.toggleMain-controls .sidebar-wrapper, .cmn-overlay').toggleClass('active');
    });
    //--Global SideBar--

    //--- Custom Sidebar ---//
    $(".remove-click").on("click", function (e) {
      $(".subside-barmenu").toggleClass("active");
    });
    //--- Custom Sidebar Start ---//

    //--- Custom Tilt Js Start ---//
    const tilt = document.querySelectorAll(".tilt");
    VanillaTilt.init(tilt, {
      reverse: true,
      max: 15,
      speed: 400,
      scale: 1.01,
      glare: true,
      reset: true,
      perspective: 800,
      transition: true,
      "max-glare": 0.45,
      "glare-prerender": false,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
    });
    //--- Custom Tilt Js End ---//

    //--== Aos Animation ==--//
    $(document).ready(function () {
      $('.title').attr({
        "data-aos": "zoom-in",
        "data-aos-duration": "2000"
      });
      
      AOS.init({
        once: true,
      });

      // gsap.registerPlugin(ScrollTrigger);
      
      });
    //--== Aos Animation ==--//

    //--== Progress Bar ==--//
    progress_bar();
    function progress_bar() {
      var speed = 30;
      var items = $('.progress_bar').find('.progress_bar_item');
      
        items.each(function() {
            var item = $(this).find('.progress');
            var itemValue = item.data('progress');
            var i = 0;
            var value = $(this);
        
            var count = setInterval(function(){
                if(i <= itemValue) {
                    var iStr = i.toString();
                    item.css({
                        'width': iStr+'%'
                    });
                    value.find('.item_value').html(iStr +'%');
                }
                else {
                    clearInterval(count);
                }
                i++;
            },speed);
        });
    }
    //--== Progress Bar ==--//

    //--== Nice Select ==--//
    $('select').niceSelect();
    //--== Nice Select ==--//

    //--== Magnigiq Popup Initial ==--//
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    $('.popup_img').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });
    //--== Magnigiq Popup Initial ==--//
    

    //--== Custom Navbar Header ==--//
    $('.navbar-toggle-btn').on('click', function () {
      $('.navbar-toggle-item').slideToggle(300);
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('open');
    });
    $('.menu-item, .active-button').on('click', function () {
      $(this).siblings("ul").slideToggle(300);
    });
    //--== Custom Navbar Header ==--//
  
    //--== Swipper SLider Init Area ==--//

    // Testimonial Section Version 01 //
    const servicewrapper = new Swiper(".service-wrapper", {
      spaceBetween: 0,
      speed: 1200,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-prevteam",
        prevEl: ".swiper-button-nextteam",
      },
      breakpoints: {
        1399: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      },
    });
      // Sponsor Slider //
    const sponsorwrapper = new Swiper(".template-responsive", {
      spaceBetween: 16,
      speed: 1200,
      breakpoints: {
        1399: {
          slidesPerView: 9,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        0: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      },
    });
    // Customer Slider //
    const customerwrapper = new Swiper(".customer-wrapper", {
      spaceBetween: 0,
      speed: 1200,
      loop: true,
      effect: 'fade',
      navigation: {
        nextEl: ".swiper-button-prevteam",
        prevEl: ".swiper-button-nextteam",
      },
      breakpoints: {
        1399: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      },
    });
    // Testimonial Section Version 01 //
      const testimonialwrapv2 = new Swiper(".testimonial-wrapv2", {
      spaceBetween: 0,
      speed: 1200,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-prevteam03",
        prevEl: ".swiper-button-nextteam03",
      },
      breakpoints: {
        1399: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      },
    });
    //--Follow Wrapper Slider --//
    const explorewrapper = new Swiper(".explore-wrapper", {
      spaceBetween: 24,
      speed: 1400,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-prevteam04",
        prevEl: ".swiper-button-nextteam04",
      },
      breakpoints: {
        1199: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 14,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 14,
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });

    //Shop Details
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      },
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
    //Shop Details
    //--== Swipper SLider Init Area ==--//

    //--== Custom Comment / Review Reply Box ==--//
    $(".reply").on("click", function () {
      $(this).toggleClass("reply-active");
      $(this).parent().next(".reply__content").slideToggle();
    });
    //--== Custom Comment / Review Reply Box ==--//

    //--== Custom Accordion ==--//
    $('.accordion-single .header-area').on('click', function () {
      if ($(this).closest(".accordion-single").hasClass("active")) {
        $(this).closest(".accordion-single").removeClass("active");
        $(this).next(".content-area").slideUp();
      } else {
        $(".accordion-single").removeClass("active");
        $(this).closest(".accordion-single").addClass("active");
        $(".content-area").not($(this).next(".content-area")).slideUp();
        $(this).next(".content-area").slideToggle();
      }
    });
    //--== Custom Accordion ==--//

    // Custom Tabs
    $(".tablinks .nav-links").each(function () {
      var targetTab = $(this).closest(".singleTab");
      targetTab.find(".tablinks .nav-links").each(function() {
        var navBtn = targetTab.find(".tablinks .nav-links");
        navBtn.click(function(){
          navBtn.removeClass('active');
          $(this).addClass('active');
          var indexNum = $(this).closest("li").index();
          var tabcontent = targetTab.find(".tabContents .tabItem");
          $(tabcontent).removeClass('active');
          $(tabcontent).eq(indexNum).addClass('active');
        });
      });
    });

    //--== DropDown Toggle ==--//
    $('.dropdown-toggle').dropdown()
    //--== DropDown Toggle ==--//

    //--== Current Year ==--//
    $(".currentYear").text(new Date().getFullYear());
    //--== Current Year ==--//

    // Mouse Follower
    const follower = document.querySelector(".mouse-follower .cursor-outline");
    const dot = document.querySelector(".mouse-follower .cursor-dot");
    window.addEventListener("mousemove", (e) => {
      follower.animate(
        [{
          opacity: 1,
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          easing: "ease-in-out"
        }],
        {
          duration: 3000,
          fill: "forwards"
        }
      );
      dot.animate(
        [{
          opacity: 1,
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          easing: "ease-in-out"
        }],
        {
          duration: 1500,
          fill: "forwards"
        }
      );
    });

    // Mouse Follower Hide Function
    $("a, button").on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('hide-cursor');
    });

    var terElement = $('h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-head');
      $(this).toggleClass('highlight-cursor-head');
    });
    
    var terElement = $('p');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-para');
      $(this).toggleClass('highlight-cursor-para');
    });
      
    //-- Use Gsap Animation --// 
    // Visible From Right Animation
    if(document.querySelector('.visible-from-right')){
      let visibleFromRight = document.querySelectorAll(".visible-from-right")
      visibleFromRight.forEach((visibleFromRight) => {
        let split_item = new SplitText(visibleFromRight, { type: "chars, words" })
        gsap.from(split_item.chars, { duration: 1, x: 95, autoAlpha: 0, stagger: 0.15 });
      })
    }

    // Visible From Right Slowly Animation
    let visibleSlowlyRight = document.querySelectorAll(".visible-slowly-right");
    if ($(visibleSlowlyRight).length > 0) {
      let char_come = gsap.utils.toArray(visibleSlowlyRight);
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });
    }

    // Visible From Bottom Animation
    let visibleFromBottom = gsap.utils.toArray(".visible-from-bottom");
    visibleFromBottom.forEach(splitArea => {
      const trigger = gsap.timeline({
        scrollTrigger: {
          trigger: splitArea,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
        }
      });
      const contentSplitted = new SplitText(splitArea, { type: "words, lines" });
      gsap.set(splitArea, { perspective: 400 });
      contentSplitted.split({ type: "lines" })
      trigger.from(contentSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -75, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });

    // Visible Slowly From Bottom Animation 
    const visibleSlowlyBottom = document.querySelectorAll(".visible-slowly-bottom");
    function visibleSlowly() {
      visibleSlowlyBottom.forEach(splitArea => {
        if (splitArea.anim) {
          splitArea.anim.progress(1).kill();
          splitArea.split.revert();
        }
        splitArea.split = new SplitText(splitArea, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });
        splitArea.anim = gsap.from(splitArea.split.chars, {
          scrollTrigger: {
            trigger: splitArea,
            toggleActions: "restart pause resume reverse",
            start: 'top 90%',
          },
          duration: 0.8,
          ease: "circ.out",
          y: 70,
          stagger: 0.02
        });
      });
    }
    ScrollTrigger.addEventListener("refresh", visibleSlowly);
    visibleSlowly();

});

