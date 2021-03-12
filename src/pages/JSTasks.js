import React from "react";
import data from '../data/Student_Data.json';

function JSTasks() {

    function addNewObjectAtEnd() {
        const sampleObject = {
            added: true
        }
        let newData = [...data, sampleObject];
        console.log(newData);
    }

    //addNewObjectAtEnd();
    function addAdditionalPropertyToEachItem() {
        const property = {
            isStudent: true
        }

        let newData = data.map(item => {
            return {
                ...item,
                ...property
            }
        })
        console.log(newData);
    }

    function addPropertyToRecordsWithUnivName(name) {
        let newData = data.map(item => {
            if (item.University_Name.toLowerCase().includes(name.toLowerCase())) {
                return {
                    ...item,
                    isStudent: true
                }
            }
            return {
                ...item,
                isStudent: false
            }
        })
        console.log(newData);
    }

    function sortAndGroupSameEmployeeRecords() {
        let newData = data.sort((a, b) => {
           return a.Employer.toLowerCase().localeCompare(b.Employer.toLowerCase());
        })
        console.log(newData);
    }

    function removeRecordsThatContainWord(keyword) {
        let removedRecords = [];
        let remainingRecords = [];
        removedRecords = data.filter(item => {
            return item.includes(keyword);
        })
        remainingRecords = data.filter(item => {
            return !item.includes(keyword);
        })
        return {
            removed_records: removedRecords,
            remaining_records: remainingRecords,
            original_records: data,
            records_changed: removedRecords.length

        }
    }

    //removeRecordsThatContainWord('amazon')

    //addPropertyToRecordsWithUnivName('Maryland');

  return (
    <>
      <h1>JS Tasks Assignment</h1>
    </>
  );
}
export default JSTasks;