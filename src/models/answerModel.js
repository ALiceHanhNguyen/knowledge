import {convertData} from './knowledgeModel';

const convertByKnowledgeAttrs = (data) => {
    let result = {};
    const attributeArr = ['ten', 'chu_y', 'noi_dung', 'nhom_kien_thuc', 'chung_minh', 'cau_hoi_goi_y', 'cong_thuc', 'tinh_chat', 'dinh_ly', 'vi_du', 'dinh_nghia', 'nguoi_khoi_tao', 'tu_khoa'];
    (data || []).map(i => {
        attributeArr.map(name => {
            if (i.property.value.indexOf(name) !== -1) {
                result[name] = result[name] ? result[name] : i.obj;
                result['uri'] = result['uri'] ? result['uri'] : i.knowledge;
            }
            return name;
        });
        return i;
    });
    return result;
}

const groupBy = (objectArray, property) => {
    const obj = objectArray.reduce((acc, obj) => {
        if (obj[property].uri) {
            let uri = obj[property].uri;
            let name = obj[property].name;
            let keyArray = uri.split('#');
            let key = keyArray[1];
            if (!acc[key]) {
                acc[key] = {
                    category: [],
                    name, uri
                }
            }
            acc[key].category.push(obj);
            return acc;
        }
        return null;
    }, {});
    return obj ? Object.values(obj) : null;
}
const groupByKnowledge = (objectArray, property) => {
    const obj = objectArray.reduce((acc, obj) => {
        let key = obj[property].value;
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj);
        return acc;
    }, {});
    return Object.values(obj);
}

const convertByLevel = (data) => {
    const dataRaw = [];
    (data || []).map(i => {
        const obj = {
            level_0: i.level_0 ? {name: i.level_0.value, uri: i.level_uri_0.value} : {},
            level_1: i.level_1 ? {name: i.level_1.value, uri: i.level_uri_1.value} : {},
            level_2: i.level_2 ? {name: i.level_2.value, uri: i.level_uri_2.value} : {},
            level_3: i.level_3 ? {name: i.level_3.value, uri: i.level_uri_3.value} : {}
        };
        dataRaw.push(obj);
        return i;
    });
    return dataRaw;
}

const groupByLevel = (func, args) => {
    const result = [];
    args[0].map(item => {
        if (item.category && item.category.length) {
            const category = func(item.category, args[1]);
            result.push({...item, category});
        }
        return item;
    });
    return result;
}

const groupByLevelAdvance = (data, level) => {
    const result = [];
    data.map(item => {
        if (item.category && item.category.length) {
            const category = groupByLevel(groupBy, [item.category, level]);
            result.push({...item, category});
        }
        return item;
    });
    return result;
}
export const answerModel = data => {
	if (data) {
        if (data.head.vars[0] === 'knowledge') {
            // kien thuc
            let result = null;
            if (data.head.vars[1] === 'knowledgeGroup') {
                if (data.results.bindings && data.results.bindings.length) {
                    const dataGroup = groupByKnowledge(data.results.bindings, 'knowledge');
                    (dataGroup || []).map(i => {
                        if (!result) {
                            result = [];
                        }
                        result.push(convertData(convertByKnowledgeAttrs(i)));
                        return i;
                    });
                }
            } else {
                result = [convertData(convertByKnowledgeAttrs(data.results.bindings))];
            }
            return {data: result, type: 'knowledge'};
        } else {
            // levels
            let result = null;
            if (data.results.bindings && data.results.bindings.length) {
                const dataRaw = convertByLevel(data.results.bindings);
                if (dataRaw && dataRaw.length) {
                    let data0, data1, data2, data3;
                    if (dataRaw[0].level_0) {
                        data0 = groupBy(dataRaw, 'level_0');
                        result = data0;
                    }
                    if (dataRaw[0].level_1 && data0 && data0.length) {
                        data1 = groupByLevel(groupBy, [data0, 'level_1']);
                        result = data1;
                    }
                    if (dataRaw[0].level_2 && data1 && data1.length) {
                        data2 = groupByLevelAdvance(data1, 'level_2');
                        result = data2;
                    }
                    if (dataRaw[0].level_3 && data2 && data2.length) {
                        data3 = groupByLevel(groupByLevelAdvance, [data2, 'level_3']);
                        result = data3;
                    }
                }
            }
            return {data: result, type: 'level'};
        }
	} else {
        return data;
    }
}
