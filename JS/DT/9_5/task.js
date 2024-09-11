tasks = [
    { taskId: 101, taskName: 'Write Report', taskDescription: 'Complete the monthly report', dueDate: '2024-08-10' },
    { taskId: 102, taskName: 'Meeting', taskDescription: 'Project kickoff meeting', dueDate: '2024-08-09' },
    { taskId: 103, taskName: 'Code Review', taskDescription: 'Review the new feature code', dueDate: '2024-08-11' },
    { taskId: 1044, taskName: 't4', taskDescription: 'test', dueDate: '2024-08-24' },
    { taskId: 105, taskName: 't5', taskDescription: 'test', dueDate: '2024-08-14' }
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
function sorttasks() {
    let taskscopy = [...tasks];
    sorttype = parseInt(prompt("Sort By : \n 1.ID \n 2.Name \n 3.Due Date"))
    switch (sorttype) {
        case 1:
            taskscopy.sort((a, b) => a.taskId - b.taskId)
            break;
        case 2:
            taskscopy.sort((a, b) => a.taskName.localeCompare(b.taskName));
            break;
        case 3:
            taskscopy.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
            break;
        default:
            alert("Invalid choice");
    }
    let sorted = taskscopy.map((a) => (`Task ID:${a.taskId} | Task Name: ${a.taskName} | Description: ${a.taskDescription} | Due Date: ${a.dueDate}`)).join('\n')
    alert(sorted);
}
//4
function searchtasks() {
    let searchtype = parseInt(prompt("Search By : \n 1.ID \n 2.Name \n 3.Description \n 4.Exit"))
    switch (searchtype) {
        case 1:
            let idsearch = prompt("Enter ID to Search : ")
            let idresult = tasks.filter(a => a.taskId == idsearch).map(a => (`Task ID:${a.taskId} | Task Name: ${a.taskName} | Description: ${a.taskDescription} | Due Date: ${a.dueDate}`))
            alert(idresult)
            break;
        case 2:
            let namesearch = prompt("Enter Name to Search : ")
            let nameresult = tasks.filter(a => a.taskName.toLowerCase().includes(namesearch.toLowerCase())).map(a => (`Task ID:${a.taskId} | Task Name: ${a.taskName} | Description: ${a.taskDescription} | Due Date: ${a.dueDate}`))
            alert(nameresult)
            break;
        case 3:
            let descsearch = prompt("Enter Description to Search : ")
            let descresult = tasks.filter(a => a.taskDescription.toLowerCase().includes(descsearch.toLowerCase())).map(a => (`Task ID:${a.taskId} | Task Name: ${a.taskName} | Description: ${a.taskDescription} | Due Date: ${a.dueDate}`))
            alert(descresult)
            break;
        case 4:
            alert("BYE BYE");
            break;
        default:
            alert("Invalid choice");
    }
}


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
            sorttasks();
            break;
        case 4:
            searchtasks();
            break;
        case 5:
            alert("BYE BYE");
            break;
        default:
            alert("Invalid choice");
    }
}
while (ch1 !== 5);




