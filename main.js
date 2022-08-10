if (window.location.href.indexOf("login") == -1) {
    if (window.location.href.indexOf("courseId") == -1) {
        window.location.href = "https://gbwlxy.dtdjzx.gov.cn/content#/myClass?tbtpId=3559495242979753913&title=全省宣传贯彻《反有组织犯罪法》专题网络培训班";
        setTimeout(function(){
            document.getElementsByClassName("el-button el-button--text el-button--small")[0].click()
        }, 10000);
    }
    else {
        document.getElementsByTagName("video")[0].muted = true; document.getElementsByTagName("video")[0].play(); var ti = document.getElementsByTagName("video")[0].duration - document.getElementsByTagName("video")[0].currentTime;
        console.log(ti);
        if (ti < 1) {
            setTimeout(function(){window.history.back(-1);
                                  }, 2000);
            setTimeout(function(){window.location.reload();
                                  }, 10000);
        }
    }
}
