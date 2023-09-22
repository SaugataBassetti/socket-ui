import { Component, OnInit } from '@angular/core';
// import * as XLSX from 'xlsx';
//import readXlsxFile from 'read-excel-file';
// export class Employee {
//   public Name: string;
//   public Email: string;
//   public Department: string;
//   public Designation: string;
//   public Role: string;
//   public PhoneNo: number;
//   public AadharNumber: number;
//   public Gender: string;
//   public Religion: string;
//   public DateOfJoining: string;
//   public EducationCourse: string;
// }
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  rand1: number = 0;
  rand2: number = 0;
  //sign:string []={"+ ',"-","/","*"};
  arr: string[] = ['+ ', '-', '/', '*'];
  sign: string = this.arr[0];

  result: number = 0;
  constructor() {}

  ngOnInit(): void {}
  generateRandom(maxLimit = 10) {
    this.rand1 = Math.floor(Math.random() * 10) + 1;
    this.rand2 = Math.floor(Math.random() * 10) + 1;
  }
  refresh() {
    this.generateRandom();
    let ran_no = Math.floor(Math.random() * 4);

    this.result = this.rand1 + this.rand2;
  }
  //Xlsx
  //   async selectFile() {
  //     const fileInput = document.createElement('input');
  //     fileInput.type = 'file';
  //     fileInput.accept = '.xlsx, .xls';
  //     fileInput.addEventListener('change', async (event: any) => {
  //       const file = event.target.files[0];

  //       if (file) {
  //         try {
  //           const jsonData = await this.readExcel(file);
  //           console.log('Imported data:', jsonData);
  //         } catch (error) {
  //           console.error('Error reading Excel file:', error);
  //         }
  //       }
  //     });

  //     fileInput.click(); // Programmatically trigger the file input click event
  //   }
  // readExcel(file: File): Promise<any> {
  //     return new Promise((resolve, reject) => {
  //       const fileReader = new FileReader();

  //       fileReader.onload = (event: any) => {
  //         const data = new Uint8Array(event.target.result);
  //         const workbook = XLSX.read(data, { type: 'array' });

  //         const sheetName = workbook.SheetNames[0]; // Assuming the first sheet
  //         const worksheet = workbook.Sheets[sheetName];
  //         const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

  //         resolve(jsonData);
  //       };

  //       fileReader.onerror = (error) => {
  //         reject(error);
  //       };

  //       fileReader.readAsArrayBuffer(file);
  //     });
  //   }

  //   async selectFile() {
  //     const fileInput = document.createElement('input');
  //     fileInput.type = 'file';
  //     fileInput.accept = '.xlsx, .xls';
  //     fileInput.addEventListener('change', async (event: any) => {
  //       const file = event.target.files[0];

  //       if (file) {
  //         try {
  //           const employees: Employee[] = await this.readExcel(file);
  //           console.log('Imported data:', employees);
  //         } catch (error) {
  //           console.error('Error reading Excel file:', error);
  //         }
  //       }
  //     });
  //     fileInput.click();
  //   }
  //   readExcel(file: File): Promise<Employee[]> {
  //     return new Promise((resolve, reject) => {
  //       readXlsxFile(file)
  //         .then((rows: any[]) => {
  //           const headerRow = rows[0]; // Assuming the first row is the header
  //           const employees: Employee[] = [];

  //           for (let i = 1; i < rows.length; i++) {
  //             const dataRow = rows[i];
  //             const employee = new Employee();

  //             employee.Name = dataRow[headerRow.indexOf('Name')];
  //             employee.Email = dataRow[headerRow.indexOf('Email')];
  //             employee.Department = dataRow[headerRow.indexOf('Department')];
  //             employee.Designation = dataRow[headerRow.indexOf('Designation')];
  //             employee.Role = dataRow[headerRow.indexOf('Role')];
  //             employee.PhoneNo = dataRow[headerRow.indexOf('Phone No.')];
  //             employee.AadharNumber = dataRow[headerRow.indexOf('Aadhar Number')];
  //             employee.Gender = dataRow[headerRow.indexOf('Gender')];
  //             employee.Religion = dataRow[headerRow.indexOf('Religion')];
  //             employee.DateOfJoining =
  //               dataRow[headerRow.indexOf('Date Of Joining')];
  //             employee.EducationCourse =
  //               dataRow[headerRow.indexOf('Education Course')];

  //             employees.push(employee);
  //           }

  //           resolve(employees);
  //         })
  //         .catch((error) => {
  //           reject(error);
  //         });
  //     });
  //   }
}
