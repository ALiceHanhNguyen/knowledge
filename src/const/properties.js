import {KIEN_THUC_TOAN, KHOI_LOP, LOAI_HINH_HOC, CHUYEN_DE, NHOM_KIEN_THUC} from './action';

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
    'discovery': 'Khám phá',
    'search.title': 'Nhập những gì bạn muốn biết về...',
    'object.per.year': ' chuyên đề/ năm',
    'frequently.questions': 'Các câu hỏi thường gặp',
    'object.title': 'Những chuyên đề bạn cần quan tâm',
    'feature.title': 'Những ưu điểm vượt bật của hệ thống',
    'result': 'Kết quả tìm kiếm'
};

export const knowledgeAttrs = [
    {title: 'dinh_nghia', name: 'Định nghĩa'},
    {title: 'vi_du', name: 'Ví dụ'},
    {title: 'noi_dung', name: 'Nội dung'},
    {title: 'chung_minh', name: 'Chứng minh'},
    {title: 'tinh_chat', name: 'Tính chất'},
    {title: 'dinh_ly', name: 'Định lý'},
    {title: 'cong_thuc', name: 'Công thức'},
    {title: 'chu_y', name: 'Chú ý'},
];

export const validateInput = /[`!@#$%^&*()_+\-=[\]{}'"\\|<>/~]/;

// ****************Functions*******************

export const removeAccents = (str) => {
    return str.toLowerCase().normalize('NFD')
        .replace(/ +(?= )/g,'')
        .replace(/^\s+|\s+$/gm,'')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

export const returnURIByType = (uri) => {
    if (uri) {
        if (uri.indexOf('chuyende_') !== -1) { return {uri: uri, type: CHUYEN_DE} };
        if (uri.indexOf('khoi_lop') !== -1) { return {uri: uri, type: KHOI_LOP} }
        if (uri.indexOf('kienthuc_') !== -1) { return {uri: uri, type: KIEN_THUC_TOAN} }
        if (uri.indexOf('hinhhoc_') !== -1) { return {uri: uri, type: LOAI_HINH_HOC} }
        if (uri.indexOf('nhomkienthuc_') !== -1) { return {uri: uri, type: NHOM_KIEN_THUC} }
    }
    return null;
}

export const convertURIToPhrase = (uri, phrases) => {
    let phrase = '';
    const index = (phrases || []).findIndex(i => i.uri === uri);
    phrase = index !== -1 ? phrases[index].name : phrase;
    return phrase;
}