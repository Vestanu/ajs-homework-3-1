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

export default playerHealth;
