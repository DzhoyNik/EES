import { makeAutoObservable } from "mobx";

export default class CoursesStore {
    constructor() {
        this._courses = []
        makeAutoObservable(this)
    }

    setCourses(courses) {
        this._courses = courses
    }

    get courses() {
        return this._courses
    }
}