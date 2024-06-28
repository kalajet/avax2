// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReportCard {

    struct Student {
        string name;
        uint math;
        uint science;
        uint english;
        uint history;
        uint totalMarks;
        string grade;
    }


    mapping(address => Student) public reportCards;

    
    event ReportCardCreated(address indexed studentAddress, string name, uint totalMarks, string grade);


    modifier reportCardNotExists(address studentAddress) {
        require(bytes(reportCards[studentAddress].name).length == 0, "Report card already exists for this student");
        _;
    }


    function calculateGrade(uint totalMarks) internal pure returns (string memory) {
        if (totalMarks >= 360) {
            return "A";
        } else if (totalMarks >= 300) {
            return "B";
        } else if (totalMarks >= 240) {
            return "C";
        } else if (totalMarks >= 180) {
            return "D";
        } else {
            return "F";
        }
    }


    function createReportCard(
        address studentAddress, 
        string memory name, 
        uint math, 
        uint science, 
        uint english, 
        uint history
    ) 
        public 
        reportCardNotExists(studentAddress) 
    {
        uint totalMarks = math + science + english + history;
        string memory grade = calculateGrade(totalMarks);

        reportCards[studentAddress] = Student(name, math, science, english, history, totalMarks, grade);

        emit ReportCardCreated(studentAddress, name, totalMarks, grade);
    }


    function getReportCard(address studentAddress) 
        public 
        view 
        returns (
            string memory name, 
            uint math, 
            uint science, 
            uint english, 
            uint history, 
            uint totalMarks, 
            string memory grade
        ) 
    {
        Student memory student = reportCards[studentAddress];
        return (student.name, student.math, student.science, student.english, student.history, student.totalMarks, student.grade);
    }
}
