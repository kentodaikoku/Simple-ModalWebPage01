// カルーセル
$('#carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
});


// モーダル
$('.show').modaal();


// アラート
$('.share').on('click', (c) => {
    alert(c.target.dataset.dish + 'のレシピをシェアしました♪');
    $('.show').modaal('close');
});