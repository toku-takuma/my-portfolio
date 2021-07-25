  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  let ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    ("body").addClass("ios");
  }


  $(function () {

    //ページ内スクロール
    var navHeight = $(".header").outerHeight();
  
    $('a[href^="#"]').on("click", function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - navHeight;
      $("html, body").animate({ scrollTop: position, }, 300, "swing");
      return false;
    });
  
    //ページトップ
    $("#js-page-top").on("click", function () {
      $("body,html").animate({ scrollTop: 0, }, 300);
      return false;
    });
  
  });
  
function showElementAnimation() {
  let element = document.getElementsByClassName("js-animation");
  if (!element) return; // 要素がなかったら処理をキャンセル
  let showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;

  for (let i = 0; i < element.length; i++) {
    let elemClientRect = element[i].getBoundingClientRect();
    let elemY = scrollY + elemClientRect.top;
    if (scrollY + windowH - showTiming > elemY) {
      element[i].classList.add("is-show");
    } else if (scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove("is-show");
    }
  }
}
showElementAnimation();
window.addEventListener("scroll", showElementAnimation);