/* example contents of a note to use this automation:
originalDueTime=18:00
originalDueTime=18:30
originalDueTime=08:00
*/

console.log(`part 1/2, reset tasks that have an original due time`);

const duetimesFieldName = "originalDueTime";
var tasksWithOriginalDueTimeField = rtm.getTasks(`noteContains:${duetimesFieldName} AND status:incomplete`);

console.log(`number of tasks with ${duetimesFieldName} ${tasksWithOriginalDueTimeField.length}`);

tasksWithOriginalDueTimeField.forEach(task => {
   let noteWithOriginalDueTimeField = task.getNotes().filter(n => n.getContent().includes(duetimesFieldName))?.[0]

   console.log(`note contains ${duetimesFieldName}: ${noteWithOriginalDueTimeField.getContent()}`);

   let debugmatch = noteWithOriginalDueTimeField.getContent().match(/\d+/g);

   console.log(JSON.stringify(debugmatch));

   let originalDueHour = noteWithOriginalDueTimeField.getContent().match(/\d+/g)?.[0];
   let originalDueMinutes = noteWithOriginalDueTimeField.getContent().match(/\d+/g)?.[1];
   let originalDueHourAsNumber = Number(originalDueHour);
   let originalDueMinutesAsNumber = Number(originalDueMinutes);

   console.log(`${task.getName()},    originalDueHour=${originalDueHour},   originalDueMinutes=${originalDueMinutes},   originalDueHourAsNumber=${originalDueHourAsNumber},   ${originalDueMinutesAsNumber}`);

   var newDateTime = new Date(Date.parse(task.getDueDate()));
   newDateTime.setHours(originalDueHourAsNumber);
   newDateTime.setMinutes(originalDueMinutesAsNumber);

   console.log(`${task.getName()},    old date time=${task.getDueDate()},    new date time=${newDateTime}`);

   try {
      task.setDueTime(newDateTime);
   } catch(e) {
      console.error(e);
   }
});

console.log(`part 2/2, now clear out the tasks that have a due time but no "original" due time`);

var tasksWithDueTimeAndNoOriginalDueTimeField = rtm.getTasks(`NOT noteContains:${duetimesFieldName} AND status:incomplete`).filter( t => { return t.hasDueTime()});

console.log(`number of tasks without ${duetimesFieldName} AND has a due time ${tasksWithDueTimeAndNoOriginalDueTimeField.length}`);
console.log(`task names with due times but don't have an ${duetimesFieldName} property in a note: ${tasksWithDueTimeAndNoOriginalDueTimeField.map(t => t.getName()).join('\n')}`);

console.log(`clear out the due time on those tasks`);

tasksWithDueTimeAndNoOriginalDueTimeField.forEach(t => {

   let newDueTime = t.getDueDate();
   newDueTime.setHours(0);
   newDueTime.setMinutes(0);
   newDueTime.setSeconds(0);
   newDueTime.setMilliseconds(0);
   console.log(`${t.getName()},    old date time=${t.getDueDate()},    new date time=${newDueTime}`);
   t.setDueDate(newDueTime);
});
