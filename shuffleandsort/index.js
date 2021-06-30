let defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
defaultArray.forEach((item) => {
    displayDefaultArray(item);
});

function displayDefaultArray(item) {
    const node = document.createElement("div");
    node.setAttribute("class", "flex-item");
    node.classList.add("bgColor-" + item);
    const textnode = document.createTextNode(item);
    node.appendChild(textnode);
    document.getElementById("sortDiv").appendChild(node);
}

function shuffleArray() {
    let currentIndex = defaultArray.length;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [defaultArray[currentIndex], defaultArray[randomIndex]] = [defaultArray[randomIndex],
            defaultArray[currentIndex]
        ];
    }
    const shuffledArray = defaultArray;
    displayUI(shuffledArray);
}

function sortArray() {
    const sortedArray = defaultArray.sort();
    displayUI(sortedArray);
}

function displayUI(arr) {
    const divs = document.querySelectorAll(".flex-item");
    let i = 0;
    for (const div of divs) {
        // to randomly change the background color of the grid
        div.setAttribute('class', "flex-item bgColor-" + arr[i]);
        div.innerHTML = arr[i];
        i++;
    }
}