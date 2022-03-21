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
    'feature.title': 'Những ưu điểm vượt bật của hệ thống'
};

export const validateInput = /[`!@#$%^&*()_+\-=[\]{}'"\\|<>/~]/;

// ****************Functions*******************

export const removeAccents = (str) => {
    return str.toLowerCase().normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}