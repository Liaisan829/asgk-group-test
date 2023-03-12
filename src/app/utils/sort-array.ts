export const sortArray = (arr: any[], field: string, asc: boolean = true): any[] => {
	return arr.sort((a, b) => {
		if (!a[field] || !b[field]) {
			return 0
		}

		if (a[field] > b[field]) {
			return asc ? 1 : -1;
		}
		if (a[field] < b[field]) {
			return asc ? -1 : 1
		}

		return 0;
	})
}
