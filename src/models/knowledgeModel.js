const convertData = rawData => {
	let result = {};
	if (rawData) {
        const { ktt, chu_y, noi_dung, nguoi_khoi_tao, chung_minh, tieu_de, ds_cau_hoi_goi_y, cong_thuc, tinh_chat, dinh_ly, vi_du, ds_tu_khoa, dinh_nghia, chu_de, ngay_khoi_tao } = rawData;
        result = {
            chu_y, noi_dung, chung_minh, tieu_de,
            cong_thuc, tinh_chat, dinh_ly, vi_du,
            dinh_nghia, ngay_khoi_tao,
            nguoi_khoi_tao_uri: nguoi_khoi_tao,
            chu_de_uri: chu_de,
            kien_thuc_toan_uri: ktt,
            ds_cau_hoi_goi_y, ds_tu_khoa
        }
    }
    return result;
};
export const knowledgeModel = data => {
	if (data.length > 0) {
        let result = [];
		data.map(item => {
            item.ds_cau_hoi_goi_y = [];
            item.ds_tu_khoa = [];
            const { cau_hoi_goi_y, tu_khoa, ktt } = item;
            const index = result.findIndex(i => i.kien_thuc_toan_uri.value === ktt.value);
            if (index !== -1) {
                if (cau_hoi_goi_y) {
                    result[index].ds_cau_hoi_goi_y.push(cau_hoi_goi_y);
                }
                if (tu_khoa) {
                    result[index].tu_khoa.push(tu_khoa);
                }
            } else {
                if (cau_hoi_goi_y) {
                    item.ds_cau_hoi_goi_y.push(cau_hoi_goi_y);
                }
                if (tu_khoa) {
                    item.ds_tu_khoa.push(tu_khoa);
                }
                result.push(convertData(item));
            }
            return data;
		});
        return result;
	} else {
        return data;
    }
}
