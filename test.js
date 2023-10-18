// During the test I panicked really badly for the time limit, and my brain froze completely especially for JavaScript questions. But giving up is not in my dictionary, so I tried further after my brain had calmed down (I still had code snippet in my VS code from the test).

//---------------------------------------//
// Question 2

//-- Although I managed to solve the other 2 questions, I still can't get this one right. Would it be possible for you to let me know the correct answer for this question? I would love to know!--//

// function simulate(input1, input2, input3, input4) {
//   // Your code goes here
//   if (input1 && input4) return true;
// }
// console.log(simulate(true, false, false, true)); // should print true
//---------------------------------------//

// Question 4
const ladder = [4, 5, 5, 4, 3, 5, 4];
function usageCount(ladder) {
  // Your code goes here
  let ladderCopy = [...ladder];
  let count = 0;
  while (!ladderCopy.includes(1)) {
    ladderCopy = ladderCopy.map((x) => x - 1);
    count++;
  }
  return count;
  // Initially I wanted to use .map() method but I forgot that it makes a copie of the original array instead of mutating it. And I tried to solve this with loops, and got stuck there
}
console.log(usageCount(ladder)); // Should print 2

//Question 8
function initialize() {
  // Write your code here.
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      let curEl = e.target.previousElementSibling;
      let prevEl = e.target.parentNode.previousElementSibling.firstElementChild;
      let temp = curEl.innerHTML;
      curEl.innerHTML = prevEl.innerHTML;
      prevEl.innerHTML = temp;

      // --- This one moved up with the button
      // const curEl = e.target.parentNode;
      // const prevEl = e.target.parentNode.previousElementSibling;
      // curEl.parentNode.insertBefore(curEl, prevEl);
    })
  );
}

document.body.innerHTML = `
<div>
  <span>Read emails</span>
</div>
<div>
  <span>Prepare presentation</span><button type="button">&uarr;</button>
</div>
<div>
  <span>Monthly report</span><button type="button">&uarr;</button>
</div>`;

initialize();

document.getElementsByTagName("button")[1].click();
document.getElementsByTagName("button")[0].click();

// Monthly report should become the first task, followed by Read emails and Prepare presentation.
console.log(document.body.innerHTML);
