import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TodoListComponent extends Component {
  @service store;
  @tracked todos;

  loadDataError = task({ restartable: true }, async () => {
    this.todos = await this.store.query('todo', { userId: 2 });
  });

  loadData = task({ restartable: true }, async () => {
    await this.loadTodo();
  });

  async loadTodo() {
    this.todos = await this.store.query('todo', { userId: 1 });
  }
}
