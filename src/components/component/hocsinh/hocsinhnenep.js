import React from 'react';
import api from '../../../api';
import Loader from 'react-loader-spinner';

class hocsinhnenep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stuNeNep: [],
            loading: true
        }
    }

    componentDidMount() {
        const { hocsinhID } = this.props.hocsinhID;
        api.getStudentOrder(hocsinhID).then(res => {
            this.setState({ stuNeNep: res, loading: false });
        });
    }

    render() {
        let { loading } = this.state;
        var loaderStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
        return (
            loading ? (
                <div >
                    <div style={loaderStyle}>
                        <Loader type="Circles" color="lightgreen" height={80} width={80} />
                    </div>
                </div>
            )
                : (
                    <div className="d-block">
                        <table className="table table-sm table-striped table-hover table-bordered">
                            <thead className="mdb-color #01579b light-blue darken-4">
                                <tr className="table mdb-color #01579b light-blue text-white text-center font-weight-bold text-monospace">
                                    <th colSpan="3">Thông tin nề nếp</th>
                                </tr>
                                <tr className="text-white text-center font-weight-bold">
                                    <th scope="col">#</th>
                                    <th className="center aligned" scope="col">Hình thức vi phạm</th>
                                    <th className="center aligned" scope="col">Số lần vi phạm</th>
                                </tr>
                            </thead>
                            <tbody style={{height: "300px"}}>
                                {
                                    this.state.stuNeNep.map((row, index) => (
                                        <tr key={`hs_${row.STT}`}>
                                            <th scope="col">{row.STT}</th>
                                            <td>{row.NoiDung}</td>
                                            <td>{row.SoLanViPham}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            
                        </table>
                    </div>
                )
        );
    }
}

export default hocsinhnenep;

