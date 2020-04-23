
// const player = {name: 'Маг', health: 90}
// let index = player.health;

function playerHealth(index) {
  if (index > 50) {
    return 'healthy';
  } if (index >= 15) {
    return 'woundred';
  } if (index > 0) {
    return 'critical';
  }
  return 'killed';
}
// console.log(playerHealth(50))
export default playerHealth;
