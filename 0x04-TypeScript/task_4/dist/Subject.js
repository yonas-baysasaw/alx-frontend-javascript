"use strict";
// js/subjects/Subject.ts
/// <reference path="Teacher.ts" />
var Subjects;
(function (Subjects) {
    class Subject {
        setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
