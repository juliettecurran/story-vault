export function setSessionValue(key, value) {
	if (typeof window.sessionStorage === "object") {
		try {
			sessionStorage.setItem(key, JSON.stringify(value));
		} catch (e) {}
	}
}

export function getSessionValue(key) {
	if (typeof window.sessionStorage === "object") {
		try {
			return JSON.parse(sessionStorage.getItem(key));
		} catch (e) {}
	}
}

export function pluralise(count, singular, plural) {
	return Math.abs(count) === 1 ? singular : plural;
}
