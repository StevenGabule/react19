interface Item {
	id: string;
}

export const findItemIndexById = <T extends Item>(items: T[], tid: string) =>  {
	return items.findIndex((item) => item.id === tid);
}
