// itemId - значение на сравнение, которое, скорее всего, лежит в action

export const updateObjectInArray = (
	items,
	itemId,
	objPropName,
	newObjProps
) => {
	return items.map((user) => {
		if (user[objPropName] === itemId) {
			return {...user, ...newObjProps};
		}
		return user;
	});
};
