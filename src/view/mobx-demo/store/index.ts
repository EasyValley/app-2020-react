import { makeAutoObservable } from 'mobx';

let i = 1;
export interface FoodMenuItem {
  title: string;
}
export class Todo {
  constructor() {
    makeAutoObservable(this);
    // makeObservable(this, {
    //   todoList: observable,
    //   title: observable,
    //   addTodo: action,
    // });
  }

  title: string | number = '';

  todoList: FoodMenuItem[] = [{ title: '炒菜' }];

  addTodo = () => {
    this.title = i;
    this.todoList.push({
      title: `吃饭${i}`,
    });
    i += 1;
  };

  eat = () => {
    this.todoList[0].title += 'eat..';
  };
}

const store = {
  todoState: new Todo(),
};

export default store;
