import React from 'react'
import "../css/base.css";
import "../css/element.css";
import "../css/media.css";
import "../css/header.css";
import "../css/main.css";
import '../css/footer.css';

function Wishlist() {
    return (
        <>
            <main id="main" class="site-primary">
                <div class="site-content">
                    <div class="homepage-content">




                        <div data-elementor-type="wp-page" data-elementor-id="633" class="elementor elementor-633" data-elementor-settings="[]">
                            <div class="elementor-section-wrap">
                                <section class="elementor-section elementor-top-section elementor-element elementor-element-1922087b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1922087b" data-element_type="section">
                                    <div class="elementor-container elementor-column-gap-default">
                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2658ff39" data-id="2658ff39" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-214b7e48 elementor-widget elementor-widget-shortcode" data-id="214b7e48" data-element_type="widget" data-widget_type="shortcode.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-shortcode"><div class="tinv-wishlist woocommerce">
                                                            <div class="tinv-header">
                                                                <h2>Default wishlist</h2>
                                                            </div>
                                                            <p class="cart-empty woocommerce-info">
                                                                Your Wishlist is currently empty.			</p>


                                                            <p class="return-to-shop">
                                                                <a class="button wc-backward"
                                                                    href="#">Return To Shop</a>
                                                            </p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>
                </div>
                </main>
        </>
    )
}

export default Wishlist
