import { EventEmitter, Injectable } from '@angular/core';
import {TaskList, Task} from '../models/models';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MainService} from './main.service';
@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {
  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<TaskList[]> {
    return this.get('http://127.0.0.1:8000/api/task_lists/',  {});
  }
  getTasks(id: number) {
    return this.get(`http://localhost:8000/api/task_lists/${id}/tasks/`, {});
  }
  createTaskList(namE: string): Promise<TaskList> {
    return this.post('http://localhost:8000/api/task_lists/', {name: namE});
  }
  updateTaskList(taskList: TaskList) {
    return this.put('http://localhost:8000/api/task_lists/' + taskList.id, {name : taskList.name});
  }

  deleteTaskList(taskList: TaskList) {
    return this.delet('http://localhost:8000/api/task_lists/' + taskList.id, {});
  }

  updateTask(task: Task) {
    return this.put('http://localhost:8000/api/task_lists/' + task.task_list.id + '/tasks/' + task.id, {
      name: task.name,
      task_list: task.task_list,
      status: task.status,
      created_at: task.created_at,
      due_on: task.due_on
    });
  }

  /*createTask(task: Task) {
      return this.post('http://localhost:8000/api/task_lists/' + taskList.id + '/tasks/', {
        name: task.name,
        task_list: task.task_list,
        status: task.status,
        created_at: task.created_at,
        due_on: task.due_on
      });
  }*/
  deleteTask(task: Task) {
    console.log(task.task_list.id);
    return this.delet('http://localhost:8000/api/task_lists/' + task.task_list.id + '/tasks/' + task.id, {});
  }
}
