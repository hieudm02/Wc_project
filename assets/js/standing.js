var fetchPoint = 'https://world-cup.codsfli.com/points.php';

fetch(fetchPoint)
.then(function(data){
    return data.json();
})
.then(function(response){
    let bxh = document.querySelector('.main-container')
    var htmls = response.map(function(groups){
        let sor = groups.teams.sort((a, b) => {
            return a.position - b.position;
        }); 

        bxh.innerHTML +=`
        <div class="group-wc" id="${groups.group}">
            <div class="gr-header flex" >
                <div class="gr-title">${groups.group}</div>
                    <div class="gr-title-row flex">
                    <div class="game">
                        Trận
                    </div>
                    <div class="point">
                        Điểm số
                    </div>
                    <div class="win">
                        Thắng
                    </div>
                    <div class="draw">
                    Hòa
                    </div>
                    <div class="lose">
                    Thua
                    </div>
                </div>
            </div>
            ${sor.map((team)=>`
            <a href="#" class="gr-main flex">
            <div class="position">
            ${team.position}
            </div>
            <div class="gr-team flex">  
                <img  class="fl" src="${team.flag}">
                <div class="name">${team.Team}</div>
            </div>
            
            <div class="game">
            ${team.match_play}
            </div>
            <div class="point">
            ${team.points}
            </div>
            <div class="win">
            ${team.win}
            </div>
            <div class="draw">
            ${team.draw}
            </div>
            <div class="lose">
            ${team.loss}
            </div>
        </a>`).join('')}
            
        </div>
    `;

    })
})

// scrolling
const grBtns = document.querySelectorAll('.all-groups a')
const grs = document.querySelectorAll('.group-wc')

grBtns.forEach((item) =>{
    item.addEventListener('click',()=>{
        let gr = document.getElementById(item.getAttribute("data-link"))
        gr.scrollIntoView({behavior:'smooth', block:"center"});
    })
})
// matchess
async function fetchMatch(){
    let data = await fetch('./fifa-worldcup.js');
    let response = await data.json();
    console.log(response);
}
fetchMatch();

