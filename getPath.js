var getPath = function (el) {
    if (el.tagName.toLowerCase() == "html")
        return "HTML";
    var str = el.tagName;
    str += (el.id != "") ? "#" + el.id : "";
    if (el.className) {
        var classes = el.className.split(/\s/);
        for (var i = 0; i < classes.length; i++) {
            str += "." + classes[i]
        }
    }
    //console.log(str);
    if (document.querySelectorAll(str).length > 1) {
        var selector = el.nodeName.toLowerCase();

        let sib = el, nth = 1;
        while (sib.previousSibling) {
            sib = sib.previousSibling;
            if (sib.nodeName.toLowerCase() != '#text') nth++;
        }
        str += ":nth-child(" + nth + ")";
        //console.log(str);
    }
    if (document.querySelectorAll(str).length == 1)
        return str;

    return getPath(el.parentNode) + " > " + str;
}

console.log(getPath(document.getElementById('ok')));