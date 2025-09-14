"use strict";
// js/subjects/React.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    class React extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher() {
            if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
    Subjects.React = React;
})(Subjects || (Subjects = {}));
