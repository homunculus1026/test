"use strict";

//ハンバーガーメニュー
$(function () {
  $("#drawer_toggle").click(function () {
    $(this).toggleClass("open");
    $(".header-top").toggleClass("sp_open");
  });
});

//空室検索
$(function () {
  $(".js-modal-open").on("click", function () {
    $(".js-modal").fadeIn();
    return false;
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
  });
});

// お料理
$(function () {
  if (matchMedia("only screen and (max-width: 767px)").matches) {
    $(".box_img:nth-child(2)")
      .append('<h5 class="append">陶板蒸焼き蟹</h5>')
      .append(
        '<p class="append">ずわいがに特有の香りと甘みが口の中いっぱいに広がります。</p>'
      );
  } else {
    $(".append").remove();
  }
});

//客室
$(function () {
  $(".slider_img, .slider_img2").slick({
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  });
});

//温泉

$(function () {
  $(".slider").slick({
    autoplay: true,
    dots: true,
    fade: true,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});

//フォーム
$(function () {
  $("form").on("copy paste contextmenu", "input", function () {
    return false;
  });
  $("form").submit(function () {
    let err = 0;
    if ($("input[name='name']").val() === "") {
      if ($("span#name").length === 0) {
        $("input[name='name']")
          .css("border", "1px solid red")
          .after("<span id='name'>お名前を入力してください</span>");
        $("span#name").css("color", "red");
      }
      err = 1;
    } else {
      $("input[name='name']").css("border", "1px solid gray");
      $("span#name").text("");
      $("span#name").css("color", "gray");
    }
    if ($("input[name='furigana']").val() === "") {
      if ($("span#furigana").length === 0) {
        $("input[name='furigana']")
          .css("border", "1px solid red")
          .after("<span id='furigana'>フリガナを入力してください</span>");
        $("span#furigana").css("color", "red");
      }
      err = 1;
    } else {
      $("input[name='furigana']").css("border", "1px solid gray");
      $("span#furigana").text("");
      $("span#furigana").css("color", "gray");
    }
    if ($("input[name='tel']").val() === "") {
      if ($("span#tel").length === 0) {
        $("input[name='tel']")
          .css("border", "1px solid red")
          .after("<span id='tel'> 電話番号を入力してください</span>");
        $("span#tel").css("color", "red");
      }
      err = 1;
    } else {
      $("input[name='tel']").css("border", "1px solid gray");
      $("span#tel").text("");
      $("span#tel").css("color", "gray");
    }
    if ($("input[name='mail']").val() === "") {
      if ($("span#mail").length === 0) {
        $("input[name='mail']")
          .css("border", "1px solid red")
          .after("<span id='mail'> メールアドレスを入力してください</span>");
        $("span#mail").css("color", "red");
      }
      err = 1;
    } else {
      $("input[name='mail']").css("border", "1px solid gray");
      $("span#mail").text("");
      $("span#mail").css("color", "gray");
    }
    if ($("input[name='mail2']").val() === "") {
      if ($("span#mail2").length === 0) {
        $("input[name='mail2']")
          .css("border", "1px solid red")
          .after(
            "<span id='mail2'> メールアドレス（確認）を入力してください</span>"
          );
        $("span#mail2").css("color", "red");
      }
      err = 1;
    } else {
      $("input[name='mail2']").css("border", "1px solid gray");
      $("span#mail2").text("");
      $("span#mail2").css("color", "gray");
    }
    if (err == 1) {
      return false;
    }
  }); // end of submit
});
