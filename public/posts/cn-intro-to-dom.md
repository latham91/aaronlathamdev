# Week-3: Code Nation Master Software Bootcamp

Hey there, fellow code enthusiasts! Week 3 at the awesome Code Nation Master Software Bootcamp has been a wild ride into the heart of web development. This time around, we've been diving deep into the Document Object Model (DOM) and the playful world of JavaScript magic.

You know that feeling when your code actually does stuff? Like changing text colors or making HTML elements appear and disappear? It's the simple things that bring the biggest smiles!

This week's been a hilarious flashback to vanilla JavaScript after hanging out with React and its gang of frameworks. Don't get me wrong, those tools are super handy - they practically do the robot dance while we chill. But going back to basics is like catching up with an old friend.

There's something special about mastering the basics, like understanding the language that built the whole web circus. It's like knowing the secret sauce that flavors the internet stew!

Revisiting JavaScript in its pure form has been a total blast, reminding us of its quirky charm and raw power. Sure, it might not handle everything like our fancy frameworks, but it's the OG that keeps us grounded.

Playing around with DOM manipulation this week has been like rediscovering your favorite childhood game - it's familiar yet thrilling, reminding us that the real joy lies in the journey of creation.

Let's dive into a snippet of code from one of the activities we were tasked that demonstrates our adventure this week:

```js
const activityTwoBtn = document.querySelector(".btn-activity-two");
const activityTwoImg = document.querySelector(".img-activity-two");
const activityTwoInput = document.querySelector(".input-activity-two");

activityTwoBtn.addEventListener("click", () => {
    if (activityTwoInput.value === "") {
        // Validate the input value to check if it has text
        alert("Please enter a valid URL");
    } else {
        // Set the image src to the input value
        activityTwoImg.src = activityTwoInput.value;
    }
});
```

Keep coding, keep exploring, and keep uncovering the awesome quirks of JavaScript!
