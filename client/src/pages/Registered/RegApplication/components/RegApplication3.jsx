import React from "react"
import './RegApplication3.css';


export default function RegApplication1() {
    return (
        <div className="input-main-container">
            <div className="input-container-6">
                <div className="input-container-6-1">
                    <label htmlFor="father">Full name of the Father<span className="red">*</span></label>
                    <input type="text" name="father" id="father" />
                </div>
                <div className="input-container-6-2">
                    <label htmlFor="fatherOccupation">Occupation<span className="red">*</span></label>
                    <input type="text" name="fatherOccupation" id="fatherOccupation" />
                </div>
                <div className="input-container-6-3">
                    <label htmlFor="fatherSalary">Monthly Income/Salary</label>
                    <select name="fatherSalary" id="fatherSalary">
                        <option value="">10k-20k</option>
                        <option value="">30k-40k</option>
                        <option value="">50k-60k</option>
                        <option value="">70k-80k</option>
                    </select>
                </div>
            </div>

            <div className="input-container-7">
                <div className="input-container-7-1">
                    <label htmlFor="mother">Full name of the Mother<span className="red">*</span></label>
                    <input type="text" name="mother" id="mother" />
                </div>
                <div className="input-container-7-2">
                    <label htmlFor="motherOccupation">Occupation<span className="red">*</span></label>
                    <input type="text" name="motherOccupationOccupation" id="motherOccupation" />
                </div>
                <div className="input-container-7-3">
                    <label htmlFor="motherSalary">Monthly Income/Salary</label>
                    <select name="motherSalary" id="motherSalary">
                        <option value="">10k-20k</option>
                        <option value="">30k-40k</option>
                        <option value="">50k-60k</option>
                        <option value="">70k-80k</option>
                    </select>
                </div>
            </div>

            <div className="input-container-8">
                <div className="input-container-8-1">
                    <label htmlFor="siblingsWithFamily">How many siblings have their own family?<span className="red">*</span></label>
                    <input type="number" name="siblingsWithFamily" id="siblingsWithFamily" min="0" />
                </div>
                <div className="input-container-8-2">
                    <label htmlFor="siblingsWithWork">How many siblings have their own work?<span className="red">*</span></label>
                    <input type="number" name="siblingsWithWork" id="siblingsWithWork" min="0" />
                </div>
                <div className="input-container-8-3">
                    <label htmlFor="siblingSalary">Monthly Income/Salary</label>
                    <select name="siblingSalary" id="siblingSalary">
                        <option value="">10k-20k</option>
                        <option value="">30k-40k</option>
                        <option value="">50k-60k</option>
                        <option value="">70k-80k</option>
                    </select>
                </div>
            </div>

            <div className="input-container-9">
                <div className="input-container-9-header">
                    <label>How many siblings are still studying?</label>
                </div>
                <div className="input-container-9-1">
                    <label htmlFor="siblingsElementary">Elementary:</label>
                    <input type="number" name="siblingsElementary" id="siblingsElementary" min="0" placeholder="Enter number" />
                </div>
                <div className="input-container-9-2">
                    <label htmlFor="siblingsHighSchool">High School:</label>
                    <input type="number" name="siblingsHighSchool" id="siblingsHighSchool" min="0" placeholder="Enter number" />
                </div>
                <div className="input-container-9-3">
                    <label htmlFor="siblingsCollege">College:</label>
                    <input type="number" name="siblingsCollege" id="siblingsCollege" min="0" placeholder="Enter number" />
                </div>
            </div>

            <div className="input-container-10">
                <div className="input-container-10-1">
                    <label htmlFor="electricBill">Amount of pending electricity bill<span className="red">*</span></label>
                    <input type="text" name="electricBill" id="electricBill" />
                </div>
                <div className="input-container-10-2">
                    <label htmlFor="waterBill">Amount of pending water bill<span className="red">*</span></label>
                    <input type="text" name="waterBill" id="waterBill" />
                </div>
                <div className="input-container-10-3">
                    <label htmlFor="otherExpenses">Other Expenses<span className="red">*</span></label>
                    <input type="text" name="otherExpenses" id="otherExpenses" />
                </div>
            </div>
        </div>
    )
}