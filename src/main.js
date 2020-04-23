
// const player = {name: 'Маг', health: 90}
// let index = player.health;

function playerHealth (index) {
    if (index > 50) {
        return "healthy"
    } else if (index >=15) {
        return "woundred"
    } else  if (index > 0) {
        return "critical"
    } else {
        return "killed"
    }

}
// console.log(playerHealth(50))
export { playerHealth }
