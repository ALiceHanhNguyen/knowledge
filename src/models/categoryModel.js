const categoryModel = data => {
	if (data.length > 0) {;
		return data.map(item => {
            return {
                khoi_lop: item.khoi_lop ? item.khoi_lop : null,
                loai_hinh_hoc: item.loai_hinh_hoc ? item.loai_hinh_hoc : null,
                chuyen_de: item.nhom_kien_thuc ? item.nhom_kien_thuc : null,
                khoi_lop_uri: item.kl ? item.kl : null,
                loai_hinh_hoc_uri: item.lhh ? item.lhh : null,
                chuyen_de_uri: item.nkt ? item.nkt : null
            };
		});
	} else {
        return data;
    }
}
const groupCategoryByGrade = data => {
    if (data.length > 0) {
        let result = [];
		data.map(item => {
            const index = result.findIndex(i => i.khoi_lop_uri.value === item.khoi_lop_uri.value);
            if (index !== -1) {
                result[index].nhom_chuyen_de.push(item);
            } else {
                result.push({
                    khoi_lop: item.khoi_lop,
                    khoi_lop_uri: item.khoi_lop_uri,
                    nhom_chuyen_de: new Array(item)
                });
            }
            return item;
		});
        return result;
    }
    return data;
}
const groupCategoryByType = data => {
    if (data.length > 0) {
        let result = [];
		data.map(item => {
            const index = result.findIndex(i => i.loai_hinh_hoc_uri.value === item.loai_hinh_hoc_uri.value);
            if (index !== -1) {
                result[index].nhom_loai_hinh_hoc.push(item);
            } else {
                result.push({
                    loai_hinh_hoc: item.loai_hinh_hoc,
                    loai_hinh_hoc_uri: item.loai_hinh_hoc_uri,
                    nhom_loai_hinh_hoc: new Array(item)
                });
            }
            return data;
		});
        return result;
    }
    return data;
}
export {categoryModel, groupCategoryByGrade, groupCategoryByType}