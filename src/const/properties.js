import {KIEN_THUC_TOAN, KHOI_LOP, LOAI_HINH_HOC, CHUYEN_DE, NHOM_KIEN_THUC, NOI_DUNG} from './action';

export const global = {
    'nomatch.banner.text.first': 'Cách dễ dàng để truy vấn kiến thức trong thế giới toán học THPT ',
    'nomatch.banner.text.second': 'Đơn giản và nhanh chóng',
    'nomatch.no.found.page': 'Trang không tìm thấy',
    'nomatch.recomment': 'Hãy thử tìm kiếm với một câu hỏi khác!',
    'header.logo.name': 'Trường Đại học Công nghệ Thông tin',
    'header.logo.link': 'https://www.uit.edu.vn/',
    'header.admin.title': 'Quản lý dữ liệu',
    'header.user.home': 'Trang chủ',
    'header.user.class10': 'Lớp 10',
    'header.user.class11': 'Lớp 11',
    'header.user.class12': 'Lớp 12',
    'header.user.question': 'Câu hỏi tổng hợp',
    'footer.linkedin': 'https://www.linkedin.com/in/hanh-nguyen-9b164015b/',
    'footer.gmail': 'https://gmail.com/',
    'footer.facebook': 'https://www.facebook.com/alicehanhnguyen/',
    'footer.copyright': 'Copyright 2020 by Hanh Nguyen. All rights reserved'
};

export const user = {
    'readmore': 'Đọc thêm',
    'discovery': 'Tìm kiếm',
    'search.title': 'Nhập những gì bạn muốn biết về...',
    'object.per.year': ' chuyên đề / lớp',
    'frequently.questions': 'Các câu hỏi thường gặp',
    'object.title': 'Những chuyên đề bạn cần quan tâm',
    'feature.title': 'Những ưu điểm vượt bật của hệ thống',
    'result': 'Kết quả tìm kiếm'
};

export const knowledgeAttrs = [
    {title: 'dinh_nghia', name: 'Định nghĩa'},
    {title: 'noi_dung', name: 'Nội dung'},
    {title: 'vi_du', name: 'Ví dụ'},
    {title: 'chung_minh', name: 'Chứng minh'},
    {title: 'tinh_chat', name: 'Tính chất'},
    {title: 'dinh_ly', name: 'Định lý'},
    {title: 'cong_thuc', name: 'Công thức'},
    {title: 'chu_y', name: 'Chú ý'},
];

export const keyURIType = {
    chuyende: '#chuyende_',
    khoilop: '#khoi_lop',
    nhomkienthuc: '#nhomkienthuc_',
    kienthuc: '#kienthuc_',
    hinhhoc: '#hinhhoc_',
    noidung: '#noidung_'
}

export const validateInput = /[`!@#$%^&*()_+\-=[\]{}'"\\|<>/~]/;

// ****************Functions*******************

export const removeAccents = (str) => {
    return str.toLowerCase()
        .replace(/ +(?= )/g,'')
        .replace(/^\s+|\s+$/gm,'');
}

export const returnURIByType = (uri) => {
    if (uri) {
        if (uri.indexOf(keyURIType.chuyende) !== -1) { return {uri: uri, type: CHUYEN_DE} }
        else if (uri.indexOf(keyURIType.khoilop) !== -1) { return {uri: uri, type: KHOI_LOP} }
        else if (uri.indexOf(keyURIType.nhomkienthuc) !== -1) { return {uri: uri, type: NHOM_KIEN_THUC} }
        else if (uri.indexOf(keyURIType.kienthuc) !== -1) { return {uri: uri, type: KIEN_THUC_TOAN} }
        else if (uri.indexOf(keyURIType.hinhhoc) !== -1) { return {uri: uri, type: LOAI_HINH_HOC} }
        else {return {uri: uri, type: NOI_DUNG}};
    }
    return null;
}

export const convertURIToPhrase = (uri, phrases) => {
    let phrase = '';
    const index = (phrases || []).findIndex(i => i.uri === uri);
    phrase = index !== -1 ? phrases[index].name : phrase;
    return phrase;
}

export const groupQuestionByURI = data => {
	if (data.length > 0) {
        let result = [];
		data.map(item => {
            const index = result.findIndex(i => i.uri === item.uri);
            if (index !== -1) {
                result[index].ds_tu_khoa.push(item);
            } else {
                result.push({
                    name: item.name,
                    uri: item.uri,
                    ds_tu_khoa: new Array(item)
                });
            }
            return item;
		});
        return result;
    }
    return data;
}