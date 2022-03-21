const convertData = rawData => {
	let result = {};
	if (rawData.length > 0) {
		const firstLine = rawData[0];
		let name = firstLine.ten ? firstLine.ten.value : '';
		let description = {};
		description.author = firstLine.tgmt ? firstLine.tgmt.value : '';
		description.content = firstLine.ndmt ? firstLine.ndmt.value : '';
		if (firstLine.cauhoi) {
			name = 'Các câu hỏi thường gặp';
			description.author='Katrina Mayer';
			description.content='We spend so much time thinking about our questions that we often miss the answer right in front of our eyes.';
		}
		let data = [];
		rawData.map(item => {
			let i = {};
			i.title = item.tieude ? item.tieude.value : '';
			i.url_image = item.url_image ? item.url_image.value : '';
			i.description = item.noidung ? item.noidung.value.split(';') : [];
			i.sub_title = item.noidung ? item.noidung.value.split(';').length : 0;
			data.push(i);
			return data;
		})
	    result = {name, description, data};
	}
	return result;
};

export const topicModel = data => {
	let result = {};
	if (data.length > 0) {
		let topic = [];
		let question = [];
		let feature = []; 
		data.map(topicItem => {
			if (topicItem.chude && topicItem.chude.value) {
				topic.push(topicItem);
			}
			if (topicItem.tinhnang && topicItem.tinhnang.value) {
				feature.push(topicItem);
			}
			if (topicItem.cauhoi && topicItem.cauhoi.value) {
				question.push(topicItem);
			}
			return null;
		});
		result = {
			topic: convertData(topic),
			feature: convertData(feature),
			question: convertData(question)
		};
	}
	return result;
}