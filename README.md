# Postpone tasks by hourly time (such as 1 hour from now or 10 minutes from now)

[Video demo](https://www.youtube.com/watch?v=N0nkTta5aPI)

## Step by step:

1. Create a [RTM MilkScript](https://www.rememberthemilk.com/services/milkscript/) that changes the due time on a task (the due time, not a start time or a postpone time). Copy [task-postponements-main.js](https://github.com/cblupodev/rememberthemilk/blob/main/postpone-by-time/task-postponements-main.js) into your own library of MilkScripts  
  - A Pro membership is required to use MilkScripts

2. Add a tag to a task such as `postpone-hr01`, or `postpone-hr03`, or `postpone-min10`, etc
  - "postpone-" can be easily changed to whatever you want (just change the "prefix" variable at the top of the main MilkScript)

3. Create a trigger that fires when that tag is added to a task, such as from IFTTT https://ifttt.com, which can run the above MilkScript

4. IFTTT runs the MilkScript to change the due time on that task, offset from your current local time not the time on the task. It may take several seconds for IFTTT to trigger

5. If the task was a repeating task then the due time can be reset back to the original time like this:
  - Add a note to the task "originalDueTime=14:30"
  - Then manually run the task https://github.com/cblupodev/rememberthemilk/blob/main/postpone-by-time/task-duetimes-reset.js to reset all tasks containing "originalDueTime" to that time
  - This is also shown in the video demo

## Why this is necessary
- Is it possible to set Postpone duration ie by hours, or days, weeks?" https://www.rememberthemilk.com/forums/help/6335/
- Postpone for arbitrary intervals" https://www.rememberthemilk.com/forums/help/7687/
- can I postpone my tasks by 1 hour?" https://www.rememberthemilk.com/forums/help/22487/
- postpone by less than a day?" https://www.rememberthemilk.com/forums/help/29341/
- Ability to postpone to later in the date or fixed time" https://www.rememberthemilk.com/forums/ideas/14096/
- Ability to postpone for a few hours (instead of days)" https://www.rememberthemilk.com/forums/ideas/22321/

# Duplicate tasks from the Android/iOS app

TODO video demo

## Step by step:

1. Create a [RTM MilkScript](https://www.rememberthemilk.com/services/milkscript/), copy [task-duplicate.js](https://github.com/cblupodev/rememberthemilk/edit/main/duplicate/task-duplicate.js) into your own library of MilkScripts  
  - A Pro membership is required to use MilkScripts
    
2. Add a tag to a task `duplicate`
  - this tag can be easily changed to whatever you want (just change the tag name variable at the top of the MilkScript)

3. Create a trigger that fires when a tag is added to a task, such as from IFTTT https://ifttt.com, which can run the above MilkScript

4. IFTTT runs the MilkScript to create a new task and copy over various properties to it. It may take several seconds for IFTTT to trigger

## Why this is necessary
- Ability to duplicate tasks" https://www.rememberthemilk.com/forums/ideas/11659/
- duplicate task in more actions on iphone / ipod" https://www.rememberthemilk.com/forums/help/15725/
- duplicate a task on mobile app (Android)" https://www.rememberthemilk.com/forums/help/22784/
- Duplicate task in android app?" https://www.rememberthemilk.com/forums/help/25256/
- Ability to duplicate tasks" https://www.rememberthemilk.com/forums/ideas/13089/
- Ability to duplicate tasks" https://www.rememberthemilk.com/forums/ideas/6808/

