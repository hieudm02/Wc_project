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

// matches
async function fetchMatch(){
    let matchByRound = document.querySelector('.gr-1')
    let matchByRound2 = document.querySelector('.gr-2')
    let matchByRound3 = document.querySelector('.gr-3')
    let data = await fetch('https://raw.githubusercontent.com/hieudm02/Wc_project/master/assets/js/fifa-world-cup.json');
    let response = await data.json();
    let all_match = [];
    function showMatches(groupDate,selector){
        selector.innerHTML +=`
                <div class="gr-matches-main-1 flex"> 
                <div class="gr-matches w-100">
                    <div class="day flex">${groupDate.date}</div>
                    <a class="gr-matches-detail flex" href="#">
                        <div class="gr-matches-detail-col flex">
                            <span class="group">${groupDate.group}</span>
                            <span class="stadium">${groupDate.location} </span>
                        </div>
                        <div class="gr-matches-detail-col-2 flex">
                            <div class="gr-team w-100 flex">  
                            <div class="name hometeam flex">${groupDate.home_team}</div>
                            <img  class="fl" src="${groupDate.home_flag}">
                                
                            </div>
                            <div class="gr-matches-score flex">
                                ${groupDate.home_team_score}
                                    -
                                ${groupDate.away_team_score}
                            </div>
                            <div class="gr-team w-100 flex">  
                                <img  class="fl" src="${groupDate.away_flag}">
                                <div class="name awayteam flex">${groupDate.away_team}</div>
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
            let weekday = ["Chủ Nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"];
            let time = new Date(response[i]['DateUtc']);
            let localTime = time.toLocaleTimeString().replace(':00:00', ':00');
            let day_month = time.toString().split(' ');
            let date = [weekday[time.getDay()]+", "+day_month[2]+"/"+(time.getMonth()+1)+"/"+time.getFullYear()]
            let home_team = response[i]['HomeTeam'];
            let home_team_score = response[i]['HomeTeamScore'];
            let away_team_score = response[i]['AwayTeamScore'];
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
                date,
                home_team,
                home_team_score,
                away_team_score,
                home_flag,
                away_team,
                away_flag,
                stadium,
                group,
                location,
                matchNumber,
                roundNumber,
            };
            
            all_match.push(Match);
            //group by date
           let groupDate = all_match.reduce((d,m) =>{     
                d[date] = [];
                d[date].push(m);
                return d;

            },[]);
            
            let groupArray = Object.keys(groupDate).map((date)=>{
                return {
                    date,
                    
                }

            })
            console.log(groupDate);
            if (Match.roundNumber == 1){ 
                showMatches(Match,matchByRound);
            }else if(Match.roundNumber == 2){
                showMatches(Match,matchByRound2)
            }else{
                showMatches(Match,matchByRound3)
            }
           
            }
            
            }
fetchMatch();

