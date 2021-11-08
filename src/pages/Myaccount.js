import React from 'react'
import "../css/base.css";
import "../css/element.css";
import "../css/media.css";
import "../css/header.css";
import "../css/main.css";
import '../css/footer.css';

function Myaccount() {
    return (
        <>
            <main id="main" className="site-primary">
                <div className="site-content">
                    <div className="homepage-content">



                        <div className="shop-content my-account-page">
                            <div className="container">
                                <nav className="woocommerce-breadcrumb"><ul><li><a href="https://klbtheme.com/bacola">Home</a></li><li>My account</li></ul></nav>
                                <div className="woocommerce"><div className="woocommerce-notices-wrapper"></div>

                                    <div className="u-columns col2-set" id="customer_login">

                                        <div className="u-column1 col-1">


                                            <h2>Login</h2>

                                            <form className="woocommerce-form woocommerce-form-login login" method="post">


                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                    <label for="username">Username or email address&nbsp;<span className="required">*</span></label>
                                                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="" />			</p>
                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                    <label for="password">Password&nbsp;<span className="required">*</span></label>
                                                    <input className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password" />
                                                </p>


                                                <p className="form-row">
                                                    <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                        <input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span>Remember me</span>
                                                    </label>
                                                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="cf71410cc0" /><input type="hidden" name="_wp_http_referer" value="/bacola/my-account/" />				<button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" value="Log in">Log in</button>
                                                </p>
                                                <p className="woocommerce-LostPassword lost_password">
                                                    <a href="https://klbtheme.com/bacola/my-account/lost-password/">Lost your password?</a>
                                                </p>


                                            </form>


                                        </div>

                                        <div className="u-column2 col-2">

                                            <h2>Register</h2>

                                            <form method="post" className="woocommerce-form woocommerce-form-register register"  >



                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                    <label for="reg_email">Email address&nbsp;<span className="required">*</span></label>
                                                    <input type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="" />			</p>


                                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                    <label for="reg_password">Password&nbsp;<span className="required">*</span></label>
                                                    <input type="password" className="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" />
                                                </p>


                                                <div className="woocommerce-privacy-policy-text"><p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="https://klbtheme.com/bacola/privacy-policy/" className="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.</p>
                                                </div>
                                                <p className="woocommerce-form-row form-row">
                                                    <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="2528d742e0" /><input type="hidden" name="_wp_http_referer" value="/bacola/my-account/" />				<button type="submit" className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="Register">Register</button>
                                                </p>


                                            </form>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
            			</div>
                </div>
            </main>
        </>
    )
}

export default Myaccount
