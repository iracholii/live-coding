/* eslint-disable */

// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// createMessanger() LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Just learn it',
//     'sender': 'Gromcode',
//     'sendMessage': { //// },
//      'setSender': { ///// },
//      'setMessage': { /// }
//   },
//   'outherLexicalEnv': global lex env
// }

// run() LEX ENV
// {
//   'enviromentRecord': {
//
//   },
//   'outherLexicalEnv': global lex env
// }

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

// if (false) {
//   function sum(a, b) {
//     return a + b;
//   }
// }

// sum(5, 1);

// console.log(sender);

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  // console.log(weight);

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  // sendMessage('Jack');

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
messanger.sendMessage('Ann');

const messanger2 = createMessenger();
messanger2.sendMessage('Jake');

run();
