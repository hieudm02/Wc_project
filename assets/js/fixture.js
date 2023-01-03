
// matchess
async function fetchMatch(){
    let data = await fetch('./fifa-world-cup.json');
    let response = await data.json();
    console.log();
}
fetchMatch();

