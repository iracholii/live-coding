const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

const formElem = document.querySelector('.login-form');

console.log('formElem created');
console.log(new Date());

// validate

function createUserHandler(event) {
  event.preventDefault();
  console.log('test');

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Ira',
    password: '123',
  };

  console.log(JSON.stringify(user));

  // input: url string, obj
  // output: promise
  fetch(serverUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(response => {
      console.log('response is here');

      // input: none
      // output: promise
      return response.json();
    })
    .then(body => {
      console.log('body is read');

      // input: string
      // output: undefined
      alert(JSON.stringify(body));
    });

  // then method =>
  // input: callback, callback (optional)
  // output: promise

  // callback =>
  // input: result of previous promise
  // output: any (will be wrapped in new promise)
}

formElem.addEventListener('submit', createUserHandler);

console.log('listener added');
