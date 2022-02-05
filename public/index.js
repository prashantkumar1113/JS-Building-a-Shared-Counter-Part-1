async function main() {
    const countContainer = document.querySelector("#count-container");
    const incrementButton = document.querySelector("#increment-button");
    const decrementButton = document.querySelector("#decrement-button");

    let response = await fetch("http://localhost:9001/counter");
    let responseJson = await response.json();
    let countValue = responseJson.value;
    console.log(countValue);

    function increment() {
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement() {
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener("click", increment);
    decrementButton.addEventListener("click", decrement);
    countContainer.textContent = countValue;
}
main();
