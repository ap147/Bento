// Get the hour
var today = new Date();
var Hr = today.getHours();

// Here you can change your name
var name = 'amarjot';

// Here you can change your greetings
var gree1 = 'go to Sleep! ';
var gree2 = 'good morning! ';
var gree3 = 'good afternoon ';
var gree4 = 'good evening ';
var gree5 = 'good evening ';
var gree6 = 'good evening ';

// Define the hours of the greetings
if (Hr >= 23 && Hr < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = gree3 + name;
} else if (Hr >= 17 && Hr < 23) {
    document.getElementById('greetings').innerText = gree4 + name;
}
