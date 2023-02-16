import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{
  taskForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,

  ) {

  }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.taskForm.controls; }

  onSubmit() {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '') || [];

      tasks.push({
        name: this.f['name'],
        description: this.f['description'],
        date: new Date().toString,
        status: false,
      })

      localStorage.setItem('tasks', JSON.stringify(tasks))

      this.submitted = true;
      this.router.navigate(['/']);
  }
}

