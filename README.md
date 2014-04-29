####Routes and Views 

Views are different pages loaded in the same page. This is what Singple Page Application is right ? 

we add a container as 
```html
<div ng-view></div>
```

or

```html
<ng-view></ng-view>
```
In our javascript file we add a config to the main app providing the `$routeProvider` .
```javascript
app.config(function($routeProvider){
....
});
```
Then for wach view we add the condition for the route to `$routeProvider` . 

```javascript
$routeProvider.when("/num" , { templateUrl : "num.html", controller: "NumController"})
```
We can pass the Controller to define the scope params available in that particular view . 

For each view we create a template html file and provide the path in the configuration.

######NOTE :  From angular 1.2 + we need add an additional dependency for angular-route
