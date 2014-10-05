define(function () {
    var vm = {
        dictionaryList: ko.observable({
            kiwi: ko.observableArray([]),
            irish: ko.observableArray([])
        }),
        activate: function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (width < 767) { $('html, body').animate({ scrollTop: 500 }, 500); }
            $(".js-tooltip").tooltip();

            vm.dictionaryList().kiwi.removeAll();
            vm.dictionaryList().irish.removeAll();


            $.get('/api/dictionary.php',
                function (r) {
                    $.each(r.kiwi, function (i) { vm.dictionaryList().kiwi.push(r.kiwi[i]); });
                    $.each(r.irish, function (i) { vm.dictionaryList().irish.push(r.irish[i]); });
                });
        }
    };

    return vm;
});