const { SplitChunksPlugin } = require("webpack");

var participant = ["mislav", "stanko", "mislav", "ana"]
var completion = ["stanko", "ana", "mislav"]

function solution(participant, completion) {
    var temp =participant.join('');
    for(var i =0;i<completion.length;i++){
		//temp = participant.join().split(completion[i]);
		
		temp = temp.split(completion[i]).join('');
		
	}
	
	console.log(temp);

}
solution(participant,completion);