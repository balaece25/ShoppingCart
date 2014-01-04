
//show="visible" directive name = scope property name
storeApp.directive("show", function () {
     var myfunction=function (scope, element, attributes) {
            scope.$watch(attributes.show, function (value) {
                element.css('display', value ? '' : 'none');
                element.css('color', 'green');
            });
        };
    return {
        //scope - scope object
        //element - defines the element
        //attributes contains the elements attributes
        link: myfunction

    };
});


//<myWidget>child paragraph control</mywidget>
storeApp.directive("myWidget", function () {
    var linkFunction = function (scope, element, attributes) {
        var paragraph = element.children()[0];
         $(paragraph).on("click", function () {
            $(this).css({ "background-color": "red" });
        });
    };
    return {
        restrict: "E",
        link: linkFunction 
    };
});

storeApp.directive("myWidget2", function () {
    return {
        restrict: "E",
        template: "<p>Hello World</p>"
    };
});

