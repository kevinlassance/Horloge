const secondsHtml = document.querySelector(".second-hand");
const minutesHtml = document.querySelector(".min-hand");
const hoursHtml = document.querySelector(".hour-hand");

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondsHtml.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
	minutesHtml.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
	hoursHtml.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
