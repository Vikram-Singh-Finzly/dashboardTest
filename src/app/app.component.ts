import { Component, OnInit } from '@angular/core';
import { DataService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dashbord-test';
  widgetdata1:any;
  widgetdata2:any;
  widgetdata3:any;
  dashboardConfig:any;
  dashboardConfigTemp=[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(private dataService: DataService){
    this.dropdownList = [
      { item_id: 1, item_text: 'Test Table' },
      { item_id: 2, item_text: 'ACH Files' },
      { item_id: 3, item_text: 'App Names' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: false
    };
  }
  ngOnInit() {
   this.widgetdata1= this.dataService.getWidget1Data();
   this.widgetdata2=this.dataService.getWidget2Data();
   this.widgetdata3=this.dataService.getWidget3Data();
    this.dashboardConfig=[{
      "widgetCode":"com_bankos_widget_<appCode>_<widget_name>",
      "widgetIconUrl":"<URL>",
      "name":"Test Table",
      "description":"",
      "widgetCategory":"tabular",
      "widgetSize":"xlarge",
      "resizable":["xlarge","xxlarge"],
      "autoRefresh":"yes",
      "refreshTimeInterval":5,
      "dataUrl":this.widgetdata1,
      "scripts":"<URL>",
      "styles":"<URL>"
    },
    {
      "widgetCode":"com_bankos_widget_<appCode>_<widget_name>",
      "widgetIconUrl":"<URL>",
      "name":"ACH Files",
      "description":"",
      "widgetCategory":"tabular",
      "widgetSize":"xlarge",
      "resizable":["xlarge","xxlarge"],
      "autoRefresh":"yes",
      "refreshTimeInterval":5,
      "dataUrl":this.widgetdata2,
      "scripts":"<URL>",
      "styles":"<URL>"
    },
    {
      "widgetCode":"com_bankos_widget_<appCode>_<widget_name>",
      "widgetIconUrl":"<URL>",
      "name":"App Names",
      "description":"",
      "widgetCategory":"tabular",
      "widgetSize":"xlarge",
      "resizable":["xlarge","xxlarge"],
      "autoRefresh":"yes",
      "refreshTimeInterval":5,
      "dataUrl":this.widgetdata3,
      "scripts":"<URL>",
      "styles":"<URL>"
    } 
    ]
    this.dashboardConfigTemp.push(this.dashboardConfig[0]);
    this.selectedItems = [
      { item_id: 1, item_text: 'Test Table' },
    ];
  }
  onItemDeSelect(item:any){
    this.dashboardConfigTemp=this.dashboardConfigTemp.filter(element=> element.name !==item.item_text);
  }
  onItemSelect(item: any) {
    this.dashboardConfigTemp=this.dashboardConfigTemp.filter(element=> element.name !==item.item_text);
     let widgetObject=this.dashboardConfig.filter(element=> element.name===item.item_text);
     this.dashboardConfigTemp.push(widgetObject[0]);

  }
  onSelectAll(items: any) {

    this.dashboardConfigTemp=this.dashboardConfig
  }
  onDeSelectAll(items: any) {
    this.dashboardConfigTemp=[];
  }
}
