import React from 'react';
import api from '../../../api';
import Loader from 'react-loader-spinner';

class hocsinhbangdiem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marks: [],
            loading: true
        }
    }
    componentDidMount() {
        const { hocsinhID } = this.props.hocsinhID;
        api.getMarkStudent(hocsinhID).then(res => {
            this.setState({ marks: res, loading: false })
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
                    <table className="table table-sm table-striped table-hover table-bordered">
                        <thead className="mdb-color #01579b light-blue darken-4 align-middle">
                            <tr className="table mdb-color #01579b light-blue text-white text-center font-weight-bold text-monospace">
                                <th colSpan="16" >Kết quả học tập</th>
                            </tr>
                            <tr className="text-white text-center font-weight-bold  align-middle">
                                <th rowSpan="2" className="center aligned  align-middle" scope="col">Tên môn</th>
                                <th colSpan="3" className="center aligned" scope="col">Điểm miệng</th>
                                <th colSpan="5" className="center aligned" scope="col">Kiểm tra thường xuyên</th>
                                <th colSpan="5" className="center aligned" scope="col">Kiểm tra định kỳ</th>
                                <th rowSpan="2" className="center aligned align-middle" scope="col">KTCK</th>
                                <th rowSpan="2" className="center aligned align-middle" scope="col">ĐTB</th>
                            </tr>
                            <tr className="text-white text-center font-weight-bold align-middle">
                                <th scope="col">M1</th>
                                <th scope="col">M2</th>
                                <th scope="col">M3</th>
                                <th scope="col">L1</th>
                                <th scope="col">L2</th>
                                <th scope="col">L3</th>
                                <th scope="col">L4</th>
                                <th scope="col">L5</th>
                                <th scope="col">L1</th>
                                <th scope="col">L2</th>
                                <th scope="col">L3</th>
                                <th scope="col">L4</th>
                                <th scope="col">L5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.marks.map((row, index) => (
                                    <tr key={`diem_${row.LopMonID}`}>
                                        <th className="text-left" scope="row">{row.TenMon}</th>
                                        <td className="text-right">{row.Mieng1}</td>
                                        <td className="text-right">{row.Mieng2}</td>
                                        <td className="text-right">{row.Mieng3}</td>
                                        <td className="text-right">{row.KTTX1}</td>
                                        <td className="text-right">{row.KTTX2}</td>
                                        <td className="text-right">{row.KTTX3}</td>
                                        <td className="text-right">{row.KTTX4}</td>
                                        <td className="text-right">{row.KTTX5}</td>
                                        <td className="text-right">{row.KTĐK1}</td>
                                        <td className="text-right">{row.KTĐK2}</td>
                                        <td className="text-right">{row.KTĐK3}</td>
                                        <td className="text-right">{row.KTĐK4}</td>
                                        <td className="text-right">{row.KTĐK5}</td>
                                        <td className="text-right">{row.KTCK}</td>
                                        <th className="text-right" scope="row">{row.ĐTB}</th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
        )
    }
}
export default hocsinhbangdiem;

