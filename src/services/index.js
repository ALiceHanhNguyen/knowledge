export * from './homeService';
export * from './categoryService';

export function getUrls() {
	return {
		staticData: 'SELECT DISTINCT * WHERE { {SELECT * WHERE { ?chude a my1:ChuDe; my1:ten ?ten; my1:noi_dung_mo_ta ?ndmt; my1:tac_gia_mo_ta ?tgmt; my1:tieu_de ?tieude; my1:noi_dung ?noidung. }} UNION {SELECT * WHERE { ?tinhnang a my1:TinhNang; my1:ten ?ten; my1:noi_dung_mo_ta ?ndmt; my1:tac_gia_mo_ta ?tgmt; my1:tieu_de ?tieude; my1:noi_dung ?noidung;my1:url_img ?url_image. }} UNION {SELECT * WHERE { ?cauhoi a my1:LT_KhoiDaDien; my1:ly_thuyet ?noidung; my1:cau_hoi_mau ?tieude. } LIMIT 6 } }',
		phepDoiHinh: 'SELECT DISTINCT * WHERE {?chude a my1:LT_KhoiDaDien; my1:ly_thuyet ?lythuyet; my1:tieu_de ?tieude.}',
		chuyenDeTheoKhoiLop: 'select * where { ?nkt a my:Nhom_Kien_Thuc. ?kl a my:Khoi_Lop. ?lhh a my:Loai_Hinh_Hoc. ?nkt my:ten ?nhom_kien_thuc. ?kl my:ten ?khoi_lop. ?lhh my:ten ?loai_hinh_hoc. ?nkt my:khoi_lop ?kl. ?nkt my:loai_kien_thuc ?lhh. }',
		tinhNang: 'select * where { ?tn a my:Tinh_Nang. ?tn my:hinh_anh ?hinh_anh. ?tn my:tieu_de ?tieu_de. ?tn my:nguoi_khoi_tao ?nguoi_khoi_tao. ?tn my:noi_dung ?noi_dung. }',
		cauHoiGoiY: 'select * where { ?ktt a my:Kien_Thuc_Toan. ?ktt my:dinh_nghia ?dinh_nghia. ?ktt my:cau_hoi_goi_y ?cau_hoi_goi_y. }',
	};
}
export function returnSparqlUrl(query) {
	const HOT_URL = 'http://localhost:3030/Math/sparql?query=';
	const prefix = {
		RDF: 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>',
		my1PREFIX: 'prefix my1: <http://www.semanticweb.org/hnguye36/ontologies/2020/5/MathKnowledge#>',
		myPREFIX: 'prefix my: <http://www.owl-ontologies.com/kienthuchinhhoc.owl#>',
	}
	return HOT_URL + encodeURIComponent(prefix.RDF + prefix.my1PREFIX + prefix.myPREFIX + query);
}
