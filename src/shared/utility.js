export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject, 
		...updatedProperties
	};
}

export const objectIsEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}