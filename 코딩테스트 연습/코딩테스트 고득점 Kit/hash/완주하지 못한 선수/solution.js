// 완주하지 못한 선수

participant = ["leo", "kiki", "eden"];
completion = ["eden", "kiki"];

participant = participant.sort();
completion = completion.sort();

for(let i = 0; i < participant.length; i++){
    if(participant[i] !== completion[i]){
        // console.log(participant[i]);
        return participant[i];
    }

}
