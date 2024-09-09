tasks = [
    { taskId: 101, taskName: 'Write Report', taskDescription: 'Complete the monthly report', dueDate: '2024-08-10' },
    { taskId: 102, taskName: 'Meeting', taskDescription: 'Project kickoff meeting', dueDate: '2024-08-09' },
    { taskId: 103, taskName: 'Code Review', taskDescription: 'Review the new feature code', dueDate: '2024-08-11' },
    { taskId: 1044, taskName: 't4', taskDescription: 'test', dueDate: 'lcd' },
    { taskId: 105, taskName: 't5', taskDescription: 'test', dueDate: 'lcd' }
]
//1
function addtasks() {
    let tid = parseInt(prompt("Enter New TaskID : "));
    if (tasks.some(a => a.taskId == tid)) {
        alert("Task ID already exists.");
        return;
    }
    let tname = prompt("Enter New Task Name : ");
    let tdesc = prompt("Enter New Task Description : ");
    let tdate = prompt("Enter Task Due Date: ");

    if (isNaN(tid) || !tname || !tdesc || !tdate) {
        alert("All fields are required.");
        return;
    }

    tasks.push({ taskId: tid, taskName: tname, taskDescription: tdesc, dueDate: tdate })
    alert("New Task added successfully!");

}
//2 
function viewtasks() {
    let vt = tasks.map((a) => (`Task ID:${a.taskId} | Task Name: ${a.taskName} | Description: ${a.taskDescription} | Due Date: ${a.dueDate}`)).join('\n')
    alert(vt)
}
//3
function sorttasks(){
    sorttype = prompt("Sort By : \n 1.ID \n 2.Name \n 3.Due Date")
    if(sorttype == 1){
        tasks.sort((a,b) => a.taskId - b.taskId)
    }

}
//4



do {
    var ch1 = prompt("\n 1.Add Task \n 2.View Tasks \n 3.Sort Tasks \n 4.Search Tasks \n 5.Exit");
    if (ch1 === null) {
        alert("BYE BYE");
        break;
    }
    else {
        ch1 = parseInt(ch1)
    }
    switch (ch1) {
        case 1:
            addtasks();
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
            alert("Invalid choice");
    }
}
while (ch1 !== 5);




