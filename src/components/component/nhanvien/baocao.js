import React from 'react';
import api from '../../../api';

class baocao extends React.Component {
    constructor(props) {
        super(props);

        this.select = this.select.bind(this);
        this.state = {
            listsKhoi: [],
            listsLop: [],
            reportCommentOld: [],
            reportComment: [],
            khoiID: null,
            lopID: null,
            isDisableButton: false,
            value: "Loại báo cáo",
            idBaoCao: 0
        }

    }

    componentDidMount() {
        //const meID = 'NV0000108';
        api.getListKhoi().then(res => {
            this.setState(prevState => {
                this.showClass(res[0].KhoiID)
                return { listsKhoi: res }
            })
        });
    }


    select(event) {
        this.setState({
            value: event.target.innerText
        });
        this.showReportComment(2018, 4);
    }

    changeStateBaoCao() {
        this.setState({
            tenBaocao: "Loại báo cáo"
        })
    }
    showClass = (khoiID) => {
        api.getListClassByKhoi(khoiID).then(res => {
            this.setState(prevState => {
                this.showReportComment(2018, 4);
                return { listsLop: res };
            })
        })
    }
    showReportComment = (nam, thang) => {

        api.getReportComment(nam, thang).then(res => {

            this.setState(prevState => {
                if (this.state.idBaoCao === 1) {
                    return { reportComment: res[1], reportCommentOld: res[1] };
                }
                else {
                    return { reportComment: res[0], reportCommentOld: res[0] };
                }

            });
        })

    }
    fillterTable(e) {
        let value = e.target.value;
        console.log(value);
        this.setState(prevState => {
            let reportComment = prevState.reportCommentOld.filter(item => item.KhoiID === parseInt(value));
            return { reportComment };
        });

    }

    render() {
        let { reportComment } = this.state

        return (
            <div className="container">


                <div className="row justify-content-md-center">
                    <div className="col col-10 col-lg-10">
                        <table className="table table-sm">
                            <thead>
                                <tr className="mdb-color #01579b light-blue darken-4">
                                    <th className="text-white text-center font-weight-bold text-monospace">BÁO CÁO VỀ NHẬN XÉT TÌNH HÌNH HỌC TẬP TRONG THÁNG</th>
                                </tr>

                            </thead>

                        </table>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col col-10 col-lg-10">
                        <div className="row text-center">
                            <div className="col col-lg-12">
                                <div className="btn-group select-menu-outer mx-sm-3 mb-3" style={{ zIndex: 1000 }}>
                                    <button type="button" className="btn bt-md mdb-color #01579b light-blue darken-4 dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="far fa-edit mr-2"></i>{this.state.value}
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" onClick={(e) => {
                                            this.setState({ idBaoCao: 1 });
                                            this.select(e);
                                        }}><i className="far fa-file-alt mr-2"></i>Báo cáo chung</a>
                                        <a className="dropdown-item" onClick={(e) => {
                                            this.setState({ idBaoCao: 2 });
                                            this.select(e);
                                        }}><i className="fab fa-wpforms mr-2"></i>Chi tiết theo khối</a>
                                        <a className="dropdown-item" onClick={(e) => {
                                            this.setState({ idBaoCao: 3 });
                                            this.select(e);
                                        }}><i className="fas fa-file-alt mr-2"></i>Chi tiết theo lớp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12  col-lg-6 ">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Tháng</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01" onChange={(e) => {
                                        this.showReportComment(2018, e.target.value);
                                    }}>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                        <option value="1">6</option>
                                        <option value="1">7</option>
                                        <option value="1">8</option>
                                        <option value="1">9</option>
                                        <option value="1">10</option>
                                        <option value="1">11</option>
                                        <option value="1">12</option>
                                    </select>
                                </div>


                            </div>
                            <div className="col col-12  col-lg-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect02">Khối</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect02" disabled={this.state.idBaoCao !== 2} onChange={(e) => { this.fillterTable(e) }}>
                                        {
                                            this.state.listsKhoi.map(function (name, index) {
                                                return <option value={name.KhoiID} key={`vn_${name.KhoiID}`}>{name.TenKhoi}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className="row justify-content-md-center">
                    <div className="col col-10 col-lg-10">

                        <table className="table table-sm table-striped table-hover table-bordered">
                            <thead className="mdb-color #01579b light-blue darken-4">
                                {
                                    this.state.idBaoCao === 1 ? (
                                        <tr className="text-white text-center font-weight-bold">
                                            <th width="50px">STT</th>
                                            <th width="200px">Khối</th>
                                            <th width="150px">Số lượng</th>
                                            <th width="150px">Đã nhận xét</th>
                                            <th width="150px">Chưa nhận xét</th>
                                            <th width="150px">Tỷ lệ</th>
                                        </tr>
                                    ) : (
                                            <tr className="text-white text-center font-weight-bold">
                                                <th width="50px">STT</th>
                                                <th width="200px">Lớp</th>
                                                <th width="150px">Số lượng</th>
                                                <th width="150px">Đã nhận xét</th>
                                                <th width="150px">Chưa nhận xét</th>
                                                <th width="150px">Tỷ lệ</th>
                                            </tr>
                                        )
                                }
                            </thead>
                            <tbody>
                                {
                                    this.state.idBaoCao === 1 ? (
                                        reportComment.map((row, index) => (
                                            <tr key={`nx_${row.STT}`}>
                                                <td className="text-center" scope="row">{index + 1}</td>
                                                <td className="text-left">{row.TenKhoi}</td>
                                                <td className="text-right">{row.SoLuongHocSinh}</td>
                                                <td className="text-right">{row.SoLuongDaNhanXet}</td>
                                                <td className="text-right">{row.SoLuongChuaNhanXet}</td>
                                                <td className="text-right">{row.SoLuongDaNhanXet}/{row.SoLuongHocSinh}</td>
                                            </tr>
                                        ))
                                    )
                                        : (this.state.idBaoCao === 2 ? (
                                            reportComment.map((row, index) => (
                                                <tr key={`nx_${row.STT}`}>
                                                    <td className="text-center" scope="row">{index + 1}</td>
                                                    <td className="text-left">{row.Lop}</td>
                                                    <td className="text-right">{row.SoLuongHocSinh}</td>
                                                    <td className="text-right">{row.SoLuongDaNhanXet}</td>
                                                    <td className="text-right">{row.SoLuongChuaNhanXet}</td>
                                                    <td className="text-right">{row.SoLuongDaNhanXet}/{row.SoLuongHocSinh}</td>
                                                </tr>
                                            ))
                                        )
                                            : (
                                                reportComment.map((row, index) => (
                                                    <tr key={`nx_${row.STT}`}>
                                                        <td className="text-center" scope="row">{index + 1}</td>
                                                        <td className="text-left">{row.Lop}</td>
                                                        <td className="text-right">{row.SoLuongHocSinh}</td>
                                                        <td className="text-right">{row.SoLuongDaNhanXet}</td>
                                                        <td className="text-right">{row.SoLuongChuaNhanXet}</td>
                                                        <td className="text-right">{ row.SoLuongDaNhanXet}/{row.SoLuongHocSinh}</td>
                                                    </tr>
                                                ))
                                            ))
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
               
                <div className="ui clearing divider"></div>
            </div>
        )
    }
}

export default baocao;

