(function(angular) {
    'use strict';
    angular.module("angular-preload-image", []);
    angular.module("angular-preload-image").factory("preLoader", function() {
        return function(e, t, n) {
            angular.element(new Image).bind("load", function() {
                t()
            }).bind("error", function() {
                n()
            }).attr("src", e)
        }
    });
    angular.module("angular-preload-image").directive("preloadImage", ["preLoader", function(e) {
        return {
            restrict: "A",
            terminal: true,
            priority: 100,
            link: function(t, n, r) {
                var i = r.ngSrc;
                t.default = r.defaultImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEWEygNWiLqlwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAMSURBVAjXY/j//z8ABf4C/tzMWecAAAAASUVORK5CYII=";
                r.$set("src", t.default);
                e(i, function() {
                    r.$set("src", i)
                }, function() {
                    if (r.fallbackImage != undefined) {
                        r.$set("src", r.fallbackImage)
                    }
                })
            }
        }
    }]);
    angular.module("angular-preload-image").directive("preloadBgImage", ["preLoader", function(e) {
        return {
            restrict: "A",
            link: function(t, n, r) {
                if (r.preloadBgImage != undefined) {
                    t.default = r.defaultImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEWEygNWiLqlwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAMSURBVAjXY/j//z8ABf4C/tzMWecAAAAASUVORK5CYII=";
                    n.css({
                        "background-image": 'url("' + t.default+'")'
                    });
                    e(r.preloadBgImage, function() {
                        n.css({
                            "background-image": 'url("' + r.preloadBgImage + '")'
                        })
                    }, function() {
                        if (r.fallbackImage != undefined) {
                            n.css({
                                "background-image": 'url("' + r.fallbackImage + '")'
                            })
                        }
                    })
                }
            }
        }
    }])
})(angular);
