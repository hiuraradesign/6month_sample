
/ハンバーガーメニューの指示/ 

const ham = $('.humburger'); // ハンバーガーメニューの要素を取得
const nav = $('.nav_menu'); // ナビゲーションメニューの要素を取得
ham.on('click', function () {
    nav.toggleClass('active'); // 'active' クラスを付け外し
});

const closebtn = $('.close'); // 閉じるボタンの要素を取得
closebtn.on('click', function () {
    nav.removeClass('active'); // メニューを閉じる
});
