/**--------Bài 1: Quản lý tuyển sinh--------
 * input : điểm 3 môn, điểm chuẩn, khu vực, đối tượng
 * xử lý:
 * + Tạo biến diemMon1 lấy value
 * + Tạo biến diemMon2 lấy value
 * + Tạo biến diemMon3 lấy value
 * + Tạo biến chonKhuVuc lấy value
 * + Tạo biến chonDoiTuong lấy value
 * + Tạo biến tongDiem = 0;
 * + Tổng điểm = diemMon1 + diemMon2 + diemMon3 + điểm ưu tiên
 * output:
 * + Kết quả đậu rớt, tổng điểm
 */

function tinhDiemTongKet(id1, id2, id3, id4, id5) {
    var diemMon1 = +document.getElementById(id1).value;
    var diemMon2 = +document.getElementById(id2).value;
    var diemMon3 = +document.getElementById(id3).value;
    var chonKhuVuc = document.getElementById(id4).value;
    var chonDoiTuong = document.getElementById(id5).value;
    var tongDiem = 0;
    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    switch (chonKhuVuc) {
        case 'A': {
            diemKhuVuc = 2
        }; break
        case 'B': {
            diemKhuVuc = 1
        }; break
        case 'C': {
            diemKhuVuc = 0.5
        }; break
        default: {
            diemKhuVuc = 0;
        };
    }
    switch (chonDoiTuong) {
        case 'd1': {
            diemDoiTuong = 2.5
        }; break
        case 'd2': {
            diemDoiTuong = 1.5
        }; break
        case 'd3': {
            diemDoiTuong = 1
        }; break
        default: {
            diemDoiTuong = 0;
        };
    }
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        tongDiem = 0;
    } else if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong
    } else {
        tongDiem = 'Vui lòng nhập số điểm lớn hơn 0!'
    }
    return tongDiem;
}

document.getElementById('tinhKetQua').onclick = function () {
    var ketQua_b1 = '';
    var diemChuan = +document.getElementById('diemChuan').value;
    var ketQua = tinhDiemTongKet('diemMon1', 'diemMon2', 'diemMon3', 'chonKhuVuc', 'chonDoiTuong')
    if (ketQua === 0) {
        ketQua_b1 = 'Bạn đã rớt. Do có điểm bằng 0';
    } else if (ketQua > 0 && ketQua >= diemChuan) {
        ketQua_b1 = 'Bạn đã đậu. Tổng điểm: ' + ketQua;
    } else if (ketQua > 0 && ketQua < diemChuan) {
        ketQua_b1 = 'Bạn đã rớt. Tổng điểm: ' + ketQua
    } else {
        ketQua_b1 = 'Vui lòng nhập số điểm lớn hơn 0!';
    }
    document.getElementById('ketQua_b1').innerHTML = ketQua_b1;
}

/**------Bài 2: Tính tiền điện-------
 * input: Số kw, tiền/kw
 * process:
 * + Tạo biến nhapKW lấy value (number)
 * + Tạo biến 
 * + Tính số tiền phải trả theo từng mốc kw tương ứng số tiền
 * output:
 * + Tên người nhập
 * + Số tiền phải trả
 */

function tongSoTienDien(id) {
    var nhapKW = +document.getElementById(id).value;
    var tienDien = 0;
    if (nhapKW > 0 && nhapKW <= 50) {
        tienDien = nhapKW * 500
    } else if (nhapKW >= 51 && nhapKW <= 100) {
        tienDien = 50 * 500 + (nhapKW - 50) * 650
    } else if (nhapKW >= 101 && nhapKW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (nhapKW - 100) * 850
    } else if (nhapKW >= 201 && nhapKW <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (nhapKW - 200) * 1100
    } else if (nhapKW >= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (nhapKW - 350) * 1300
    } else {
        tienDien = 'Số Kw không hợp lệ!'
    }
    return tienDien;
}
document.getElementById('tinhTienDien').onclick = function () {
    var ketQua2 = tongSoTienDien('nhapKW');
    var nhapTen = document.getElementById('nhapTen').value;
    ketQua2 = 'Họ tên: ' + nhapTen +' ; Tiền điện: ' + ketQua2.toLocaleString();
    document.getElementById('ketQua_b2').innerHTML = ketQua2;
}

