document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    //const input = document.getElementById('new-task-description').value;
    const taskList = document.getElementById('tasks');
      const taskItem = document.createElement('li');
      const complete = document.createElement('li');
        complete.innerHTML = event.target['new-task-description'].value;
        taskItem.innerHTML = event.target['new-task-description'].value;
        taskList.append(taskItem);


    const cancel = document.createElement('button');
        cancel.innerHTML = ('x');
        taskItem.append(cancel);
      cancel.addEventListener('click', (event) => {
          taskItem.remove();
          taskTable.append(complete);
      })

  });
  const list = document.getElementById('list');
  const taskList = document.getElementById('tasks');
     const clearAll = document.createElement('button');
      clearAll.innerHTML = 'Clear All';
      list.append(clearAll);
        clearAll.addEventListener('click',()=> {
          taskList.innerHTML=" ";
          });

  const taskTable = document.createElement('table');
          taskTable.setAttribute('id', 'table-head');
          taskTable.innerHTML= '<strong>Completed List</strong>';
          list.append(taskTable);

  const dueDate = document.getElementById('due-date');
          taskItem.append(dueDate);
          
});
