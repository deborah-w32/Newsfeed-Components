/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>


  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const theActualMenu = document.querySelector('.header')

function menuMaker(menuDataObj){

  const menu = document.createElement('div')
  const theWholeList = document.createElement('ul')
  const students = document.createElement('li')
  const faculty = document.createElement('li')
  const news = document.createElement('li')
  const trends = document.createElement('li')
  const music = document.createElement('li')
  const logOut = document.createElement('li')

  menu.appendChild(theWholeList)
  theWholeList.appendChild(students)
  theWholeList.appendChild(faculty)
  theWholeList.appendChild(news)
  theWholeList.appendChild(trends)
  theWholeList.appendChild(music)
  theWholeList.appendChild(logOut)

  menu.className = 'menu'

  students.textContent = menuDataObj[0]
  faculty.textContent = menuDataObj[1]
  news.textContent = menuDataObj[2]
  trends.textContent = menuDataObj[3]
  music.textContent = menuDataObj[4]
  logOut.textContent = menuDataObj[5]

  
}