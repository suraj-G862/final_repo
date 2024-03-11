import React from "react";
import "./styles/footer.css"
function Footer(){
        const year=new Date().getFullYear();

        return (
                
                   <footer className="Footer_Container">
                        
                        <div className="Footer_Div">
                                <div className="Footer_SvgContainer">
                                <a href="https://www.instagram.com/sports_iitbhilai/?hl=en"><svg viewBox="0 0 1024 1024" className="Icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M715.637 960h171.897C920.348 960 960 932.759 960 898.909V125.091C960 91.243 920.348 64 887.534 64H113.716C77.004 64 64 96.892 64 125.091v773.818C64 927.109 77.004 960 113.716 960h439.012V634.182H410.181c-11.257 0-20.363-9.106-20.363-20.363V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.354 88.056-183.272 192.261-183.272h113.193c11.257 0 20.365 9.106 20.365 20.363V288c0 11.258-9.108 20.365-20.365 20.365h-72.465c-34.444 0-70.079 19.052-70.079 50.908v112h131.17a20.27 20.27 0 0 1 16.507 8.472c3.856 5.291 4.891 12.133 2.823 18.337l-40.728 122.181a20.403 20.403 0 0 1-19.33 13.919h-90.442V960z" fill="#2577FF"></path><path d="M807.708 451.723h-92.071v19.549h112.288c-0.161-3.938-1.326-7.809-3.711-11.078a20.263 20.263 0 0 0-16.506-8.471zM513.629 940.451H75.445C83.3 951.952 95.599 960 113.716 960h439.012V634.183H513.63v306.268zM839.283 145.456c-0.451-10.855-9.231-19.549-20.198-19.549H705.89c-104.205 0-192.261 83.919-192.261 183.272v142.544H371.083c-11.257 0-20.363 9.108-20.363 20.365v122.181c0 11.258 9.107 20.364 20.363 20.364h18.899c-0.012-0.286-0.164-0.527-0.164-0.815V491.637c0-11.257 9.106-20.365 20.363-20.365h142.546V328.728c0-99.353 88.056-183.272 192.261-183.272h94.295z" fill=""></path><path d="M900.123 65.251c12.221 10.76 20.778 24.748 20.778 40.29V879.36c0 33.85-39.651 61.091-72.467 61.091H715.637V960h171.896C920.348 960 960 932.759 960 898.909V125.091c0-29.6-30.322-54.141-59.877-59.84z" fill=""></path></g></svg></a>
                               <a href="https://www.instagram.com/sports_iitbhilai/?hl=en"><svg className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" ><linearGradient id="a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><path fill="url(#a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path><linearGradient id="b" x1="5.172" x2="10.828" y1="10.828" y2="5.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><path fill="url(#b)" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path><linearGradient id="c" x1="11.923" x2="12.677" y1="4.077" y2="3.323" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle></svg></a>
                                <a href="https://www.instagram.com/sports_iitbhilai/"><svg  xmlns="http://www.w3.org/2000/svg" width="655.359" height="655.359" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 6.827 6.827" className="Icon"><rect width="6.827" height="6.827" fill="#0a93e2" rx="1.456" ry="1.456"></rect><path fill="#fff" d="M5.49 2.378a1.64 1.64 0 0 1-.471.129c.17-.102.3-.263.36-.454a1.65 1.65 0 0 1-.52.199.82.82 0 0 0-1.42.561A.82.82 0 0 0 3.46 3a2.33 2.33 0 0 1-1.691-.857.82.82 0 0 0 .254 1.096.816.816 0 0 1-.372-.103v.01c0 .398.283.73.658.805a.817.817 0 0 1-.37.014.822.822 0 0 0 .766.57 1.646 1.646 0 0 1-1.215.34c.363.233.794.368 1.258.368 1.51 0 2.335-1.25 2.335-2.335 0-.035 0-.07-.002-.106.16-.115.3-.26.41-.424z"></path></svg></a>
                                </div>
                                <div className="Footer_Copyright">
                                        <span>© {year} , Prayatna IIT Bhilai</span>
                                </div>
                        </div>

                   </footer>

                

        );
}


export default Footer;