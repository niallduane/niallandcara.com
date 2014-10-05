define(function () {
    var vm = {
        displayName: "accommodation",
        accommodationList: ko.observable({
            bedbreakfasts: ko.observableArray([]),
            motels: ko.observableArray([]),
            beachhouses: ko.observableArray([])
        }),
        activate: function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (width < 767) { $('html, body').animate({ scrollTop: 500 }, 500); }
            $(".js-tooltip").tooltip();

            vm.accommodationList().bedbreakfasts.removeAll();
            vm.accommodationList().motels.removeAll();
            vm.accommodationList().beachhouses.removeAll();

            $.get('/api/accomodation.php',
                function (r) {
                    $.each(r.bedbreakfasts, function (i) { vm.accommodationList().bedbreakfasts.push(r.bedbreakfasts[i]); });
                    $.each(r.motels, function (i) { vm.accommodationList().motels.push(r.motels[i]); });
                $.each(r.beachhouses, function (i) { vm.accommodationList().beachhouses.push(r.beachhouses[i]); });
            });
        }
    };
    return vm;
});