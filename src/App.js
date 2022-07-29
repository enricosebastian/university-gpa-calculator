import React from 'react';
import TermButtonClass from './TermButtonClass';
import TableClass from './TableClass';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            terms: [{termNumber: 1, classes: [{id: 0, courseName: "history", courseCode: "GERPHIS", courseUnit: 3.0, courseGrade: 3.5}, {id: 1, courseName: "scitech", courseCode: "GESTSOC", courseUnit: 3.0, courseGrade: 3.5}], gpa: 0.0}, 
                    {termNumber: 2, classes: [{id: 0, courseName: "filipin", courseCode: "GEFILI", courseUnit: 3.0, courseGrade: 2.5}], gpa: 0.0}, 
                    {termNumber: 3, classes: [{id: 0, courseName: "thesis", courseCode: "THSEC1B", courseUnit: 1.0, courseGrade: 4.0}, {id: 1, courseName: "dance", courseCode: "GEDANCE", courseUnit: 2.0, courseGrade: 4.0}, {id: 2, courseName: "sports", courseCode: "GESPORTS", courseUnit: 2.0, courseGrade: 3.5}], gpa: 0.0}],
            cgpa: 0,
            selectedTerm: 1
        };
    }

    changeSelectedTerm = (newSelectedTerm) => {
        this.setState(() => ({
            selectedTerm: newSelectedTerm
        }));
    };

    changeCourseCode = (classId, termNumber, newCourseCode) => {
        this.setState((prevState) => ({
            ...prevState,
            terms: prevState.terms.map(t => t.termNumber === termNumber ? {...t, classes: t.classes.map(c => c.id === classId ? {...c, courseCode: newCourseCode} : c)} : t)
        }));
    };

    changeCourseUnit = (classId, termNumber, newCourseUnit) => {
        this.setState((prevState) => ({
            ...prevState,
            terms: prevState.terms.map(t => t.termNumber === termNumber ? {...t, classes: t.classes.map(c => c.id === classId ? {...c, courseUnit: newCourseUnit} : c)} : t)
        }));
    };

    changeCourseGrade = (classId, termNumber, newCourseGrade) => {
        this.setState((prevState) => ({
            ...prevState,
            terms: prevState.terms.map(t => t.termNumber === termNumber ? {...t, classes: t.classes.map(c => c.id === classId ? {...c, courseGrade: newCourseGrade} : c)} : t)
        }));
    };

    changeCourseName = (classId, termNumber, newCourseName) => {
        this.setState((prevState) => ({
            ...prevState,
            terms: prevState.terms.map(t => t.termNumber === termNumber ? {...t, classes: t.classes.map(c => c.id === classId ? {...c, courseName: newCourseName} : c)} : t)
        }));
    };

    render() {
        let termButtons = this.state.terms.map(t => <TermButtonClass key={"TermButtonClass_"+t.termNumber} termNumber = {t.termNumber} handleOnClick = {this.changeSelectedTerm}/>);
        let tableRowClass = this.state.terms.map(t => <TableClass key={"TableClass_"+t.termNumber} termNumber={t.termNumber} classes = {t.classes} changeCourseName={this.changeCourseName} changeCourseUnit={this.changeCourseUnit} changeCourseGrade={this.changeCourseGrade} changeCourseCode={this.changeCourseCode} />);
        let selectedTerm = tableRowClass[this.state.selectedTerm - 1];
        return (
            <React.Fragment>
                {termButtons}
                <h1>hello</h1>
                {selectedTerm}
            </React.Fragment>
        );
    }
}

export default App;