import React from 'react';
import KetQuaHocTap from '../component/phuhuynh/ketquahoctap';



class phuhuynh extends React.Component {
      
    render() {
        const { hocsinhID } = this.props.match.params;
        return (
            <div className="container" >
                <KetQuaHocTap hocsinhID={hocsinhID} />
            </div>
        )
    }
}
export default phuhuynh;