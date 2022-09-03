export function bulletise(text: string, bullet: string): string {
	return text.split("\n")
		.map(x => x.length > 0 ? `${bullet} ${x}` : "")
		.join("\n");
}

export function wrapURL(text: string): string {
	return text.replace(/(?![^<]*>)(https?:\/\/[^\s\[\]\(\)]+)/g, "<$1>");
}

export function bold(text: string): string {
	return `**${text}**`;
}

export function underline(text: string): string {
	return `__${text}__`;
}

export function italicise(text: string): string {
	return `*${text}*`;
}