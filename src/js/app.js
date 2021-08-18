// TODO: write your code here
// import sum from './basic';
// console.log('worked');
// console.log(sum([1, 2]));

import fetchData from './http';

export function getLevel(userId) {
    const response = fetchData(`https://server/user/${userId}`);
    
    // TODO: логика обработки
    if (response.status === 'ok') {
       return `Ваш текущий уровень: ${response.level}`; 
    }
    
    return `Информация об уровне временно недоступна`;
  }