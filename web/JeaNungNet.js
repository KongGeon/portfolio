/* 스와이퍼 */

var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

/* 검색순위 자동 올라가는 이벤트 */

function searchUp() {
  setInterval(function () {
    if ($(".search_popularity_ul").css("margin-top") == "-171px") {
      $(".search_popularity_ul").animate({ marginTop: "0px" }, "slow");
    } else {
      $(".search_popularity_ul").animate({ marginTop: "-=19px" }, "slow");
    }
  }, 2000);
}
searchUp();

/* 하트 클릭시 이벤트 */
$(function () {
  $(".empty_heart").click(function () {
    $(this).toggleClass("full_heart");
  });
});

window.onload = function () {
  var width_size = $(".notice").outerHeight();

  $(".reviewbar").css("height", width_size);
};

/* 윈도우사이즈 변경시 리뷰 이벤트 */
$(window).resize(function () {
  // width값을 가져오기
  var width_size = $(".notice").outerHeight();

  $(".reviewbar").css("height", width_size);
});

/* 리뷰 자동 올라가는 이벤트 */

function reviwUp() {
  setInterval(function () {
    if ($(".reviewbarbox_all").css("margin-top") == "-700px") {
      $(".reviewbarbox_all").animate({ marginTop: "0px" }, "slow");
    } else {
      $(".reviewbarbox_all").animate({ marginTop: "-=100px" }, "slow");
    }
  }, 4000);
}
reviwUp();

/* 모바일 푸터 내용 열고 닫는 이벤트 */
$(function () {
  var number = 0;
  $(".arrow").click(function () {
    number += 180;
    $(this).css("transform", "rotate(" + number + "deg)");
    $(".footer_content1_2").slideToggle("fast", "linear");
  });
});

/* 스크롤 애니메이션 */
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  if (wScroll >= $(".contents2").offset().top - $(window).height() / 1.1) {
    $(".contents2").addClass("show");
  }
  if (wScroll >= $(".contents3").offset().top - $(window).height() / 1.1) {
    $(".contents3").addClass("show");
  }
  if (wScroll >= $(".contents4").offset().top - $(window).height() / 1.1) {
    $(".contents4").addClass("show");
  }
  if (wScroll >= $(".notice_main").offset().top - $(window).height() / 1.1) {
    $(".notice_main").addClass("show");
  }
});

/* 상단 이동바 */

$(function () {
  $(".top_btn").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 300);
  });
});

$(window).resize(function () {
  if ($(window).width() > 1630) {
    $(window).scroll(function () {
      var wScroll = $(this).scrollTop();

      if (wScroll !== 0) {
        $(".top_btn").css("display", "block");
      }
      if (wScroll === 0) {
        $(".top_btn").css("display", "none");
      }
    });
  } else if ($(window).width() <= 1630) {
    $(window).scroll(function () {
      var wScroll = $(this).scrollTop();

      if (wScroll !== 0) {
        $(".top_btn").css("display", "none");
      }
      if (wScroll === 0) {
        $(".top_btn").css("display", "none");
      }
    });
  }
});

$(window).resize(function () {
  if ($(window).width() > 768) {
    console.log($(window).width());
    $("#swiper-pagination").addClass("swiper-pagination");
    $("#swiper-button-prev").addClass("swiper-button-prev");
    $("#swiper-button-next").addClass("swiper-button-next");
  } else if ($(window).width() <= 768) {
    $("#swiper-pagination").removeClass("swiper-pagination");
    $("#swiper-button-prev").removeClass("swiper-button-prev");
    $("#swiper-button-next").removeClass("swiper-button-next");
  }
});
