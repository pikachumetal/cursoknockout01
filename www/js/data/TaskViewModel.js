define(['knockout', 'data/taskData'], function (ko, taskData) {
    'use strict';

    function Task(description,checked) {
        var self = this;
        self.description = description;
        self.checked= checked || false;
    }

    return function TaskViewModel() {
        var self = this;
        var storage = taskData.load();
        if (typeof storage !== 'undefined' && storage.length > 0) {
            self.tasks = ko.observableArray(storage || []);
        } else {
            self.tasks = ko.observableArray([]);
        }

        self.deleteAllTask = function () {
            sef.tasks.removeAll();
        };

        self.addTask = function () {
            self.tasks.push(new Task(""));
        };

        self.removeTask = function (task) {
            self.tasks.remove(task);
        };

        self.saveTaskStore = function () {
            taskData.save(self.tasks());
        };

        self.loadTaskStore = function () {
            var storage = taskData.load();
            if (typeof storage !== 'undefined' && storage.length > 0) {
                self.tasks(storage || []);
            }else{
                self.tasks([]);
            }
        };

        self.clearTaskStore = function () {
            taskData.clear();
            self.tasks.removeAll();
        };

        function loadTasks() {
            return [new Task("task1"), new Task("task2")];
        }
    };
});