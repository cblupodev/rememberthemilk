// https://github.com/cblupodev/rememberthemilk/main/duplicate/task-duplicate.js

const duplicateTagName = "duplicate";
let duplicateTheseTasks = rtm.getTasks(`tag:${duplicateTagName}`);

duplicateTheseTasks.forEach(task => {
    task.removeTags(duplicateTagName);
    let duplicate = rtm.addTask(task.getName());
    duplicate.setDueTime(task.getDueDate());
    duplicate.setList(task.getList());
    duplicate.setEstimate(task.getEstimate());
    duplicate.setParent(task.getParent());
    duplicate.setLocation(task.getLocation());
    duplicate.setPriority(task.getPriority());
    duplicate.setStartDate(task.getStartDate());
    duplicate.setTags(...task.getTags().map(t => t.getName()));
    duplicate.setUrl(task.getUrl());
    if (task.getNotes().length > 0) {
        task.getNotes().reverse().forEach(n => duplicate.addNote(n.getContent()));
    }
    if (task.isRecurring()) {
        duplicate.setName(`${duplicate.getName()} (need to copy over the "repeats" field manually)`);
    }
});
