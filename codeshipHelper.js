$(document).ready(function() {
    var helper = new CodeshipHelper();
    setTimeout(helper.setLinks, 1500);
});

var CodeshipHelper = (function() {
    var CodeshipHelper = function() {
        this.setLinks();
    };

    CodeshipHelper.prototype.setLinks = function() {

    };

    return CodeshipHelper;
})();

$('span').filter(function() {
    return $(this).text().trim().indexOf('http://bit.ly/') === 0;
}).text(function () {
    return $(this).text().replace("http://bit.ly/", "<a href='#'>Wat</a>"); 
});