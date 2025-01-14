import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([
    {
      title: 'Learn Angular',
      description: 'Learn Angular from Udemy course',
      status: 'IN_PROGRESS',
      id: '3454657355465654635',
    },
    {
      title: 'Learn RxJS',
      description: 'Learn RxJS from Udemy course',
      status: 'IN_PROGRESS',
      id: '3454687355422654635',
    },
    {
      title: 'Walk dog to park',
      description: 'Go with Jimmy to the park',
      status: 'DONE',
      id: '3422687355428454635',
    },
  ]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTaskStatus(id: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  }
}
