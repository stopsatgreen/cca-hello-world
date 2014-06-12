var numIds = 0;

function createNotification(options) {
  var notificationId = 'id' + numIds;
  numIds++;
  if (!('iconUrl' in options)) {
    options.iconUrl = 'assets/icons/icon72.png';
  }
  options.message = options.message || 'notificationId = ' + notificationId;
  chrome.notifications.create(notificationId, options, function(notificationId) {
    h1.style.color = '#0f0';
  });
}

var h1 = document.querySelector('h1');
h1.style.color = '#00f';
h1.addEventListener('click', function () {
  h1.style.color = '#f00';
  createNotification({
    type:'basic',
    title:'Basic Notification',
  });
});

// chrome.power.requestKeepAwake('display');
