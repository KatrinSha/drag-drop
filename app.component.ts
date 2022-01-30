import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myData: any;
  keyValue: any = {};

  todo = [
    'React',
    'Vue',
    'English',
    'Node',
    'BootStrap',
    'REST',
    'Unit-test',
    'Webpack',
  ];

  done = ['Angular', 'JavaScript', 'CSS', 'HTML', 'Git'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      ),
        (this.myData = this.done);
    } else {
      moveItemInArray(this.todo, event.previousIndex, event.currentIndex),
        moveItemInArray(this.done, event.previousIndex, event.currentIndex);
    }
  }

  save() {
    this.myData.forEach((key: string) => (this.keyValue[key] = ''));
  }
}
