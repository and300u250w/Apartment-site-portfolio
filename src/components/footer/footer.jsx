import React, { Component } from 'react';


export class Footer extends Component{

    render (){
        return (
                 
                       <footer className="page-footer font-small cyan darken-3">

                       <div className="container">
   
                           <div className="row">
   
                               {/* <!-- Grid column --> */}
                               <div className="col-md-12 py-5">
                                   <div className="mb-5 flex-center">
   
                                       {/* <!-- Facebook --> */}
                                       <a className="fb-ic" href="https://www.facebook.com/andrii.osipov">
                                           <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                       </a>
                                       {/* <!-- Twitter --> */}
                                       <a className="tw-ic" href="https://twitter.com/and300u250w">
                                           <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                       </a>
   
                                       {/* <!--Linkedin --> */}
                                       <a className="li-ic" href="https://www.linkedin.com/in/andrii-osipov/">
                                           <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                       </a>
                                       {/* <!--Instagram--> */}
                                       <a className="ins-ic" href="https://www.instagram.com/andrii_runs/">
                                           <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                       </a>
                                   </div>
                               </div>
                               {/* <!-- Grid column --> */}
   
                           </div>
                           {/* <!-- Grid row--> */}
   
                       </div>
                       {/* <!-- Footer Elements --> */}
   
                       {/* <!-- Copyright --> */}
                       <div className="footer-copyright text-center py-3">© 2019 All rights are reserved.
                       <Link to="rodo" >Privacy Policy </Link>
   
                       </div>
                       {/* <!-- Copyright --> */}
                   </footer>
        )
    }
}