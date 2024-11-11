class TodoApp {
    constructor() {
      this.tasks = [];
    }
  
    addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
  
      if (taskText) {
        this.tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        this.render();
      }
    }
  
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.render();
    }
  
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.render();
    }
  
    render() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = ''; // Clear current task list
  
      this.tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${task.completed ? 'completed' : ''}`;
        
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.onclick = () => this.toggleTask(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => this.deleteTask(index);
  
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteButton);
        taskList.appendChild(taskDiv);
      });
    }
  }
  
  const todoApp = new TodoApp();
  
    