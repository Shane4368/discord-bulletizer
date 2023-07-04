export function bulletize(text: string, bullet: string): string {
	return text.split("\n")
		.map(x => x.length > 0 ? `${bullet} ${x}` : "")
		.join("\n");
}

export function wrapUrl(text: string): string {
	return text.replace(/(?![^<]*>)(https?:\/\/[^\s\[\]\(\)]+)/g, "<$1>");
}

export function bold(text: string): string {
	return `**${text}**`;
}

export function underline(text: string): string {
	return `__${text}__`;
}

export function italicize(text: string): string {
	return `*${text}*`;
}