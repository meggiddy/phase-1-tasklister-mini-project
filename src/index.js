document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    //const input = document.getElementById('new-task-description').value;
    const taskList = document.getElementById('tasks');
      const taskItem = document.createElement('li');
      console.log(taskItem);
        taskItem.innerHTML = event.target['new-task-description'].value;
        taskList.append(taskItem);

    const cancel = this.getElementsById
  });
});
