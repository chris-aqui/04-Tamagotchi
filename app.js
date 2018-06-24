const inquirer = require('inquirer');

function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry === true) {
            console.log("Hmm, yummy");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks, I'm full");
        }
    };
    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log("No way! I'm not tired!");
        }
    };
    this.play = function(){
        if (this.bored){
            console.log("Yay! let's play.");
            this.bored = false;
            this.hungry = true;
        }
        else{
            console.log("Not right .... later?!");
        }
    };
    this.increaseAge = function(){
        this.age++;
        console.log("Happy Birthday to me! I am "+this.age+" days old!");
    }
}

let dog = new DigitalPal();
dog.outside = false;
dog.bark = function() {
    console.log("Woof! Woof!");
};
dog.goOutside = function() {
    if (!this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
};
dog.goInside = function() {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
};

// TODO do the same for cats

// Play a tamagotchi game!

let myPal = new DigitalPal();
console.log("Hey, you have a new tamagotchi - please feed/sleep/play with your new digital pal!");

function askUser() {
    inquirer.prompt([
        {
            name: 'userAction',
            type: 'list',
            message: 'What do you want to do with your digital pal next?',
            choices: ['Feed', 'Play', 'Sleep']
        }
    ]).then(function(userResponse) {
        console.log(userResponse);
        switch (userResponse.userAction) {
            case 'Feed':
                myPal.feed();
                break;
            case 'Play':
                myPal.play();
                break;
            case 'Sleep':
                myPal.sleep();
                break;
            default:
                console.log("this should never happen...");
        }
        askUser();
    });
}

askUser();