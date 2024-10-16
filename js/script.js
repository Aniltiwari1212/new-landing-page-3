document.addEventListener("DOMContentLoaded", function () {
    const elements = Array.from(document.querySelectorAll("h2[data-count]"));
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= 0.5) {
                    const index = elements.indexOf(entry.target);
                    const delay = index * 250;
                    setTimeout(() => startCounter(entry.target), delay);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.5
        }
    );
    elements.forEach((element) => observer.observe(element));
  
    function startCounter(element) {
        const target = parseInt(element.getAttribute("data-count"));
        const additionalData = element.getAttribute("additional-data") || "";
        const totalFrames = 480;
        let frame = 0;
  
        function easeOut(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        }
  
        function counter() {
            if (frame >= totalFrames) {
                element.textContent = target + additionalData;
                return;
            }
            frame++;
            const easedValue = easeOut(frame, 0, target, totalFrames);
            element.textContent = Math.floor(easedValue) + additionalData;
            requestAnimationFrame(counter);
        }
        counter();
    }
  });
  
  
  (function() {
    "use strict";
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Hero type effect
     */
    const typed = select('.typed')
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items')
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  
  })()
  
AOS.init();



$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider').owlCarousel({
		loop:false,
		autoplay:true,
		margin:15,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1024:{
				items:1,
				margin:50
			}
		}
	});

  $('.logoSlider2').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			},
			1024:{
				items:5,
				margin:50
			}
		}
	});

  $('.blogSlider').owlCarousel({
		loop:false,
		autoplay:false,
		margin:15,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1024:{
				items:2,
				margin:30
			}
		}
	});
});

$(document).ready(function() {
  var $videoSrc;
  $('.video-btn').click(function() {
      $videoSrc = $(this).data("src")
  });
  console.log($videoSrc);
  $('#myModal').on('shown.bs.modal', function(e) {
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0")
  })
  $('#myModal').on('hide.bs.modal', function(e) {
      $("#video").attr('src', $videoSrc)
  })
});
  
  
  
  
  
  
  
  
  
  
  