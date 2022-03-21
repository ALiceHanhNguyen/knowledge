export const featureModel = data => {
	if (data.length > 0) {
		return data.map(item => {
            return {
                hinh_anh: item.hinh_anh ? item.hinh_anh : null,
                noi_dung: item.noi_dung ? item.noi_dung : null,
                tieu_de: item.tieu_de ? item.tieu_de : null,
                nguoi_khoi_tao_uri: item.nguoi_khoi_tao ? item.nguoi_khoi_tao : null,
                tinh_nang_uri: item.tn ? item.tn : null
            };
		});
	} else {
        return data;
    }
}
