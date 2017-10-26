module.exports = (Franz, options) => {
  function getMessages() {
    let directCount = 0;
    let indirectCount = 0;
    let elements = document.getElementsByClassName('roomListBadges__unreadBadge _unreadBadge');

    Array.prototype.forEach.call(elements, function(item) {
      let count = 0;

      isGroup = item.parentNode.parentNode.parentNode.getElementsByClassName("avatarGroup").length
      if (item.innerText) {
        count = parseInt(item.innerText);
      }

      if (isGroup) {
        // Count incoming group messages as indirectCount
        indirectCount += count;
      } else {
        directCount += count;
      }
    });

    // Current Franz 5 cannot show both of directCount and indirectCount on the badge.
    // So, pass the summation of them to setBadge function.
    // I'll change this code if Franz 5 have some options (e.g. switch for counting method) in the future.
    Franz.setBadge(directCount + indirectCount);
  }

  Franz.loop(getMessages);
}
