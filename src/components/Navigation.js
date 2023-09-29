import Header from "../components/Header";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Navigation(){
    return(
        <React.Fragment>
           <Header />
           <aside class="left-sidebar">
                <div>
                    <div class="brand-logo d-flex align-items-center justify-content-between">
                        <a href="./index.html" class="text-nowrap logo-img">
                            <img src="../assets/images/logos/lettero.png" width="30" alt="" />&nbsp;&nbsp;&nbsp;One Login
                        </a>

                        <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i class="ti ti-x fs-8"></i>
                        </div>
                    </div>
            
                    <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
                    <ul id="sidebarnav">
                        <li class="nav-small-cap">
                        <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                        <span class="hide-menu">Home</span>
                        </li>
                        <li class="sidebar-item">
                        <a class="sidebar-link" href="/dashboard" aria-expanded="false">
                            <span>
                            <i class="ti ti-layout-dashboard"></i>
                            </span>
                            <span class="hide-menu">Dashboard</span>
                        </a>
                        </li>
                        <li class="sidebar-item">
                        <a class="sidebar-link" href="/user-add" aria-expanded="false">
                            <span>
                            <i class="ti ti-alert-circle"></i>
                            </span>
                            <span class="hide-menu">Users</span>
                        </a>
                        </li>
                    </ul>
                    </nav>

                </div>
            </aside>
            <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
            <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <script src="../assets/js/sidebarmenu.js"></script>
            <script src="../assets/js/app.min.js"></script>
            <script src="../assets/libs/apexcharts/dist/apexcharts.min.js"></script>
            <script src="../assets/libs/simplebar/dist/simplebar.js"></script>
            <script src="../assets/js/dashboard.js"></script>
      </React.Fragment>
    )

}
export default Navigation;