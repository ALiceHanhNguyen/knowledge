export const keywordAndQuestionModel = data => {
	if (data.length > 0) {
		return data.map(item => {
            return {
                uri: item.id ? item.id.value : '',
                name: item.tu_khoa ? item.tu_khoa.value : '',
            };
		});
	} else {
        return data;
    }
}
