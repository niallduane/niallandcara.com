define(['durandal/http', 'durandal/app'], function (http, app) {
    function rsvpModel() {
        var s = this;
        s.name = ko.observable("").extend({ required: { message: "Enter your name(s)" } });
        s.email = ko.observable("").extend({ required: { message: "Enter your email" } }).extend({ email: { message: "Enter a valid email" } });
        s.requirements = ko.observable("");
        s.comments = ko.observable("");

        s.showSuccess = ko.observable(false);
        s.showCancel = ko.observable(false);
        s.showLoading = ko.observable(false);

        s.showForm = function() {
            s.showCancel(false);
            s.showSuccess(false);
            s.showLoading(false);
        };

        s.serverError = ko.observable("");
        s.isFormVisible = ko.computed(function () {
            return (!s.showSuccess() && !s.showCancel() && !s.showLoading());
        });

        s.confirm = function () {
            if (s.errors().length == 0) {
                s.showLoading(true);
                $.post('/api/AddRSVP.php',
                    {
                        name: this.name(),
                        email: this.email(),
                        dietaryrequirements: this.requirements(),
                        Comments: this.comments(),
                        attending: true
                    }).done(function(r) {
                        if (r.res) { s.showSuccess(true); } else { s.serverError(r.message); } s.showLoading(false);
                    });
            }
            else {
                s.errors.showAllMessages();
            }
        };

        s.cancel = function () {
            if (s.errors().length == 0) {
                s.showLoading(true);
                $.post('/api/AddRSVP.php',
                    {
                        name: this.name(),
                        email: this.email(),
                        dietaryrequirements: this.requirements(),
                        Comments: this.comments(),
                        attending: false
                    }).always(function(r) { 
                        if (r.res) { s.showCancel(true); } else { s.serverError(r.message); } s.showLoading(false);
                    });
            }
            else {
                s.errors.showAllMessages();
            }
        };
        
        activate = function () {
            //require(["/Scripts/tags-input/jquery.tagsinput.js"], function () {
            //    $("#name").tagsInput({
            //        defaultText: "add name",
            //        width: '100%',
            //        autosize: false
            //    });
            //});
            //vm.errors.removeAll();
        };

        s.errors = ko.validation.group(s);
    };
    
    return new rsvpModel();
});