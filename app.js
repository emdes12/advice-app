const adviceId = document.querySelector(".advice-id");
const adviceWord = document.querySelector(".advice-word");

async function giveAdvice() {
  let rand = Math.round(Math.random() * 223 + 1);
  console.log(rand);
  const response = fetch("https://api.adviceslip.com/advice/" + rand);
  const data = await (await response).json();
  console.log(data);

  adviceId.innerHTML = data.slip.id;
  adviceWord.innerHTML = data.slip.advice;
}

// function giveAdvice() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((resp) => {
//       console.log(resp);
//       return resp.json;
//     })
//     .then((resp) => {
//       console.log(resp);
//     });
//   // .then((resp) => {
//   //   bodyEl.innerHTML = `
//   // <div class="advice-card">
//   //   <div class="top-line">Advice #${resp.slip[0].id}</div>

//   //   <h3>
//   //     "${resp.slip.advice}"
//   //   </h3>

//   //   <div class="img-line">
//   //     <img src="/images/pattern-divider-mobile.svg" alt="divider" />
//   //   </div>

//   //   <div class="img-line1">
//   //     <img src="/images/pattern-divider-desktop.svg" alt="divider" />
//   //   </div>

//   //   <div class="circle-btn" onClick="giveAdvice()">
//   //     <img src="/images/icon-dice.svg" alt="dice" />
//   //   </div>
//   // </div>

//   // <footer class="attribution">
//   //   Challenge by
//   //   <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
//   //     >Frontend Mentor</a
//   //   >. Coded by <a href="https://emdes12.github.io">Alawiye Muritala</a>.
//   // </footer>`;
//   // });
// }
