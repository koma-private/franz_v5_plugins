module.exports = (Franz, options) => {
  function getMessages() {
    let directCount = 0;
    let indirectCount = 0;
    let badge = document.getElementById('numNotifs2');

    if (badge && badge.innerText) {
        indirectCount = parseInt(badge.innerText);
    }

    Franz.setBadge(directCount + indirectCount);
  }

  Franz.loop(getMessages);
}
