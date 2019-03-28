# JavaScript Practice

We'll be covering JavaScript on the first week of the course, and the come back to it in a few weeks. In the meantime, and throughout the course as a whole, it's really important that you continue to practice your core JavaScript programming skills even if we're focussing on different topics that week.

This repository contains challenges to complete each week. We'll be checking over your solutions regularly and you can always come to us if you are having any trouble.

### Instructions

Fork this repository to your own Github account.

Then clone the repository to your local machine:

    git clone https://github.com/USERNAME/javascript_practice.git

Change into the new directory

    cd javascript_practice

We will be adding more tasks to this repository as the weeks progress, so you'll need to pull in updates that _we_ make to this repository week by week. To do this, you need to link the original Tech Returners Github repository to your local repository on your machine.

To do this, running the following command:

    git remote add upstream https://github.com/techreturners/javascript_practice.git

This means that there will be links established between:

- Your local repository ---> Your repository on Github (called "origin")
- Your local repository ---> Our repository on Github (called "upstream")

#### Pulling in changes from upstream

To pull in new challenges each week, first add and commit any changes you have made (the below command requires you to have no local changes) and then run:

    git pull upstream master

If you cannot get to a straight edge to commit, you can temporarily "stash" your changes and then retrieve them when you have pulled from upstream. You would run:

    git stash

Followed by:

    git pull upstream master

And finally, to retrieve your stashed changes:

    git stash pop

### Pushing changes

When you complete a challenge, push your commits up to Github so that we can follow your progress. To push to your remote repository:

    git push origin master

### Completing the challenges

When first cloning this repository, install its dependencies:

    npm install

If you look inside the **challenges** directory you will find a file of functions to implement.

To understand how these functions work, take a look in the corresponding test file where the desired functionality is described.

To run the tests, run

    npm test

Work through each test 1 by 1 until you have them all passing. Initially, you'll have a lot of failing tests and a lot of output on the console. To focus on a single test, add `.only` to the test you are interested in:

```javascript
describe("capitalize", () => {
  test.only("returns a capitalized word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("does nothing if the word is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("capitalizes the first word of a sentence", () => {
    expect(capitalize("the quick fox")).toBe("The quick fox");
  });
});
```

Don't forget to remove it afterwards so you can run all your tests again.

You can also ignore tests momentarily by adding an `x` at the front:

```javascript
xdescribe("capitalize", () => {
  test("returns a capitalized word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("does nothing if the word is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("capitalizes the first word of a sentence", () => {
    expect(capitalize("the quick fox")).toBe("The quick fox");
  });
});
```

### Edge cases

We have provided basic tests for each function - but can you think of any more tests which would help make sure that these functions behave correctly?

Think about **edge cases**, which are use cases for your function which you might not ordinarily expect, but which you need to handle regardless.

For example, the first function should capitalize a string. So we have tested that it works for a single word:

`capitalize("hello") --> "Hello"`

What about a longer string:

`capitalize("hello world") --> "Hello world"`

And when the string is already capitalized:

`capitalize("Hello everyone") --> "Hello everyone"`

What if the string contains no characters?

`capitalize("") --> ""`

### Linting

To help you write "clean", tidy code, we've included Linting with [EsLint](https://eslint.org/) in this repository.

EsLint will tell you when you have incorrectly formatted your code, or when it suspects an error such as an undefined variable.

This is hugely beneficial, as it alerts you to many errors before you even run your code! It also helps you write code that will be easy for you and other developers to read in the future.

Is is configured with a set of standard rules, which can be viewed [here](https://eslint.org/docs/rules/).

For reporting as-you-type, install and enable the EsLint extension for VSCode (click the square symbol on the left hand bar for extensions).

To check all linting errors, run:

    npm run eslint

You should fix any errors before adding and commiting your code.

# The challenges

Open [The week1 challenge instructions](docs/week1.md) to get started!
