class Topic{
    constructor(topic, popCounter, id){
        this.topic = topic;
        this.popCounter = popCounter;
        this.id =id;
    }
}
var enteredTopic = document.getElementById("newTopic");
// The empty array, that the users will get stored into
var allTopics = [];
// Variable to get the id_generator function to wkr
var id_generator = 3;

function id_gen () {
    id_generator ++;
    return id_generator;
}

var popstart = 0;
//Create function that pushes the selected value into an array
var topic1 = new Topic(
    "maksimeringsprincippet",
    0,
    1
);
var topic2 = new Topic(
    "Elasticitet",
    0,
    2,
);
var topic3 = new Topic(
    "Isokvanter og MRTS",
    0,
    3,
);
allTopics.push(topic1,topic2,topic3);
console.log(allTopics);
console.log(allTopics.length);
function checkTopic () {
    var boolean = false;
    for (i = 0; i < allTopics.length; i++) {
        console.log("Antal gange loopet kører:" + i);
        if (enteredTopic.value == allTopics[i].topic) {
            alert("DU har valgt en af de topics der eksisterer")
            allTopics[i].popCounter++;
            console.log(allTopics);
            boolean = true;
            break;
        }
    }
        if (boolean === false) {
            alert("Du har valgt en af de topics der ikke eksisterer");
            id_gen();
            var topicx = new Topic(
                document.getElementById("newTopic").value,
                0,)
            topicx.id = id_generator;
            console.log(topicx);
            allTopics.push(topicx);
        }
    }

var submitButton = document.getElementById("submitButton");
submitButton.onclick = function () {
    checkTopic();
        localStorage.setItem("allTopics", JSON.stringify(allTopics));
        console.log(JSON.parse(localStorage.getItem("allTopics")));
        console.log(allTopics.length);
    }

