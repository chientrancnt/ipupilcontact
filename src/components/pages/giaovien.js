import React from 'react';
import api from '../../api';
import DanhSachHocSinh from '../component/giaovien/danhsachhocsinh';



class giaovien extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            lists: [],
            listStudent: [],
            lopID: 0,
            dropdownOpen: false
        }
    }
    componentDidMount() {
        const meID = 'NV0000108';
        var { lopID } = this.props.match.params;
        console.log(lopID);
        api.getListClass(meID).then(res => {
            //console.log(res);
            this.setState({ lists: res })
        })
        api.getListStudent(lopID).then(res => {
            this.setState({ lopID: lopID, listStudent: res });
        });
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    show = () => {
        //const { getStudent } = this.props;
        var idLop = this.refs.lop.value;
        api.getListStudent(idLop).then(res => {
            this.setState({ lopID: idLop, listStudent: res });
        });
    }
    render() {
        return (
            <div className="container" >
                
                <div className="row justify-content-md-center">
                    <div className="col col-12  col-lg-12 ">
                        <div className="row text-center">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="lopID">Lớp chủ nhiệm:</label>
                                </div>
                                <select id="lopID" className="custom-select" ref="lop" style={{width:"100px"}}>
                                    {
                                        this.state.lists.map(function (name, index) {
                                            return <option value={name.LopID} key={`${index}`}>{name.TenLop}</option>
                                        })
                                    }
                                </select>
                                <span class="input-group-btn">

                                    <button className="my-0 btn btn-md mdb-color #01579b light-blue darken-4" type="button" onClick={this.show}><i className="far fa-address-card mr-2"></i>Xem danh sách</button>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                {this.state.listStudent.length > 0 &&
                    <DanhSachHocSinh listStudent={this.state.listStudent} lopID={this.state.lopID} />
                }
            </div>
        )
    }
}
export default giaovien;