// PhotoSwipe
// initPhotoSwipeFromDOM(".js-my-gallery");

(function () {
  //Productsのリンクを有効化
  (".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var nav = (".gnavh");
  var navHeight = nav.outerHeight();

  ('a[href^="#"]').on("click", function () {
    var href = (this).attr("href");
    var target = (href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    ("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

//メニュー
(".openbtn1").click(function () {
  (this).toggleClass('active');
    (".gnav").toggleClass('panelactive');

(".gnav a").click(function () {
    (".openbtn1").removeClass('active');
    (".gnav").removeClass('panelactive');

function showElementAnimation() {
  var element = document.getElementsByClassName("js-animation");
  if (!element) return; // 要素がなかったら処理をキャンセル
​
  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
​
  for (var i = 0; i < element.length; i++) {
    var elemClientRect = element[i].getBoundingClientRect();
    var elemY = scrollY + elemClientRect.top;
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