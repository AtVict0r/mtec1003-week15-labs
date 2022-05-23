const SPEED = 50;
const paragraph = [
    "My name is David Plumb, I am a 29-year-old professional sports person who enjoys travelling, cookery and extreme ironing. I am friendly and entertaining, but can also be very untrustworthy and a bit standoffish.",
    "I am an American Christian who defines himself as straight. I started studying sports science at college but never finished the course. I am obsessed with selfies and reading.",
    "Physically, I am in pretty good shape. i am tall with walnut skin, brown hair and black eyes.",
    "I grew up in a middle class neighbourhood. I was raised single-handedly by my father, my mother having left when I was young.",
    "My best friend is a fellow professional sports person called Dominic O\'Ryan. We have a very firey friendship. He also hangs around with Mccauley Patel and Mariam Doyle. They enjoy charity work together."
];
var i = 0;
var j = 0;

function typeWriter() {
    if (i < paragraph.length) {
        if (j < paragraph[i].length) {
            document.getElementById("paragraph" + String(i+1)).innerHTML += paragraph[i].charAt(j);
            j++;
            setTimeout(typeWriter, SPEED);
        } else {
            i++;
            j = 0;
            typeWriter();
        }
    }
}