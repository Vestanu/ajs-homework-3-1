// eslint-disable-next-line import/newline-after-import
// eslint-disable-next-line import/no-absolute-path
import '/Users/User/Desktop/git/ajs-homeworks/ajs-homework-3-1/src/style.css';

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
