import React from 'react';
import api from '../../../api';

class duyetnhanxet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listsKhoi: [],
            listsLop: [],
            listComment: [],
            khoiID: null,
            lopID: null,
            isDisableButton: false
        }

    }

    componentDidMount() {
        api.getListKhoi().then(res => {
            this.setState(prevState => {
                this.showClass(res[0].KhoiID)
                return { listsKhoi: res }
            })
        });
    }
    showClass = (khoiID) => {

        api.getListClassByKhoi(khoiID).then(res => {
            this.setState(prevState => {
                this.showComment(res[0].LopID, 2018, 4);
                return { listsLop: res };
            })
        })
    }
    showComment = (lopID, nam, thang) => {
        var isComplete = false;
        api.getListComment(lopID, nam, thang).then(res => {
            this.setState(prevState => {
                isComplete = res.every(function (nx, index) {                   
                    if (!nx.NhanXet || nx.NhanXet.length === 0) {
                        return false;
                    }
                    else {
                        return true;
                    }

                });
                this.setState({
                    isDisableButton: isComplete
                });
                /* if (isComplete === false) {
                    this.setState({
                        isDisableButton: true
                    });
                }
                else {
                    this.setState({
                        isDisableButton: false
                    });
                }; */
                return { listComment: res };
            });
        })

    }
    updateComment = (lopID) => {
        for (let index = 0; index < this.state.listComment.length; index++) {
            const element = this.state.listComment[index].HocSinhID;
            api.updateDuyetNhanXet({ HocSinhID: element, Nam: 2018, Thang: 4 })
        };
        this.setState({
            isDisableButton: true
        });
    }
    render() {
        let { lopID, listComment } = this.state

        return (
            <div className="container">


                <div className="row justify-content-md-center">
                    <div className="col col-10 col-lg-10">
                        <table className="table table-sm">
                            <thead>
                                <tr className="mdb-color #01579b light-blue darken-4">
                                    <th className="text-white text-center font-weight-bold text-monospace">DUYỆT NHẬN XÉT HÀNG THÁNG</th>
                                </tr>

                            </thead>

                        </table>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-10 col-lg-10">
                        <div className="row text-center">

                            <div className="col col-12  col-lg-6 ">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Khối</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01" onChange={(e) => {
                                        this.showClass(e.target.value);
                                    }}>
                                        {
                                            this.state.listsKhoi.map(function (name, index) {
                                                return <option value={name.KhoiID} key={`k_${name.KhoiID}`} onChange={(e) => {
                                                    this.setState({ khoiID: e.target.value })
                                                }}>{name.TenKhoi}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col col-12  col-lg-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect02">Lớp</label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect02" onChange={(e) => {
                                        this.setState({ lopID: e.target.value });
                                        this.showComment(e.target.value, 2018, 4)
                                    }}>
                                        {
                                            this.state.listsLop.map(function (name, index) {
                                                return <option value={name.LopID} key={`l_${name.LopID}`}>{name.TenLop}</option>
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
                                <tr className="text-white text-center font-weight-bold">
                                    <th className="center aligned" width="50px">STT</th>
                                    <th className="center aligned" width="100px">Mã học sinh</th>
                                    <th className="center aligned" width="250px">Họ</th>
                                    <th className="center aligned" width="150px">Tên</th>
                                    <th className="center aligned">Nhận xét</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listComment.map((row, index) => (
                                        <tr key={`nx_${row.HocSinhID}`} className="align-middle">
                                            <td className="align-middle text-center">{row.STT}</td>
                                            <td className="align-middle text-center">{row.HocSinhID}</td>
                                            <td className="align-middle text-left">{row.Ho}</td>
                                            <td className="align-middle text-left">{row.Ten}</td>
                                            <td className="align-middle text-left">{row.NhanXet}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>

                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col col-10 col-lg-10 form-row align-items-center">
                        <div className="col-7">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Ghi chú</div>
                                </div>
                                <input type="text" className="form-control py-0 " name="inlineFormInputGroup" placeholder="" />
                               
                            </div>
                           
                            
                        </div>
                        <div className="col-5">                            
                            <div className="input-group-prepend">
                                <button className="btn btn-danger  btn-md" onClick={() => this.updateComment(lopID)}><i className="fas fa-ban mr-2"></i>Hủy nhận xét</button>
                                <button className="btn btn-md mdb-color #01579b light-blue darken-4" disabled={this.state.isDisableButton} onClick={() => this.updateComment(lopID)}><i className="far fa-file-alt mr-2"></i>Duyệt nhận xét</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="ui clearing divider">

                </div>
            </div>
        )
    }
}

export default duyetnhanxet;

