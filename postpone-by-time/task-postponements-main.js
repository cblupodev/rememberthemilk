const tagPostponementPrefix = "postpone";

const tasksToPostPone = rtm.getTasks(`tagContains:${tagPostponementPrefix}`);

console.log(`number of tasks found to postpone ${tasksToPostPone.length}`);

// process tasks from the task search
tasksToPostPone.forEach(task => {
  const ppTag = getPostponementTag(task);

  let taskDueTime = new Date();
  let currentHourOffset = (new Date()).getHours();
  let currentMinutesOffset = (new Date()).getMinutes();
  let currentHourOffsetInMilliseconds = currentHourOffset * 60 * 60 * 1000;
  let currentMinuteOffsetInMilliseconds = currentMinutesOffset * 60 * 1000;

  console.log(`task to postpone: name=${task.getName()},   pptags=${ppTag.getName()},   taskDueTime=${taskDueTime},    currentHourOffset=${currentHourOffset},    currentMinutesOffset=${currentMinutesOffset}`);

  console.log(`reset the time to midnight so I can offset from my current time, not the time on the task:`);

  taskDueTime.setHours(0);
  taskDueTime.setMinutes(0);

  taskDueTime.setTime(
    taskDueTime.getTime()
    + currentHourOffsetInMilliseconds 
    + currentMinuteOffsetInMilliseconds 
    + getThePostponeValueAsNumberOfMilliseconds(ppTag.getName()));
    
  task.setDueTime(taskDueTime);

  console.log(`new date time=${taskDueTime}`);

  task.removeTags(ppTag.getName());
  task.removeTags('top1');

  console.log(`removed tag ${ppTag.getName()}`);
});

// get the first tag that's a postponement tag
function getPostponementTag(task) {
  return task
            .getTags()
            .filter(tag => 
                tag.getName().includes(tagPostponementPrefix)
            )?.[0];
}

// get how many milliseconds to add to the task
function getThePostponeValueAsNumberOfMilliseconds(tagString) {
    console.log(`tagString=${tagString}`);

    var multiplierString = tagString.match(/hr|min/)?.[0];

    console.log(`multiplierString=${multiplierString}`);
    
    var postponeValue = Number(tagString.match(/\d+/)?.[0]);    

    console.log(`postponeValue=${postponeValue}`);

    let minutesToMultiply = 1;
    switch(multiplierString) {
        case "hr":
            console.log(`in hr switch`);
            minutesToMultiply = 60 * postponeValue;
            break;
        case "min":
            console.log(`in min switch`);
            minutesToMultiply = postponeValue;
            break;
        default:
            console.log(`in default switch`);
            minutesToMultiply = postponeValue;
    }

    console.log(`minutesToMultiply=${minutesToMultiply}`);
    return minutesToMultiply * 60 * 1000;
}
