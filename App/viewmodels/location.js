define(function () {
    var vm = {
        mapUrl: ko.observable(""),
        largerMapUrl: ko.observable(""),
        activate: function () {
            vm.mapUrl("//www.google.com.au/maps/ms?msa=0&msid=210126513378398375862.0004e54faea1cfd29a293&ie=UTF8&t=m&z=15&output=embed&iwloc=&ll=-37.404528,175.937235");
            vm.largerMapUrl("//maps.google.com/maps/ms?msa=0&amp;msid=210126513378398375862.0004e54faea1cfd29a293&amp;ie=UTF8&amp;ll=-37.40259,175.940031&amp;spn=0,0&amp;t=m&amp;source=embed");
        }
    };
     return vm;
});