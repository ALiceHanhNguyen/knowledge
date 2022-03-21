export const featureModel = data => {
	if (data.length > 0) {
		return data.map(item => {
            return {
                hinh_anh: item.hinh_anh ? item.hinh_anh.value : '',
                noi_dung: item.noi_dung ? item.noi_dung.value : '',
                tieu_de: item.tieu_de ? item.tieu_de.value : '',
                nguoi_khoi_tao_uri: item.nguoi_khoi_tao ? item.nguoi_khoi_tao.value : '',
                tinh_nang_uri: item.tn ? item.tn.value : ''
            };
		});
	} else {
        return data;
    }
}
