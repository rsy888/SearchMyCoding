$(function() {
    $.getJSON("주소", function(res) {
        $(".inflearn .courses a").remove();
        for(var i=0;i<res.length;i++){
            var rating=parseInt(res[i].rating/2)/10;
            $(".inflearn .courses").append(
                `<a class="course" href="${res[i].link}">
                    <div>
                        <!--강의 이미지-->
                        <div class="course_image">
                            <img src="${res[i].image}">
                        </div>
                        <!--강의 제목-->
                        <div class="course_title">
                            ${res[i].title}
                        </div>
                        <!--강의 가격-->
                        <div class="course_price">
                            ${res[i].price}원
                        </div>
                        <!--강의 평점-->
                        <div class="course_rating">
                            ★ ${rating}/5
                        </div>
                    </div>
                </a>`
            )
        }
    });
});