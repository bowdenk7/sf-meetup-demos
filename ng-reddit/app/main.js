System.register(["@angular/core", "@angular/platform-browser"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, core_2, AppModule, App;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule],
                    declarations: [App],
                    bootstrap: [App]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
            App = (function () {
                function App() {
                }
                return App;
            }());
            App = __decorate([
                core_2.Component({
                    selector: 'app',
                    templateUrl: 'app.html'
                })
            ], App);
            // import { bootstrap }  from "angular2/platform/browser";
            // import { Component } from "angular2/core";
            // import { JSONP_PROVIDERS, Jsonp } from "angular2/http";
            // import { Observable } from "rxjs";
            // import { ApiResponse, Submission } from "./reddit";
            // import "rxjs/add/operator/map";
            // @Component({
            //     selector: "app",
            //     templateUrl: "app.html",
            //     providers: [JSONP_PROVIDERS]
            // })
            // class App {
            //     private feedData: Observable<Submission[]>;
            //     constructor(private jsonp: Jsonp) { }
            //     ngOnInit() {
            //         this.displaySubreddit("aww");
            //     }
            //     private displaySubreddit(subreddit: string) {
            //         this.feedData = this.jsonp
            //             .get("http://reddit.com/r/aww.json?jsonp=JSONP_CALLBACK")
            //             .map(res => (res.json() as ApiResponse).data.children.map(child => child.data));
            //     }
            // }
            // bootstrap(App);
        }
    };
});
// import { bootstrap }  from "angular2/platform/browser";
// import { Component } from "angular2/core";
// import { JSONP_PROVIDERS, Jsonp } from "angular2/http";
// import { Observable } from "rxjs";
// import { ApiResponse, Submission } from "./reddit";
// import "rxjs/add/operator/map";
// @Component({
//     selector: "app",
//     templateUrl: "app.html",
//     providers: [JSONP_PROVIDERS]
// })
// class App {
//     private feedData: Observable<Submission[]>;
//     constructor(private jsonp: Jsonp) { }
//     ngOnInit() {
//         this.displaySubreddit("aww");
//     }
//     private displaySubreddit(subreddit: string) {
//         this.feedData = this.jsonp
//             .get("http://reddit.com/r/aww.json?jsonp=JSONP_CALLBACK")
//             .map(res => (res.json() as ApiResponse).data.children.map(child => child.data));
//     }
// }
// bootstrap(App);
