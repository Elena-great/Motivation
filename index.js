const button = document.querySelector(".btn");
const par = document.querySelector(".par");
const quotes = ["Женщины, конечно, умнее. Вы когда-нибудь слышали о женщине, которая бы потеряла голову только от того, что у мужчины красивые ноги?", "Думайте и говорите обо мне что пожелаете. Где вы видели кошку, которую бы интересовало, что о ней говорят мыши?", 
"Если больной очень хочет жить, врачи бессильны.", 
"Вы знаете, что такое сниматься в кино? Представьте, что вы моетесь в бане, а туда приводят экскурсию.", 
"Я как старая пальма на вокзале — никому не нужна, а выбросить жалко.", 
"Жизнь слишком коротка, чтобы тратить ее на диеты, жадных мужчин и плохое настроение.", 
"Когда я начинаю писать мемуары, дальше фразы: «Я родилась в семье бедного нефтепромышленника…», — у меня ничего не получается.", 
"Оптимизм – это недостаток информации.",
"Стареть скучно, но это единственный способ жить долго."];

button.addEventListener("click", () => {
  let randomQuote = quotes[Math.floor(Math.random()*quotes.length)]; //вводим переменную и прописываем формулу случайной генерации цитат
  par.style.display = "block"; 
  par.textContent = randomQuote; //чтобы отображались цитаты
})