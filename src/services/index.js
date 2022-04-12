import {KIEN_THUC_TOAN, KHOI_LOP, LOAI_HINH_HOC, CHUYEN_DE, NHOM_KIEN_THUC, returnURIByType, NOI_DUNG} from '../const';

export * from './homeService';
export * from './categoryService';

export function getUrls() {
	return {
		chuyenDeTheoKhoiLop: 'select * where { ?nkt a my:Chuyen_De. ?kl a my:Khoi_Lop. ?lhh a my:Loai_Hinh_Hoc. ?nkt my:ten ?chuyen_de. ?kl my:ten ?khoi_lop. ?lhh my:ten ?loai_hinh_hoc. ?nkt my:khoi_lop ?kl. ?nkt my:loai_hinh_hoc ?lhh. }',
		tinhNang: 'select * where { ?tn a my:Tinh_Nang. ?tn my:hinh_anh ?hinh_anh. ?tn my:tieu_de ?tieu_de. ?tn my:noi_dung ?noi_dung. }',
		cauHoiGoiY: 'select * where { ?ktt a my:Kien_Thuc_Toan. ?ktt my:dinh_nghia ?dinh_nghia. ?ktt my:cau_hoi_goi_y ?cau_hoi_goi_y. }',
	};
}

export function getKeywordUrls() {
	return {
		tuKhoa: 'select * where { ?id my:tu_khoa ?tu_khoa. }',
		cauHoiGoiY: 'select * where { ?id my:cau_hoi_goi_y ?tu_khoa. }'
	}
}

export function getResultFinding(uri) {
	if (uri) {
		const uriObj = returnURIByType(uri);
		switch (uriObj.type) {
			case KIEN_THUC_TOAN:
				return 'select distinct * where { ?knowledge a my:Kien_Thuc_Toan. ?knowledge ?property ?obj . FILTER (?knowledge = <' + uriObj.uri + '>) }';
			case CHUYEN_DE:
				return 'select distinct * where { ?level_uri_0 a my:Chuyen_De. ?level_uri_1 a my:Nhom_Kien_Thuc. ?level_uri_2 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_1 my:chuyen_de ?level_uri_0. ?level_uri_2 my:nhom_kien_thuc ?level_uri_1. FILTER (?level_uri_0 = <' + uriObj.uri + '>) }';
			case KHOI_LOP:
				return 'select distinct * where { ?level_uri_0 a my:Khoi_Lop. ?level_uri_1 a my:Chuyen_De. ?level_uri_2 a my:Nhom_Kien_Thuc. ?level_uri_3 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_3 my:ten ?level_3. ?level_uri_1 my:khoi_lop ?level_uri_0. ?level_uri_2 my:chuyen_de ?level_uri_1. ?level_uri_3 my:nhom_kien_thuc ?level_uri_2. FILTER (?level_uri_0 = <' + uriObj.uri + '>) }';
			case LOAI_HINH_HOC:
				return 'select distinct * where { ?level_uri_0 a my:Loai_Hinh_Hoc. ?level_uri_1 a my:Chuyen_De. ?level_uri_2 a my:Nhom_Kien_Thuc. ?level_uri_3 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_3 my:ten ?level_3. ?level_uri_1 my:loai_hinh_hoc ?level_uri_0. ?level_uri_2 my:chuyen_de ?level_uri_1. ?level_uri_3 my:nhom_kien_thuc ?level_uri_2. FILTER (?level_uri_0 = <' + uriObj.uri + '>) }';
			case NHOM_KIEN_THUC:
				return 'select distinct * where { ?knowledge a my:Kien_Thuc_Toan. ?knowledgeGroup a my:Nhom_Kien_Thuc. ?knowledge ?property ?obj. ?knowledge my:nhom_kien_thuc ?knowledgeGroup. FILTER (?knowledgeGroup = <' + uriObj.uri  + '>) }';
			case NOI_DUNG:
				return 'select distinct * where { ?level_uri_0 a my:Khoi_Lop. ?level_uri_1 a my:Chuyen_De. ?level_uri_2 a my:Nhom_Kien_Thuc. ?level_uri_3 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_3 my:ten ?level_3. ?level_uri_1 my:khoi_lop ?level_uri_0. ?level_uri_2 my:chuyen_de ?level_uri_1. ?level_uri_3 my:nhom_kien_thuc ?level_uri_2.}';
			default:
				return 'select distinct * where { ?level_uri_0 a my:Khoi_Lop. ?level_uri_1 a my:Chuyen_De. ?level_uri_2 a my:Nhom_Kien_Thuc. ?level_uri_3 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_3 my:ten ?level_3. ?level_uri_1 my:khoi_lop ?level_uri_0. ?level_uri_2 my:chuyen_de ?level_uri_1. ?level_uri_3 my:nhom_kien_thuc ?level_uri_2. }';
		}
	}
	return uri;
}

export function returnSparqlUrl(query) {
	const HOT_URL = 'http://192.168.1.129:3030/Math/sparql?query=';
	const prefix = {
		RDF: 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>',
		myPREFIX: 'prefix my: <http://www.owl-ontologies.com/kienthuchinhhoc.owl#>',
	}
	return HOT_URL + encodeURIComponent(prefix.RDF + prefix.myPREFIX + query);
}
