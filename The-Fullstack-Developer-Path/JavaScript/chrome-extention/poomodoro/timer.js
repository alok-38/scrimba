const work_interval = 25 * 60       // 25 minutes in seconds
const short_break = 5 * 60          // 5 minutes in seconds
const long_break = 20 * 60          // 20 minutes in seconds
const pomodoros_before_long_break = 4
let pomodoro_count = 0
let tasks = ["Write report", "Study math", "Clean desk"];


function task_remaining() {
    return tasks.length > 0;
}

while (task_remaining()) {
    let currentTask = tasks.shift();
    console.log(`Working on: ${currentTask} for ${work_interval / 60} minutes`);
    // Here you would start a timer: start_timer(work_interval)
    pomodoro_count++;
    if (pomodoro_count % pomodoros_before_long_break === 0) {
        console.log(`Take a long break for ${long_break / 60} minutes`);
        // start_timer(long_break)
    } else {
        console.log(`Take a short break for ${short_break / 60} minutes`);
        // start_timer(short_break)
    }
}

console.log("All tasks completed. Well done!");