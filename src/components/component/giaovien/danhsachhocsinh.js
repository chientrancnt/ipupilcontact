import React from 'react';
import '../../styles/cardlayout.css';
import DanhSachHocSinh from '../hocsinh/danhsach';

class danhsachhocsinh extends React.Component {

    render() {
        const { listStudent, lopID } = this.props;

        return (
            <div className="conainer py-2"  >

               <div className="row justify-content-md-center">
                    <div className="col col-12 col-lg-12">
                        <table className="table table-sm">
                            <thead>
                                <tr className="mdb-color #01579b light-blue darken-4">
                                    <th className="text-white text-center font-weight-bold text-monospace">DANH SÁCH HỌC SINH</th>
                                </tr>

                            </thead>

                        </table>
                    </div>
                </div>
                
                <div className="card-deck">{
                    listStudent.map((row, index) => (
                        <DanhSachHocSinh data={row} key={`${index}`} lopID={lopID} />                        
                    ))
                }
                </div>
                
            </div>
        )
    }
}


export default danhsachhocsinh;

