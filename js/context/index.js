// console.log(windoq);
// alert(this);

// const obj = {
//   age: 100,
//   run: function () {
//     console.log(this);
//   },
// };

// console.log(obj.run());

// function run() {
//   console.log(this);
//   console.log(`I've done run in ${this.city}`);
// }

// function run(city) {
//   console.log(`I've done run in ${city}`);
// }

////////////////
// 1. what is context
// 2. when context is lost
// 3. how to fix context

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  // input: none
  // output: undefined
  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;

      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  // input: none
  // output: string
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    } else {
      return `${this.minsPassed}:${this.secondsPassed}`;
    }
  },

  resetTime() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
    // this.intervalId = null;
  },
};

// test data
// timer.startTimer();
// timer.getTime();
// timer.resetTime();
// timer.stopTimer();
// timer.startTimer();
// timer.getTime();
