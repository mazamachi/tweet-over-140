// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

const obsever = new MutationObserver((mutations) => {
  const element: Element = mutations[mutations.length - 1].target as Element;
  const oldValue = Number(element.innerHTML);
  const newValue = oldValue + 280 - 140;

  if (element.parentElement === null) {
    return;
  }
  const newCountNode: Element = element.parentElement.querySelector(".new-count") as Element;
  newCountNode.innerHTML = `(${newValue})`;
  if (newValue >= 0) {
    element.classList.remove("superwarn", "max-reached");
    newCountNode.classList.remove("superwarn", "max-reached");
    const tweetButton: HTMLButtonElement = element.parentElement.querySelector("button") as HTMLButtonElement;
    tweetButton.classList.remove("disabled");
    tweetButton.disabled = false;
  }
});

document.querySelectorAll(".tweet-counter").forEach(
  (node) => {
    if (node.parentElement === null) {
      return;
    }
    const newCountNode: Element = document.createElement("span");
    newCountNode.classList.add("new-count", "tweet-counter");
    node.parentElement.insertBefore(newCountNode, node.nextSibling);
    obsever.observe(node, {childList: true});
  }
);
