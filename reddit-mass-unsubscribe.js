function removeSubreddits() {
  // Runs on https://old.reddit.com/subreddits/
  const removeButtons = document.querySelectorAll(".sidecontentbox .remove");
  let index = 0;

  if (removeButtons.length === 0) {
    console.log("No subreddits found to remove.");
    return;
  }

  const interval = setInterval(() => {
    if (index === removeButtons.length) {
      clearInterval(interval);
      console.log("Completed subreddit removal.");
    } else {
      removeButtons[index].click();

      // FYI: Assuming the parent structure might not change
      let subredditName = removeButtons[index].parentNode.parentNode
        .querySelector(".title")
        .textContent.trim();

      // Ricing: Displaying the current operation number, total count, and subreddit name
      console.log(
        `Removing (${index + 1}/${removeButtons.length}): ${subredditName}`,
      );

      index++;
    }
  }, 1000);
}

removeSubreddits();
