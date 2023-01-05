// 
// var fetchPoint = 'https://raw.githubusercontent.com/hieudm02/Wc_project/master/assets/js/fifa-world-cup.json';

// fetch(fetchPoint)
// .then(function(data){
//     return data.json();
// })
// .then(function(response){
//     let match = document.querySelector('.gr-matches-main')
//     var htmls = response.map(function(matches){
        
//         match.innerHTML +=`
//         <div class="gr-matches w-100">
//                      <div class="day"></div>
//                      <a class="gr-matches-detail" href="#">
//                          <div class="gr-matches-detail-col-1">
//                              <span class="group"></span>
//                              <span class="stadium"> </span>
//                          </div>
//                          <div class="gr-matches-detail-col-2">
//                              <div class="gr-team flex">  
//                                  <img  class="" src="">
//                                  <div class="name"></div>
//                              </div>
//                              <div class="gr-matches-score">

//                              </div>
//                              <div class="gr-team flex">  
//                                  <img  class="" src="">
//                                  <div class="name"></div>
//                              </div>
//                          </div>
//                          <div class="gr-matches-detail-col-1">
                            
//                          </div>
//                      </a>
//                  </div>
//     `;

//     })
// })

// matchess
async function fetchMatch(){
    let matchByRound = document.querySelector('.gr-matches-main')
    let matches = document.querySelector('.gr-matches-main')
    let data = await fetch('https://raw.githubusercontent.com/hieudm02/Wc_project/master/assets/js/fifa-world-cup.json');
    let response = await data.json();
    let all_match = [];
    function showMatches(Match,selector){
        selector.innerHTML +=`
                <div class="gr-matches-main-1 flex"> 
                <div class="gr-matches w-100">
                    <div class="day flex">${Match.day} ${Match.date} ${Match.month}</div>
                    <a class="gr-matches-detail flex" href="#">
                        <div class="gr-matches-detail-col flex">
                            <span class="group">${Match.group}</span>
                            <span class="stadium">${Match.location} </span>
                        </div>
                        <div class="gr-matches-detail-col-2 flex">
                            <div class="gr-team w-100 flex">  
                            <div class="name hometeam flex">${Match.home_team}</div>
                            <img  class="fl" src="${Match.home_flag}">
                                
                            </div>
                            <div class="gr-matches-score">

                            </div>
                            <div class="gr-team w-100 flex">  
                                <img  class="fl" src="${Match.away_flag}">
                                <div class="name awayteam flex">${Match.away_team}</div>
                            </div>
                        </div>
                        <div class="gr-matches-detail-col col-3 flex">
                            <span class="matches-end flex">Kết thúc</span>
                        </div>
                    </a>
                </div>
                </div>
        `;
        }
        for (let i = 0; i < response.length; i++) {
            let time = new Date(response[i]['DateUtc']);
            let localTime = time.toLocaleTimeString().replace(':00:00', ':00');
            let day_month = time.toString().split(' ');
            let date = day_month[2];
            let home_team = response[i]['HomeTeam'];
            let home_flag = response[i]['flag'][0];
            let away_team = response[i]['AwayTeam'];
            let away_flag = response[i]['flag'][1];
            let stadium = response[i]['Location'];
            let group = response[i]['Group'];
            let location = response[i]['Location'];
            let matchNumber = response[i]['MatchNumber'];
            let roundNumber = response[i]['RoundNumber'];
            let Match = {
                localTime,
                day: day_month[0],
                month: day_month[1],
                home_team,
                home_flag,
                away_team,
                away_flag,
                stadium,
                group,
                location,
                matchNumber,
                roundNumber,
                date,
            };
            console.log(Match)
            all_match.push(Match);
            // const result = Object.Match.filter(roundNumber => roundNumber = 1);
           
            if (Match.roundNumber == 1){ 
                showMatches(Match,matchByRound);}
             }
}
fetchMatch();

