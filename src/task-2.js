const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user => (user.name === userName ? { ...user, active: !user.active } : user));
  return new Promise(resolve => {
    resolve(updatedUsers, console.log(`Меняем статус пользователя ${userName}`));
    // reject(console.log(`Пользователь с именем ${userName} не найден`));
  });
};

const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// // toggleUserState(users, 'Mango', logger);
// // toggleUserState(users, 'Lux', logger);

// /*
//  * Должно работать так
//  */
toggleUserState(users, 'Poly').then(logger);
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
