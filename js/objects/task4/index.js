// function markAdmins(usersList, adminIds) {
// for (let i = 0; usersList.length < 1; i += 1) {
//   if (usersList[i].id  )
// }
// return usersList[adminId].isAdmin =
// }

function markAdmins(usersList, adminIds) {
  const newArr = usersList.map(user => {
    const isAdmin = adminIds.includes(user.id);
    return { ...user, isAdmin };
  });
  return newArr;
}

// examples
const users = [
  { id: '1', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Tad' },
];
const adminIds = ['1', '3'];
console.log(markAdmins(users, adminIds));
