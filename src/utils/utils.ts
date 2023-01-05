export class Util {
	private static transform(str: string, upperCase = true) {
		const [first, ...rst] = str;

		if (!first) return '';
		const firstLetter = upperCase ? first.toUpperCase() : first.toLowerCase();

		return [firstLetter, ...rst].join('');
	}

	static upperCaseFirstLetter(str: string) {
		return Util.transform(str);
	}
	static lowerCaseFirstLetter(str: string) {
		return Util.transform(str, false);
	}
}
