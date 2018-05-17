import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import GiaoVienPage from './components/pages/giaovien';
import GiaoVienNhanXet from './components/component/giaovien/nhanxet';
import NhanVienPage from './components/pages/nhanvien';
import NhanVienBaoCao from './components/component/nhanvien/baocao';
import PhuHuynhPage from './components/pages/phuhuynh';

class App extends Component {
  render() {
    return (
      <div className="app">
          <header className="app-header">
            <div className="top-bar">
              <div className="top-bar-brand">ipupleContact</div>
              <div className="top-bar-list">
                <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none"></div>
                <div className="top-bar-item top-bar-item-full"></div>
                <div className="top-bar-item top-bar-item-right px-0 d-none d-sm-flex"></div>
              </div>
            </div>
          </header>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
              Trang chủ
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Nhân viên
                </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/nhanvien/duyetnhanxet">Duyệt nhận xét</a>
                    <a className="dropdown-item" href="/nhanvien/baocao">Báo cáo</a>

                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Giáo viên
                </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/0">Nhận xét</a>
                    <a className="dropdown-item" href="/giaovien/nhanxetmau/0">Tạo nhận xét mẫu</a>

                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/phuhuynh/17200069">Phụ huynh</a>
                </li>
              </ul>
            </div>
          </nav>


        
        <p className="App-intro"></p>
        <div className="container p-0 ">
          <Switch>
            <Route exact path="/:lopID" component={GiaoVienPage} />
            <Route path="/giaovien/nhanxet/:hocsinhID/:lopID" component={GiaoVienNhanXet} />
            <Route path="/giaovien/nhanxetmau/:lopID" component={GiaoVienNhanXet} />
            <Route path="/nhanvien/duyetnhanxet" component={NhanVienPage} />
            <Route path="/nhanvien/baocao" component={NhanVienBaoCao} />
            <Route path="/phuhuynh/:hocsinhID" component={PhuHuynhPage} />
          </Switch>
        </div>

        <header className="app-footer">
            <div className="top-bar">
              <div className="top-bar-brand">xxx</div>
              <div className="top-bar-list">
                <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none">kak ddddđaa</div>
                <div className="top-bar-item top-bar-item-full">leuleuel</div>
                <div className="top-bar-item top-bar-item-right px-0 d-none d-sm-flex">ksdsdasdadddđaa</div>
              </div>
            </div>
          </header>
      </div>
    );
  }
}

export default App;

