import React from 'react';
import api from '../../../api';
import Loader from 'react-loader-spinner';

class HocSinh extends React.Component {
    constructor(props) {
        super(props);       
        this.state = {
            student: [],      
            loading: true
        }
    }
    componentDidMount(){
        const {hocsinhID}=this.props.hocsinhID;        
        api.getStudentInfo(hocsinhID).then(res => {            
            this.setState({ student: res, loading: false })
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
            <div className="onecard">
                <div className="mainflip">
                    <div className="card text-center mb-4">
                        <div className="card-header mdb-color #01579b light-blue darken-3 text-white"><b>{this.state.student[0].HocSinhID}</b></div>
                        <div className="card-body  text-success">
                            <img className="img-fluid mb-6" src={`data:image/jpeg;base64,${this.state.student[0].img}`} alt={this.state.student[0].HocSinhID} />
                            <div className="left aligned header">&nbsp;</div>
                            <div className="card-title"><b>{this.state.student[0].HoTen}</b></div>
                            <div className="card-text">
                                <div><i className="fas fa-birthday-cake mr-2"></i>{this.state.student[0].NgaySinh}</div>

                                <div >
                                    <i className="fas fa-transgender mr-2"></i>{this.state.student[0].Phai}
                                </div>

                            </div>
                        </div>

                        <div className="card-footer mdb-color #01579b light-blue darken-3"></div>

                    </div>
                </div>
            </div>
                )

        );
    }
}

export default HocSinh;

