/**
 * A hello world program written in type script to demonstrate DOM manipulation
 * @author VijayKoushik, S.
 */

/**
 * Total number of bubbles to be created.
 */
const bubbleCount = 10;

/**
 * Width of the device's viewport.
 */
const viewportWidth = window.innerWidth;

/**
 * Minimum size for a bubble.
 */
const minBubbleSize = 10;

/**
 * Maximum size for a bubble.
 */
const maxBubbleSize = 100;

/**
 * A buffer for storing the created bubbles.
 */
const bubbleBuffer: HTMLDivElement[] = [];

/**
 * The container element to which the bubbles have to be attached.
 */
const containerDiv = document.getElementById("container") as HTMLDivElement;

releaseBubbles();

/**
 * Releases the bubbles after creating them.
 */

function releaseBubbles() {
    createBubbles();
    for (let i = 0; i < bubbleCount; i++) {
        containerDiv.appendChild(bubbleBuffer[i]);
    }
    console.log("Bubbles released");
}

/**
 * Creates the bubbles, sets their size position and styles
 * and appends them to the container element
 */
function createBubbles() {
    for (let i = 0; i < bubbleCount; i++) {
        let div = document.createElement("div");
        let divSize = getSize();
        div.style.left = getLeftPosition() + "px";
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.style.animationDelay = i * randomFloat(0, 30) + "s";
        div.style.filter = "blur(" + randomFloat(2, 5) + "px)";
        div.classList.add("bubble");
        bubbleBuffer.push(div);
    }
    console.log("Bubbles created");
}

/**
 * Gets a random position between 0 and viewport width
 */
function getLeftPosition() {
    return randomFunction(0, viewportWidth - 100);
}

/**
 * Gets a random size for the bubble
 */
function getSize() {
    return randomFunction(minBubbleSize, maxBubbleSize);
}

/**
 * Generates a random whole number between the specified range.
 * @param min minimum number for the range to be generated.
 * @param max maximum  number for the range to be generated.
 */
function randomFunction(min: number, max: number) {
    return Math.floor(randomFloat(min, max));
}

/**
 * Generates a random decimal (or) floating point number between the specified range.
 * @param min minimum number for the range to be generated.
 * @param max maximum  number for the range to be generated.
 */
function randomFloat(min: number, max: number) {
    return (Math.random() * (max - min)) + min
}