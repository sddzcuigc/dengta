if (window.location.href.indexOf("login") == -1) {
    if (window.location.href.indexOf("courseId") == -1) {
        window.location.href = "https://gbwlxy.dtdjzx.gov.cn/content#/myClass?tbtpId=3487301376055194246&title=%E5%85%A8%E7%9C%81%E5%B9%B2%E9%83%A8%E6%94%BF%E5%BE%B7%E6%95%99%E8%82%B2%E4%B8%93%E9%A2%98%E5%9F%B9%E8%AE%AD%E7%8F%AD";
        //把上面的地址改成你课程页面的地址
        setTimeout(function(){
            document.getElementsByClassName("el-button el-button--text el-button--small")[0].click()
        }, 10000);
    }
    else {
        document.getElementsByTagName("video")[0].muted = true; document.getElementsByTagName("video")[0].play(); var ti = document.getElementsByTagName("video")[0].duration - document.getElementsByTagName("video")[0].currentTime;
        console.log(ti);
        if (ti == 0) {
            window.history.back(-1);
            window.location.reload();
        }
    }
}
