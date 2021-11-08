import React from 'react'
import "../css/base.css";
import "../css/element.css";
import "../css/media.css";
import "../css/header.css";
import "../css/main.css";
import '../css/footer.css';

function OrderTracking() {
    return (
        <>
            <main id="main" class="site-primary">
                <div class="site-content">
                    <div class="homepage-content">
                        <div data-elementor-type="wp-page" data-elementor-id="1681" class="elementor elementor-1681" data-elementor-settings="[]">
                            <div class="elementor-section-wrap">
                                <section class="elementor-section elementor-top-section elementor-element elementor-element-9fea213 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9fea213" data-element_type="section">
                                    <div class="elementor-container elementor-column-gap-extended">
                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a193c95" data-id="a193c95" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-d132ffd elementor-widget elementor-widget-shortcode" data-id="d132ffd" data-element_type="widget" data-widget_type="shortcode.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-shortcode">
                                                            <div class="woocommerce">
                                                                <form action="#" method="post" class="woocommerce-form woocommerce-form-track-order track_order">
                                                                    <p>To track your order please enter your Order ID in the box below and press the &quot;Track&quot; button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                                                    <p class="form-row form-row-first"><label for="orderid">Order ID</label> <input class="input-text" type="text" name="orderid" id="orderid" value="" placeholder="Found in your order confirmation email." /></p>	<p class="form-row form-row-last"><label for="order_email">Billing email</label> <input class="input-text" type="text" name="order_email" id="order_email" value="" placeholder="Email you used during checkout." /></p>	<div class="clear"></div><p class="form-row"><button type="submit" class="button" name="track" value="Track">Track</button></p>
                                                                    <input type="hidden" id="woocommerce-order-tracking-nonce" name="woocommerce-order-tracking-nonce" value="7eacdebcb1" /><input type="hidden" name="_wp_http_referer" value="/bacola/order-tracking/" />
                                                                </form>
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
export default OrderTracking
