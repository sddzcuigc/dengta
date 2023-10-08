if (window.location.href.indexOf("login") == -1) {
    if (window.location.href.indexOf("courseId") == -1) {
        window.location.href = "https://gbwlxy.dtdjzx.gov.cn/content#/myClass?tbtpId=3612750724586275761&title=%E6%8E%A8%E8%BF%9B%E2%80%9C%E4%B8%89%E4%B8%AA%E5%8D%81%E5%A4%A7%E2%80%9D%E8%A1%8C%E5%8A%A8%E4%B8%93%E9%A2%98%E5%9F%B9%E8%AE%AD%E7%8F%AD";
        setTimeout(function() {
            var tableColumn7Elements = document.getElementsByClassName('el-table__body')[0].getElementsByClassName('el-table_1_column_7');
            for (var i = 0; i < 15; i++) {
                if (tableColumn7Elements[i].innerText === '未设置' || tableColumn7Elements[i].innerText === '已通过'){
                    console.log(i);
                    var elButtons = getElementsWithText('继续学习', '.el-button.el-button--text.el-button--small');
                    if (elButtons.length > i) {
                        elButtons[i].click();
                        break;
                    }
                } else {
                    var btnNextElement = document.getElementsByClassName("btn-next")[0];
                    if (btnNextElement) {
                        btnNextElement.click();
                    }
                }
            }
        }, 10000);
    } else {
        document.getElementsByTagName("video")[0].muted = true;
        document.getElementsByTagName("video")[0].play();
        var ti = document.getElementsByTagName("video")[0].duration - document.getElementsByTagName("video")[0].currentTime;
        console.log(ti);
        if (ti < 1) {
            setTimeout(function() {
                window.history.back(-1);
            }, 2000);
            setTimeout(function() {
                window.location.reload();
            }, 10000);
        }
    }
}

function getElementsWithText(text, selector) {
    var elements = document.querySelectorAll(selector);
    var result = [];
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].innerText === text) {
            result.push(elements[i]);
        }
    }
    return result;
}
