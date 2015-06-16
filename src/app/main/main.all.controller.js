var chavo;
(function (chavo) {
    'use strict';
    var Voice = (function () {
        function Voice(description, author, age, icon, createdAt) {
            this.description = description;
            this.author = author;
            this.age = age;
            this.icon = icon;
            this.createdAt = createdAt;
        }
        return Voice;
    })();
    var hoge = (function () {
        function hoge($scope) {
            var _this = this;
            this.$scope = $scope;
            this.voices = new Array();
            var Voice = Parse.Object.extend("Voice");
            var query = new Parse.Query(Voice);
            query.descending("createdAt");
            query.find({
                success: function (results) {
                    _this.$scope.$apply(function () {
                        _this.voices = results;
                    });
                },
                error: function (error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }
        return hoge;
    })();
    chavo.hoge = hoge;
})(chavo || (chavo = {}));