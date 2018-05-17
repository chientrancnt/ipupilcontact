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
            stuNeNep: []
        }
    }
    componentDidMount() {
        const { hocsinhID } = this.props;

        api.getStudentInfo(hocsinhID).then(res => {
            this.setState({ student: res, loading: false })
        });
        api.getStudentOrder(hocsinhID).then(res => {
            this.setState({ stuNeNep: res })
        });
        api.getMarkStudent(hocsinhID).then(res => {
            this.setState({ marks: res })
        });
    }

    render() {


        return (

            <div className="container" >
                <div className="row justify-content-md-center">
                    <div className="col col-lg-10">
                        <table className="table table-bordered">
                            <thead>
                                <tr className="table bg-info text-light">
                                    <th>KẾT QUẢ HỌC TẬP THÁNG 8</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-3">
                        <HocSinh hocsinhID={this.props} />
                    </div>
                    <div className="col col-lg-7">
                        <HocSinhNeNep hocsinhID={this.props} />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-10">
                        <HocSinhBangDiem hocsinhID={this.props} />
                    </div>
                </div>

            </div>

        )
    }
}

export default nhanxet;

