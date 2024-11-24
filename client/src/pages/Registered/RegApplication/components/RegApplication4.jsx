import React from "react"

export default function RegApplication1() {
    return (
        <div className="input-main-container">
            <div className="input-container-1">
                <div className="input-container-1-1">
                    <label htmlFor="lastSchool">Last school attended<span className="red">*</span></label>
                    <input type="text" name="lastSchool" id="lastSchool" />
                </div>
                <div className="input-container-1-2">
                    <label htmlFor="lastCourse">Course<span className="red">*</span></label>
                    <input type="text" name="lastCourse" id="lastCourse" />
                </div>
                <div className="input-container-1-3">
                    <label htmlFor="grades">Grades/Marks (General Average)<span className="red">*</span></label>
                    <input type="text" name="grades" id="grades" />
                </div>
            </div>

            <div className="input-container-2">
                <div className="input-container-2-1">
                    <label htmlFor="numOfUnits">Number of Units (if college)</label>
                    <input type="text" name="numOfUnits" id="numOfUnits" />
                </div>
                <div className="input-container-2-2">
                    <label htmlFor="newSchool">School about to Attend<span className="red">*</span></label>
                    <input type="text" name="newSchool" id="newSchool" />
                </div>
                <div className="input-container-2-3">
                    <label htmlFor="newCourse">Course<span className="red">*</span></label>
                    <input type="text" name="newCourse" id="newCourse" />
                </div>
            </div>

            <div className="input-container-3">
                <div className="input-container-3-1">
                    <label htmlFor="levelYear">Level/Year</label>
                    <input type="text" name="levelYear" id="levelYear" />
                </div>
                <div className="input-container-3-2">
                    <label htmlFor="semester">Semester<span className="red">*</span></label>
                    <input type="text" name="semester" id="semester" />
                </div>
            </div>
        </div>
    )
}