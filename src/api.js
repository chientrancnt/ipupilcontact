import axios from 'axios';

const apiUrl = 'http://tapi.lhbs.vn/solienlac';
const api = {
    login: (data) => axios.post('http://auth.lhbs.vn/out/token', { username: data.username, password: data.password }).then(res => res.data),
   /* getStudents: () => axios.get(`${apiUrl}/students`).then(res => res.data).catch(error => {
        if (error.response.status === 401) {
            localStorage.clear();
            window.location = "/login";
        }
    }),
    getStudentId: (studentId) => axios.get(`${apiUrl}/students/${studentId}`).then(res => res.data),
    getMark: (studentId) => axios.get(`${apiUrl}/students/${studentId}/mark`).then(res => res.data),*/
    getListStudent: (lopID) => axios.get(`${apiUrl}/auth/GiaoVien_DanhSachHocSinhLop/${lopID}`).then(res => res.data),
    getListClass: (meID) => axios.get(`${apiUrl}/auth/GiaoVien_DanhSachLopChuNhiem/${meID}`).then(res => res.data),
    getStudentInfo: (studentId) => axios.get(`${apiUrl}/auth/GiaoVien_LayThongTinHocSinh/${studentId}`).then(res => res.data),
    getStudentOrder: (studentId) => axios.get(`${apiUrl}/auth/GiaoVien_ThongTinNeNepHocSinh/${studentId}`).then(res => res.data),
    getMarkStudent: (studentId) => axios.get(`${apiUrl}/auth/GiaoVien_LayBangDiemHocSinh/${studentId}`).then(res => res.data),
    getTemplateComment: (meID, studentID) => axios.get(`${apiUrl}/auth/GiaoVien_LayNhanXetMau/${meID}/${studentID}`).then(res => res.data),

    getListKhoi: () => axios.get(`${apiUrl}/auth/NhanVien_DanhSachKhoi/`).then(res => res.data),
    getListClassByKhoi: (khoiID) => axios.get(`${apiUrl}/auth/NhanVien_DanhSachLopByKhoi/${khoiID}`).then(res => res.data),
    getListComment: (lopID, nam, thang) => axios.get(`${apiUrl}/auth/NhanVien_GetNhanXetByLop/${lopID}/${nam}/${thang}`).then(res => res.data),
    getReportComment: (nam, thang) => axios.get(`${apiUrl}/auth/NhanVien_Report_ThongKeSoLuongNhanXet/${nam}/${thang}`).then(res => res.data),
    
    insertNhanXet: (data) => axios.post(`${apiUrl}/GiaoVien_InsertNhanXet/`, { HocSinhID: data.HocSinhID, Contents: data.Contents, Nam: data.Nam, Thang: data.Thang }).then(res => res.data).catch(er=>{console.log(er.response)}),
    updateDuyetNhanXet: (data) => axios.post(`${apiUrl}/NhanVien_DuyetNhanXet/`, { HocSinhID: data.HocSinhID,  Nam: data.Nam, Thang: data.Thang }).then(res => res.data).catch(er=>{console.log(er.response)})
}

export default api;

