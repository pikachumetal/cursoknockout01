define(["knockout","data/TaskViewModel"], function (ko,TaskViewModel) {
    return {
        init: function () {
           ko.applyBindings(new TaskViewModel());
        }
    };
});