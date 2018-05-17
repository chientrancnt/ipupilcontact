import React from 'react';
import '../../styles/cardlayout.css';

class danhsach extends React.Component {

    render() {
        
        return (
            
            <div className="image-flip">
                {this.props.data.DaNhanXet == 1 ? (
                    <div className="mainflip disabledcard">
                        <div className="card text-center mb-3">
                            <div className="card-header mdb-color #01579b light-blue darken-3  text-light"><b>{this.props.data.HocSinhID}</b></div>
                            <div className="card-body  text-success">
                                { this.props.data.img  ? (
                                    <img className="img-fluid" src={`data:image/jpeg;base64,${this.props.data.img}`} alt={this.props.data.HocSinhID} />
                                ):(
                                    <img className="img-fluid" src="/images/no_image_available.svg" alt={this.props.data.HocSinhID} />
                                ) }
                                
                                <div className="left aligned header">&nbsp;</div>
                                <h6 className="card-title"><b>{this.props.data.Ho} {this.props.data.Ten}</b></h6>
                                <div className="card-text">
                                    <div><i className="fas fa-birthday-cake mr-2"></i>{this.props.data.NgaySinh}</div>

                                    <div >
                                        <i className="fas fa-transgender mr-2"></i>{this.props.data.Phai}
                                    </div>
                                </div>
                                <a href={`/giaovien/nhanxet/${this.props.data.HocSinhID}/${this.props.lopID}`} className="btn btn-danger btn-md"><i className="far fa-edit mr-2"></i>Đã nhận xét</a>

                            </div>

                            <div className="card-footer mdb-color #01579b light-blue darken-3 ">

                            </div>

                        </div>
                    </div>

                ) : (

                        <div className="mainflip">
                            <div className="card text-center mb-3">
                                <div className="card-header mdb-color #01579b light-blue darken-3 text-light"><b>{this.props.data.HocSinhID}</b></div>
                                <div className="card-body  text-success">
                                { this.props.data.img  ? (
                                    <img className="img-fluid" src={`data:image/jpeg;base64,${this.props.data.img}`} alt={this.props.data.HocSinhID} />
                                ):(
                                    <img className="img-fluid" src="/images/no_image_available.svg" alt={this.props.data.HocSinhID} />
                                ) }
                                    <div className="left aligned header">&nbsp;</div>
                                    <h6 className="card-title "><b>{this.props.data.Ho} {this.props.data.Ten}</b></h6>
                                    <div className="card-text">
                                        <div><i className="fas fa-birthday-cake mr-2"></i>{this.props.data.NgaySinh}</div>

                                        <div >
                                            <i className="fas fa-transgender mr-2"></i>{this.props.data.Phai}
                                        </div>
                                    </div>
                                    <a href={`/giaovien/nhanxet/${this.props.data.HocSinhID}/${this.props.lopID}`} className="btn mdb-color #01579b light-blue darken-4 btn-md"><i className="far fa-edit mr-2"></i>Nhận xét</a>

                                </div>

                                <div className="card-footer mdb-color #01579b light-blue darken-3 ">

                                </div>

                            </div>
                        </div>

                    )
                }
            </div>
        )
    }
}


export default danhsach;

