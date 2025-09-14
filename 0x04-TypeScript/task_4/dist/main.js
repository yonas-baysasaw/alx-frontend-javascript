"use strict";
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
var Subjects;
(function (Subjects) {
    // Create instances of each subject class
    Subjects.cpp = new Subjects.Cpp();
    Subjects.java = new Subjects.Java();
    Subjects.react = new Subjects.React();
    // Create a Teacher object with experienceTeachingC = 10
    Subjects.cTeacher = {
        firstName: "Festus",
        lastName: "Kimani",
        experienceTeachingC: 10,
    };
    // Cpp subject
    console.log("C++");
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    // Java subject
    console.log("Java");
    Subjects.java.setTeacher(Subjects.cTeacher);
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    // React subject
    console.log("React");
    Subjects.react.setTeacher(Subjects.cTeacher);
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
