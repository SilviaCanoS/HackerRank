function climbingLeaderboard(ranked, player) {
    // Write your code here
    ranked = ranked.filter((item, index) => ranked.indexOf(item) == index);
    for(let i=0; i<player.length; i++){
        if(ranked.includes(player[i])) player[i] = ranked.indexOf(player[i]) + 1;
        else{
            if(player[i] > ranked[0]){
                ranked.unshift(player[i]);
                player[i] = 1;
            }
            else if(player[i] < ranked[ranked.length-1]){
                ranked.push(player[i]);
                player[i] = ranked.length;
            }
            else{
                for(let j=0; j<ranked.length-1; j++){
                    if(player[i] < ranked[j] && player[i] > ranked[j+1]){
                        ranked.splice(j+1, 0, player[i]);
                        player[i] = j+2;
                        break;
                    }
                }
            }
        }
    }
    return player;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));