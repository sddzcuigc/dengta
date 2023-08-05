if (window.location.href.indexOf("login") == -1) {
    if (window.location.href.indexOf("courseId") == -1) {
        window.location.href = "https://gbwlxy.dtdjzx.gov.cn/content#/myClass?tbtpId=3612750724586275761&title=%E6%8E%A8%E8%BF%9B%E2%80%9C%E4%B8%89%E4%B8%AA%E5%8D%81%E5%A4%A7%E2%80%9D%E8%A1%8C%E5%8A%A8%E4%B8%93%E9%A2%98%E5%9F%B9%E8%AE%AD%E7%8F%AD";
        setTimeout(function(){
            var tableColumn7Elements = document.getElementsByClassName('el-table_1_column_7');
            if (tableColumn7Elements.length === 0 || (tableColumn7Elements.length > 5 && tableColumn7Elements[5].innerText === '未设置')) {
                document.getElementsByClassName("el-button el-button--text el-button--small")[0].click();
            } else {
                var btnNextElement = document.getElementsByClassName("btn-next")[0];
                if (btnNextElement) {
                    btnNextElement.click();
                }
            }
        }, 10000);
    } else {
        document.getElementsByTagName("video")[0].muted = true; 
        document.getElementsByTagName("video")[0].play(); 
        var ti = document.getElementsByTagName("video")[0].duration - document.getElementsByTagName("video")[0].currentTime;
        console.log(ti);
        if (ti < 1) {
            setTimeout(function(){
                window.history.back(-1);
            }, 2000);
            setTimeout(function(){
                window.location.reload();
            }, 10000);
        }
    }
}
