function parseQuery(query) {
    if (!query) {
        query = window.location.href;
    }
    var i = query.indexOf('?');
    if (i != -1) {
        query = query.slice(i + 1);
    }
    i = query.indexOf('=');
    if (i == -1) {
        query = '';
    }

    var paramsObj = new Object();
    var paramsArr = query.split('&');
    for (var i = 0; i < paramsArr.length; i++) {
        var t = paramsArr[i].split('=');
        paramsObj[t[0]] = t[1];
    }

    return paramsObj;
}

function buildQuery(paramsObj) {
    var params = '';
    for (var key in paramsObj) {
        if (key) {
            params += key + '=' + paramsObj[key] + '&';
        }
    }

    return params.slice(0, -1);
}
