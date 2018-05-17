import React from 'react';
import api from '../../../api';
import HocSinh from '../hocsinh/hocsinh';
import HocSinhBangDiem from '../hocsinh/hocsinhbangdiem';
import HocSinhNeNep from '../hocsinh/hocsinhnenep';


class nhanxet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marks: [],
            student: [],
            stuNeNep: [],
            idNhanXet: "1"
        }
    }

    sendComment = () => {
        //api.insertNhanXet({ HocSinhID: this.props.match.params, Contents: this.state.txtNoiDung, Nam: 2018, Thang: 4 });
        //this.setState({ txtNoiDung: "" });
        window.location.assign(`/${this.props.match.params.lopID}`);
    }
    getNhanXetmau(value) {
        const meID = 'NV0000108';
        var { hocsinhID } = this.props.match.params;

        if (value === 1) {
            hocsinhID = 0;
        }
        api.getTemplateComment(meID, hocsinhID).then(res => {
            this.setState({ txtNoiDung: res[0].NhanXet });
        });

    }
    render() {
        const { lopID } = this.props.match.params;
        return (

            <div className="container py-5" >
                <div className="row justify-content-md-center">
                    <div className="col col-10 col-lg-10">
                        <table className="table table-sm">
                            <thead>
                                <tr className="mdb-color #01579b light-blue darken-4">
                                    <th className="text-white text-center font-weight-bold text-monospace">DANH SÁCH HỌC SINH</th>
                                </tr>

                            </thead>

                        </table>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-3">

                        <HocSinh hocsinhID={this.props.match.params} />
                    </div>

                    <div className="col col-lg-7">
                        <HocSinhNeNep hocsinhID={this.props.match.params} />
                    </div>

                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-10">
                        <HocSinhBangDiem hocsinhID={this.props.match.params} />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-10 col-lg-10">
                        <table className="table table-sm">
                            <thead>
                                <tr className="mdb-color #01579b light-blue darken-4">
                                    <th className=" col-9 text-white text-center align-middle font-weight-bold text-monospace">Nhận xét kết quả học tập</th>
                                    <th className="col-3">
                                        <div className="btn-group btn-sm  px-1 select-menu-outer">
                                            <button type="button" className="btn btn-sm px-1 text-center mdb-color #01579b light-blue  dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="far fa-edit mr-2"></i>
                                            </button>
                                            <div className="dropdown-menu" ref="xxx">
                                                <a className="dropdown-item" value="1" onClick={(e) => {
                                                    this.setState({ txtNoiDung: "" })
                                                }}><i className="far fa-file-alt mr-2"></i>Nhận xét mới</a>
                                                <a className="dropdown-item" onClick={(e) => {
                                                    this.getNhanXetmau(1);
                                                }}><i className="fab fa-wpforms mr-2"></i>Nhận xét mẫu</a>
                                                <a className="dropdown-item" value="3" onClick={(e) => {
                                                    this.getNhanXetmau(2);
                                                }}><i className="fas fa-file-alt mr-2"></i>Nhận xét tháng trước</a>

                                            </div>
                                        </div>
                                    </th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <th colSpan="2">
                                        <div className="form text-center">
                                            <div className="form-group">
                                                <textarea className="form-control" rows="3" value={this.state.txtNoiDung} onChange={(e) => {
                                                    this.setState({ txtNoiDung: e.target.value })
                                                }}></textarea>
                                            </div>
                                            <div className="btn btn-md mdb-color #01579b light-blue darken-4" onClick={this.sendComment}>
                                                <i className="far fa-plus-square mr-2"></i>Gửi nhận xét
                                                    </div>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
export default nhanxet;

