import Header from "../components/Header";
import React, {useState, useEffect} from 'react';
function Footer(){
    return(
        <React.Fragment>
            <Header />
            <div class="py-6 px-6 text-center">
                <p class="mb-0 fs-4">Design and Developed by <a href="" target="blank" class="pe-1 text-primary text-decoration-underline"></a> <a href="https://themewagon.com">ThemeWagon</a></p>
            </div>
        </React.Fragment>
    )

}
export default Footer;