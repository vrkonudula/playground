import "../css/ClassExercises.css";
import React, { useState } from "react";
const data = require("../data/Student_Data.json");
function ClassExercises() {
  //------------------- Monday 02/22/2021 ---------------------------------------

  // function dynamicUrl(arg1, arg2, arg3) {
  //   let es6Url = `https://www.wynisco.com/${arg1}/queryparamsstarthere?location=${arg2}&device-type=${arg3}`;
  //   let es5Url = "https://www.wynisco.com/" + arg1 + "/queryparamsstarthere?location=" + arg2 + "&device-type=" + arg3;
  //   return es6Url === es5Url;
  // }
  // function encodeAndDecodeUrl() {
  //   const travel = "Sydney to Los Angeles : 03/01/2021";
  //   const encodedUrl = encodeURIComponent(travel);
  //   const decodeUrl = decodeURIComponent(encodedUrl);
  //   console.log(`Original URL: ${travel}
  //   Encoded Url : ${encodedUrl}
  //   Decoded Url : ${decodeUrl}`);
  // }
  // function checkType(arg) {
  //   console.log(`Type of ${arg} is : ${typeof arg}`);
  //   //Use Array.isArray to check whether object is array or not
  // }
  // function arithematics(val1, val2, val3, val4) {
  //   const ans = (val1 + val2) * val3 / val4;
  //   console.log(ans);
  // }

  // function divisibleBy5(val) {
  //   return val % 5 === 0 ? true : val % 5;
  // }

  // function ternaryExample(a, b) {
  //   return a >= b ? `${a} seems to be greater than or equal to ${b}` : `${a} is less than ${b}`;
  // }

  // function operatorExample(d, f, g) {
  //   return (typeof d === 'string' && Array.isArray(f)) ? !g : false;
  // }

  // function characterValidation(city) {
  //   if (city.length > 2 && city.length <= 30) {
  //     return "Passed";
  //   }
  //   if (city.length <= 2) {
  //     return "Not enough characters";
  //   }
  //   if (city.length > 30) {
  //     return "Too many characters";
  //   }
  //   return "Invalid input";
  // }

  // function printReverse(test) {
  //   for (let i = test.length - 1; i > -1; i--) {
  //     console.log(test.charAt(i));
  //   }
  // }

  // function checkPalindrome(test) {
  //   let arg = test.toLowerCase();
  //   console.log(arg);
  //   // for (let i = 0, j = arg.length - 1; i <= j; i++, j--) {
  //   //   if (arg.charAt(i) !== arg.charAt(j))
  //   //     return false;
  //   // }
  //   // return true;
  //   let i = 0, j = arg.length - 1;
  //   while (i <= j) {
  //     if (arg.charAt(i) !== arg.charAt(j))
  //       return false;
  //     i++;
  //     j--;
  //   }
  //   return true;
  // }

  // function breakAndContinue() {
  //   for (let i = 1; i < 11; i++) {
  //     if (i === 3)
  //       continue;
  //     if (i === 8)
  //       break;
  //     console.log(i);
  //   }
  // }

  // function fizzBuzz() {
  //   for (let i = 1; i < 101; i++) {
  //     if (i % 15 === 0)
  //       console.log("FizzBuzz");
  //     else if (i % 3 === 0)
  //       console.log("Fizz");
  //     else if (i % 5 === 0)
  //       console.log("Buzz");
  //     else
  //       console.log(i);
  //   }
  // }

  // function s1(arg) {
  //   return arg.trim();
  // }

  // function s21(a1, a2) {
  //   return a1 + a2;
  // }

  // function s22(a1, a2) {
  //   return a1.concat(a2);
  // }

  // function s23(a1, a2) {
  //   return `${a1}${a2}`;
  // }

  // -------------------- Tuesday 02/23/2021 --------------------------------

  // function regexExample(url) {
  //   const urlPattern1 = /(aws)/gmi;
  //   const urlPattern2 = /(gcp)/gmi;
  //   const urlPattern3 = /(azure)/gmi;

  //   if (urlPattern1.test(url)) {
  //     return "Hosted on AWS";
  //   }
  //   else if (urlPattern2.test(url)) {
  //     return "Hosted on GCP";
  //   }
  //   else if (urlPattern3.test(url)) {
  //     return "Hosted on Azure";
  //   }
  //   else {
  //     return "Anonymous host";
  //   }
  // }

  // function regexExample2(url) {
  //   const regex = /\/\d\d\d\d\//gmi;
  //   let regexFound = url.replace(regex, (match) => {
  //     return `/Year${match.substring(1,5)}/`
  //   })
  //   return regexFound;
  // }

  // function classTask(str) {
  //   const myregex = /(l+)/gi;
  //   const output = myregex.test(str);
  //   const output1 = str.match(myregex);
  //   const output2 = str.search(myregex);
  //   console.log(output, "test");
  //   console.log(output1, "match");
  //   console.log(output2, "search");
  // }

  // function classTask2(str) {
  //   const len = str.length - 1;
  //   const str2 = str.slice(1, -1);
  //   return str.slice(1, len);
  // }

  // function classTask3(str) {
  //   let index = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.charAt(i) === 't') {
  //       index = i + 1;
  //       break;
  //     }
  //   }
  //   return str.slice(0, index);
  // }

  // function classTask4(str) {
  //   const regex = /[A-Z]/gm;
  //   const index = regex.exec(str).index;
  //   console.log( index - (str.length-1-index) );

  // }
  // let myVariable = 10;

  // function classTask5() {
  //   let myVariable = 20;
  //   console.log(myVariable);
  // }

  //console.log(regexExample2("http://qa-aws01pub.mockery.com/2018/11/16/federal-reserve-president-says-country-needs-more-immigration-to-save-economy.html%22"));

  // ---------------------------------Wednesday -----------------------------------

  function start() {
    const testArr = [
      {
        bootCampName: "Front End React",
        startDate: "2/15/2020",
        instructorName: "Sachin Rajgire",
        schedule: {
          startTime: "6.30PMEST",
          endTime: "11.30PMEST",
        }
      },
      {
        bootCampName: "Data Analyst",
        startDate: "2/15/2020",
        instructorName: "Messi",
        schedule: {
          startTime: "6.30PMEST",
          endTime: "11.30PMEST",
        },
      },
      {
        bootCampName: "Full Stack Developer",
        startDate: "2/25/2020",
        instructorName: "John Doe",
        schedule: {
          startTime: "5.30PMEST",
          endTime: "11.30PMEST",
        },
      },
    ];

    const arr = testArr.find(item => {
      return item.bootCampName.toLowerCase().includes("react");
    })

    const { bootCampName: br } = arr;
    
    const arr1 = testArr.sort((a, b) => {
      return a.bootCampName.localeCompare(b.bootCampName);
      // if (a.bootCampName < b.bootCampName)
      //   return -1;
      // else if (a.bootCampName > b.bootCampName)
      //   return 1;
      // else
      //   return 0;
    })

  }

  function sample() {
    let arr = [3, 3, 4, 5, 6, 7, 8, 9, 11];
    arr.pop();
    arr.shift();
    arr.push(10);
    arr.unshift(1, 2);
    arr = arr.map(item => item * item);
    console.log(arr);
  }


  function arrays1(uname) {
    let trueRecords = 0;
    uname = uname.toLowerCase();
    const newData = data.map((obj) => {
      const name = obj.University_Name.toLowerCase();
      if (name.includes(uname)) {
        trueRecords++;
        return { ...obj, isStudent: true };
      }
      else {
        return { ...obj, isStudent: false };
      }
    })

      // console.log(`Total records with isStudetn:true - ${trueRecords}`);
      // console.log(newData);
  }

  function sortData() {
    const sortedDataByYear = data.sort((a, b) => {
      return b.Graduation_Year - a.Graduation_Year
    })
    const sortedDataByJobStartDate = sortedDataByYear.sort((a, b) => {
      const a1 = a.Job_Start_Date.split("/");
      const b1 = b.Job_Start_Date.split("/");
      if (a1[2] < b1[2]) {
        return 1;
      }
      else if (a1[2] > b1[2]) {
        return -1;
      }
      else {
        if (a1[0] < b1[0]) {
          return 1;
        }
        else if (a1[0] > b1[0]) {
          return -1;
        }
        else {
          if (a1[0] > b1[0]) {
            return -1;
          }
          else if(a1[0] < b1[0]){
            return 1;
          }
          else {
            return 0;
          }
        }
      }
    })
    const finalSortedList = sortedDataByJobStartDate.sort((a, b) => {
      return a.Employer.toLowerCase().localeCompare(b.Employer.toLowerCase())
    })
    console.log(finalSortedList,"Final Sorted List");
  }

  // function sortByJobStartDate() {
  //   const sortedData = data
  //   console.log(sortedData,"Sorted by job start date");
  // }

  // function sortByEmployerName() {
  //   const sortedData = data
  //   console.log(sortedData,"Sorted by employer name");
  // }

  arrays1("maryland");


  sortData();


  return (
    <>
      <h1> Class Exercises </h1>{" "}
    </>
  );
}

export default ClassExercises;
