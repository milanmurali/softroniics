tasks = [
    { taskId: 1, taskName: 't1', taskDescription: 'test', dueDate: 'led' },
    { taskId: 2, taskName: 't2', taskDescription: 'test', dueDate: 'led' },
    { taskId: 3, taskName: 't3', taskDescription: 'test', dueDate: 'led' },
    { taskId: 4, taskName: 't4', taskDescription: 'test', dueDate: 'lcd' },
    { taskId: 5, taskName: 't5', taskDescription: 'test', dueDate: 'lcd' }
]

function viewtasks() {
    let vt = tasks.map((a) =>(`Task ID:${a.taskId} | Task Name: ${a.taskName} | Description: ${a.taskDescription} | Due Date: ${a.dueDate}`)).join('\n')
    alert(vt)
}



do {
    var ch1 =prompt("1.Add Task \n 2.View Tasks \n 3.Sort Tasks \n 5.Search Tasks \n 5.Exit");
    if (ch1===null){
        break;
    }
    else{
        ch1 = parseInt(ch1)
    }
    switch (ch1) {
        case 1:
            alert("1");
            break;
        case 2:
            viewtasks();
            break;
        case 3:
            alert("3");
            break;
        case 4:
            alert("4");
            break;
        case 5:
            alert("BYE BYE");
            break;
        default:
            alert("hello");
    }
}
while (ch1 !== 5);




