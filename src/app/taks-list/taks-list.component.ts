import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-taks-list',
  templateUrl: './taks-list.component.html',
  styleUrls: ['./taks-list.component.css']
})
export class TaksListComponent implements OnInit{

  tasks= [];
  ngOnInit(): void {
      this.tasks = JSON.parse(localStorage.getItem('tasks')|| '[]')
  }

}
