var Person = (function () {
    //constrctor
    function Person(name) {
        this._name = name;
    }
    //public method
    Person.prototype.sayName = function () {
        console.log("your name is:" + this._name);
    };
    return Person;
})();
var van = new Person("V");
van.sayName();
//# sourceMappingURL=app.js.map