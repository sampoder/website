const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
].map((m) => m.substring(0, 3));

export const convertTimestampToDate = (timestamp) => {
	if (timestamp === null) {
		return '';
	}
	const isToday =
		new Date().toISOString().substring(0, 10) === timestamp.toString().substring(0, 10);
	let date = new Date(timestamp);
	let week = days[date.getDay()];
	let day = date.getDate();
	let monthIndex = date.getMonth();
	let month = monthNames[monthIndex];
	let year = date.getFullYear();
	let hours = date.getHours() || 0;
	let cleanHours;
	if (hours === 0) {
		cleanHours = 12; // if timestamp is between midnight and 1am, show 12:XX am
	} else {
		cleanHours = hours > 12 ? hours - 12 : hours; // else show proper am/pm
	}
	let minutes = date.getMinutes();
	let stringMinutes = minutes >= 10 ? minutes : '0' + minutes.toString(); // turns 4 minutes into 04 minutes
	let ampm = hours >= 12 ? 'pm' : 'am';
	return isToday ? `${cleanHours}:${stringMinutes}${ampm}` : `${week}, ${month} ${day}`;
};

const dataDetector =
	/(<.+?\|?\S+>)|(@\S+)|(`{3}[\S\s]+`{3})|(`[^`]+`)|(_[^_]+_)|(\*[^\*]+\*)|(:[^ .,;`\u2013~!@#$%^&*(){}=\\:"<>?|A-Z]+:)/;

export const formatText = (text) =>
	text
		.split(dataDetector)
		.map((chunk, i) => {
			if (chunk?.startsWith(':') && chunk?.endsWith(':')) {
				return ``;
			}
			if (chunk?.startsWith('@') || chunk?.startsWith('<@')) {
				const punct = /([,!:.'"’”]|’s|'s|\))+$/g;
				const username = chunk.replace(/[@<>]/g, '').replace(punct, '');
				return `<span>@${username}</span>`;
			}
			if (chunk?.startsWith('<')) {
				const parts = chunk.match(/<(([^\|]+)\|)?([^>]+?)>/);
				const url = parts?.[2] || parts[parts.length - 1];
				const children = parts[parts.length - 1]?.replace(/https?:\/\//, '').replace(/\/$/, '');

				return `<a href="${url}" target="_blank" rel="noopener">${children}</a>`;
			}
			if (chunk?.startsWith('```')) {
				return `<pre>${chunk.replace(/```/g, '')}</pre>`;
			}
			if (chunk?.startsWith('`')) {
				return `<code>${chunk.replace(/`/g, '')}</code>`;
			}
			if (chunk?.startsWith('*')) {
				return `<strong>${chunk.replace(/\*/g, '')}</strong>`;
			}
			if (chunk?.startsWith('_')) {
				return `<i>${chunk.replace(/_/g, '')}</i>`;
			}
			return chunk?.replace(/&amp;/g, '&');
		})
		.join('');

export function endsWithAny(suffixes, string) {
	try {
		return suffixes.some(function (suffix) {
			return string.endsWith(suffix);
		});
	} catch {
		return false;
	}
}

export function generateWidthStyles(length) {
  return `max-width: calc(${length >= 3 ? '33%' : length == 2 ? '50%' : '100%'} - 8px)`;
}