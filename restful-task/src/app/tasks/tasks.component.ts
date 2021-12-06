import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: any[] = [];

  constructor( private _tasksService: TasksService ) {
    
  }

  ngOnInit(): void {
    this.getAllTasksFromService();
    this.showTaskFromService();

  }

  
  getAllTasksFromService(){
    console.log("Testting from service");
    let observable =  this._tasksService.getAllTask();
    console.log(observable);
    observable
    .subscribe((data:any)=> {
      console.log("Now you can see our Tasks API", data)
      this.taskList = data;
    }); 

  }

  showTaskFromService(){
    let observable = this._tasksService.showTask();
    observable
    .subscribe((data:any)=> {
      console.log("Now you can see our Study Task API", data)
      
    });     
  }

}
