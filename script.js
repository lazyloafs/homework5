var clock = document.getElementById('clock');

function updateTime () {

var now = moment ();
var humanReadable = now.format("dddd MMM Mo YYYY")

clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);
updateTime();

$(".save-btn").on('click', function () {
    var saveButtonEl = $(this);
    var inputEl = saveButtonEl.siblings(".hour-input");
    var storageKey = saveButtonEl.attr('data-key');
    localStorage.setItem(storageKey, inputEl.val());
});
