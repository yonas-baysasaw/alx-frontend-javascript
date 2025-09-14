"use strict";
// js/subjects/Java.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    class Java extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher() {
            if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
