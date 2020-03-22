
$(document).ready(function(){

    $(window).scroll(function(){

        var bo = $("body").scrollTop();

        $('#hid').text(bo);

        if ( bo > 200 ) { $("#hid").css("display", "block"); } else { $("#hid").css("display", "none"); };

    })

})
