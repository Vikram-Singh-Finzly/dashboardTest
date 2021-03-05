import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  widget1Data={
    headers: [{
            colNm: "header1",
            dispColNm: "Name1"
        },
        {
            colNm: "header2",
            dispColNm: "Name2"
        },
        {
            colNm: "header3",
            dispColNm: "Name3"
        },
        {
            colNm: "header4",
            dispColNm: "Name4"
        },
  {
            colNm: "header5",
            dispColNm: "Name5"
        }
    ],
    sort: ["header1"],
    data: [{
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
    header5: {
                value: "header5Value",
            },
            params: {
            }
        },
        {
            header1: {
                value: "header1Value",
            },
            header2: {},
            header3: {
                value: "header3Value",
                link: "https://xyz.com/",
                script: "BASE64 String"
            },
            params: {
                script: "BASE64 String"
            }
        },
        {
            header1: {
                value: "header1Value",
            },
            header2: {},
            header3: {
                value: "header3Value"
            },
            params: {
                script: "BASE64 String"
            }
        },
  {
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value",
                link: "https://abc.com/",
                script: "BASE64 String"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },
  {
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value",
                link: "https://abc.com/",
                script: "BASE64 String"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
                link: "https://abc.com/",
                script: "BASE64 String"
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "https://abc.com/",
                script: "BASE64 String"
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        },{
            header1: {
                value: "header1Value"
            },
            header2:{
                value: "header2Value",
                link: "",
            },
            header3: {
                value: "header3Value"
            },
            header4: {
                value: "header4Value",
            },
            params: {
            }
        }
    ]
}
  widget2Data={
    headers: [{
            colNm: "fileName",
            dispColNm: "File name"
        },
        {
            colNm: "totalDebit",
            dispColNm: "Total Debit"
        },
        {
            colNm: "totalCredit",
            dispColNm: "Total Credit"
        },
        {
            colNm: "status",
            dispColNm: "Status"
        }
    ],
    sort: ["header1"],
    data: [{
            fileName: {
                value: "ACH_06072020.ach"
            },
            totalDebit:{
                value: "$5023.36",
                link: "",
            },
            totalCredit: {
                value: "$0.00"
            },
            status: {
                value: "Approved",
            },
            params: {
            }
        },
       {
        fileName: {
        value: "ACH_06072020.ach",
        link: "https://abc.com/",
        script: "BASE64 String"
      },
      totalDebit:{
        value: "$5023.36",
        link: "",
      },
      totalCredit: {
        value: "$0.00"
      },
      status: {
        value: "Approved",
      },
      params: {
      }
    },
    {
        fileName: {
            value: "ACH_06072020.ach"
        },
        totalDebit:{
            value: "$5023.36",
            link: "",
        },
        totalCredit: {
            value: "$0.00"
        },
        status: {
            value: "Approved",
        },
        params: {
        }
    },
    {
        fileName: {
            value: "ACH_06072020.ach"
        },
        totalDebit:{
            value: "$5023.36",
            link: "",
        },
        totalCredit: {
            value: "$0.00"
        },
        status: {
            value: "Approved",
        },
        params: {
        }
    },{
        fileName: {
            value: "ACH_06072020.ach"
        },
        totalDebit:{
            value: "$5023.36",
            link: "",
        },
        totalCredit: {
            value: "$0.00"
        },
        status: {
            value: "Approved",
        },
        params: {
        }
    },{
        fileName: {
            value: "ACH_06072020.ach"
        },
        totalDebit:{
            value: "$5023.36",
            link: "",
        },
        totalCredit: {
            value: "$0.00"
        },
        status: {
            value: "Approved",
        },
        params: {
        }
    },{
        fileName: {
            value: "ACH_06072020.ach"
        },
        totalDebit:{
            value: "$5023.36",
            link: "",
        },
        totalCredit: {
            value: "$0.00"
        },
        status: {
            value: "Approved",
        },
        params: {
        }
    }
    ]
}
widget3Data={
    headers: [{
            colNm: "searchFilter",
            dispColNm: "Search Filter"
        },
        {
            colNm: "totalCount",
            dispColNm: "Total Count"
        }
    ],
    sort: ["header1"],
    data: [{
            searchFilter: {
                value: "Exception"
            },
            totalCount:{
                value: "35"
            },
            params: {
            }
        },
        {
            searchFilter: {
                value: "Return",
                link: "https://abc.com/",
                script: "BASE64 String"
            },
            totalCount:{
                value: "20"
            },
            params: {
            }
        },
        {
            searchFilter: {
                value: "ACH Payments"
            },
            totalCount:{
                value: "2500"
            },
            params: {
            }
        },
        {
            searchFilter: {
                value: "RTP Payments"
            },
            totalCount:{
                value: "3000"
            },
            params: {
            }
        },
        {
            searchFilter: {
                value: "Sample Payment",
                link: "https://abc.com/",
                script: "BASE64 String"
            },
            totalCount:{
                value: "35"
            },
            params: {
            }
        },
    ]
}
getWidget1Data(){
    return this.widget1Data
}
getWidget2Data(){
    return this.widget2Data
}
getWidget3Data(){
    return this.widget3Data
}
}