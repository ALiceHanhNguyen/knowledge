export const convertData = rawData => {
	let result = {};
	if (rawData) {
        const { ktt, chu_y, noi_dung, nguoi_khoi_tao,
            chung_minh, ten, ds_cau_hoi_goi_y,
            cong_thuc, tinh_chat, dinh_ly, vi_du,
            ds_tu_khoa, dinh_nghia, chu_de } = rawData;
        result = {
            chu_y: chu_y ? chu_y.value : '',
            noi_dung: noi_dung ? noi_dung.value : '',
            chung_minh: chung_minh ? chung_minh.value : '',
            ten: ten ? ten.value : '',
            cong_thuc: cong_thuc ? cong_thuc.value : '',
            tinh_chat: tinh_chat ? tinh_chat.value : '',
            dinh_ly: dinh_ly ? dinh_ly.value : '',
            vi_du: vi_du ? vi_du.value : '',
            dinh_nghia: dinh_nghia ? dinh_nghia.value : '',
            nguoi_khoi_tao_uri: nguoi_khoi_tao ? nguoi_khoi_tao.value : '',
            chu_de_uri: chu_de ? chu_de.value : '',
            kien_thuc_toan_uri: ktt ? ktt.value : '',
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
            const cau_hoi_goi_y = item.cau_hoi_goi_y ? item.cau_hoi_goi_y.value : '';
            const tu_khoa = item.tu_khoa ? item.tu_khoa.value : '';
            const ktt = item.ktt ? item.ktt.value : '';

            const index = result.findIndex(i => i.kien_thuc_toan_uri === ktt);
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
            return item;
		});
        return result;
	} else {
        return data;
    }
}
