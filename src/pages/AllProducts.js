import React from "react";

import Banner from "../Assets/bacola-banner-18.jpg";
import SideBanner from "../Assets/sidebar-banner.gif";
import "../css/base.css";

const AllProducts = () => {
  return (
    <div className="site-primary">
      <div className="site-content">
        <div className="homepage-content">
          <div className="container">
            <nav className="woocommerce-breadcrumb">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>Meats &amp; Seafood</li>
              </ul>
            </nav>
            <div className="row pb-4 content-wrapper sidebar-left">
              <div className="col-12 col-md-12 col-lg-9 content-primary">
                <div className="shop-banner">
                  <div className="module-banner image align-center align-middle">
                    <div className="module-body">
                      <div className="banner-wrapper">
                        <div className="banner-content">
                          <div className="content-main">
                            <h4 className="entry-subtitle color-text xlight">
                              Organic Meals Prepared
                            </h4>
                            <h3 className="entry-title color-text large">
                              Delivered to
                              <strong className="color-success">
                                {" "}
                                Your Home
                              </strong>
                            </h3>
                            <div className="entry-text color-info-dark">
                              Fully prepared &amp; delivered nationwide.
                            </div>
                          </div>
                        </div>
                        <div className="banner-thumbnail">
                          <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                            alt="Organic Meals Prepared"
                          />
                        </div>
                        <a href="#" className="overlay-link"></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="woocommerce-notices-wrapper"></div>
                <div className="before-shop-loop">
                  <div className="shop-view-selector">
                    <a href="#" className="shop-view">
                      <i className="klbth-icon-list-grid"></i>
                    </a>
                    <a href="#" className="shop-view">
                      <i className="klbth-icon-2-grid"></i>
                    </a>
                    <a href="#" className="shop-view">
                      <i className="klbth-icon-3-grid"></i>
                    </a>
                    <a href="#" className="shop-view active">
                      <i className="klbth-icon-4-grid"></i>
                    </a>
                  </div>

                  <div className="mobile-filter">
                    <a href="#" className="filter-toggle">
                      <i className="klbth-icon-filter"></i>
                      <span>Filter Products</span>
                    </a>
                  </div>
                  <form
                    className="woocommerce-ordering product-filter"
                    method="get"
                  >
                    <span className="orderby-label hide-desktop">Sort by</span>
                    <select
                      name="orderby"
                      className="orderby filterSelect"
                      aria-label="Shop order"
                      data-className="select-filter-orderby"
                    >
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date" selected="selected">
                        Sort by latest
                      </option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                    <input type="hidden" name="paged" value="1" />
                  </form>
                  <form
                    className="products-per-page product-filter"
                    method="get"
                  >
                    <span className="perpage-label">Show</span>
                    <select
                      name="perpage"
                      className="perpage filterSelect"
                      data-className="select-filter-perpage"
                    >
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                      <option value="48">48</option>
                    </select>
                  </form>
                </div>

                <div className="products column-4 mobile-column-2 align-inherit">
                  <div
                    className="
                      product
                      type-product
                      post-430
                      status-publish
                      first
                      instock
                      product_cat-meats-seafood
                      product_tag-chicken
                      product_tag-natural
                      product_tag-organic
                      has-post-thumbnail
                      sale
                      shipping-taxable
                      purchasable
                      product-type-simple
                    "
                  >
                    <div className="product-wrapper product-type-1">
                      <div className="thumbnail-wrapper">
                        <div className="product-badges">
                          <span className="badge style-1 onsale">23%</span>
                          <span className="badge style-1 recommend">
                            recommended
                          </span>
                        </div>
                        <a href="#">
                          <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                            alt="All Natural Italian-Style Chicken Meatballs"
                          />
                        </a>
                        <div className="product-buttons">
                          <a href="#" className="detail-bnt quick-view-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                            </svg>
                          </a>
                          <div
                            className="
                              tinv-wraper
                              woocommerce
                              tinv-wishlist
                              tinvwl-shortcode-add-to-cart
                            "
                            data-product_id="430"
                          >
                            <div className="tinv-wishlist-clear"></div>
                            <a
                              role="button"
                              tabindex="0"
                              aria-label="Add to Wishlist"
                              className="
                                tinvwl_add_to_wishlist_button
                                tinvwl-icon-heart
                                tinvwl-position-shortcode
                              "
                              data-tinv-wl-list="[]"
                              data-tinv-wl-product="430"
                              data-tinv-wl-productvariation="0"
                              data-tinv-wl-productvariations="[0]"
                              data-tinv-wl-producttype="simple"
                              data-tinv-wl-action="add"
                            >
                              <span className="tinvwl_add_to_wishlist-text">
                                Add to Wishlist
                              </span>
                            </a>
                            <div className="tinv-wishlist-clear"></div>
                            <div className="tinvwl-tooltip">
                              Add to Wishlist
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrapper">
                        <h3 className="product-title">
                          <a
                            href="#"
                            title="All Natural Italian-Style Chicken Meatballs"
                          >
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h3>
                        <div className="product-meta">
                          <div className="product-available in-stock">
                            In Stock
                          </div>
                        </div>
                        <div className="product-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                          >
                            <span style={{ width: "80%" }}>
                              Rated <strong className="rating">4.00</strong> out
                              of 5
                            </span>
                          </div>
                          <div className="count-rating">
                            1 <span className="rating-text">Ratings</span>
                          </div>
                        </div>
                        <span className="price">
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                9.35
                              </bdi>
                            </span>
                          </del>
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                7.25
                              </bdi>
                            </span>
                          </ins>
                        </span>
                        <div className="product-fade-block">
                          <div className="product-button-group cart-with-quantity">
                            <div className="quantity ajax-quantity">
                              <div className="quantity-button minus">
                                <i className="klbth-icon-minus"></i>
                              </div>
                              <input
                                type="text"
                                className="input-text qty text"
                                name="quantity"
                                step="1"
                                min=""
                                max=""
                                value="1"
                                title="Menge"
                                size="4"
                                inputmode="numeric"
                              />
                              <div className="quantity-button plus">
                                <i className="klbth-icon-plus"></i>
                              </div>
                            </div>
                            <a
                              href="#"
                              data-quantity="1"
                              className="
                                button-primary
                                xsmall
                                rounded
                                wide
                                button
                                product_type_simple
                                add_to_cart_button
                                ajax_add_to_cart
                              "
                              data-product_id="430"
                              data-product_sku="ZU49VOR"
                              aria-label="Add &ldquo;All Natural Italian-Style Chicken Meatballs&rdquo; to your cart"
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content-fade border-info"></div>
                    <div
                      className="
                        tinv-wraper
                        woocommerce
                        tinv-wishlist
                        tinvwl-after-add-to-cart tinvwl-loop-button-wrapper
                      "
                      data-product_id="430"
                    >
                      <div className="tinv-wishlist-clear"></div>
                      <a
                        role="button"
                        tabindex="0"
                        aria-label="Add to Wishlist"
                        className="
                          tinvwl_add_to_wishlist_button
                          tinvwl-icon-heart
                          tinvwl-position-after
                          tinvwl-loop
                        "
                        data-tinv-wl-list="[]"
                        data-tinv-wl-product="430"
                        data-tinv-wl-productvariation="0"
                        data-tinv-wl-productvariations="[0]"
                        data-tinv-wl-producttype="simple"
                        data-tinv-wl-action="add"
                      >
                        <span className="tinvwl_add_to_wishlist-text">
                          Add to Wishlist
                        </span>
                      </a>
                      <div className="tinv-wishlist-clear"></div>
                      <div className="tinvwl-tooltip">Add to Wishlist</div>
                    </div>
                    <button className="woosc-btn woosc-btn-430" data-id="430">
                      Compare
                    </button>
                  </div>
                  <div
                    className="
                      product
                      type-product
                      post-430
                      status-publish
                      first
                      instock
                      product_cat-meats-seafood
                      product_tag-chicken
                      product_tag-natural
                      product_tag-organic
                      has-post-thumbnail
                      sale
                      shipping-taxable
                      purchasable
                      product-type-simple
                    "
                  >
                    <div className="product-wrapper product-type-1">
                      <div className="thumbnail-wrapper">
                        <div className="product-badges">
                          <span className="badge style-1 onsale">23%</span>
                          <span className="badge style-1 recommend">
                            recommended
                          </span>
                        </div>
                        <a href="#">
                          <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                            alt="All Natural Italian-Style Chicken Meatballs"
                          />
                        </a>
                        <div className="product-buttons">
                          <a href="#" className="detail-bnt quick-view-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                            </svg>
                          </a>
                          <div
                            className="
                              tinv-wraper
                              woocommerce
                              tinv-wishlist
                              tinvwl-shortcode-add-to-cart
                            "
                            data-product_id="430"
                          >
                            <div className="tinv-wishlist-clear"></div>
                            <a
                              role="button"
                              tabindex="0"
                              aria-label="Add to Wishlist"
                              className="
                                tinvwl_add_to_wishlist_button
                                tinvwl-icon-heart
                                tinvwl-position-shortcode
                              "
                              data-tinv-wl-list="[]"
                              data-tinv-wl-product="430"
                              data-tinv-wl-productvariation="0"
                              data-tinv-wl-productvariations="[0]"
                              data-tinv-wl-producttype="simple"
                              data-tinv-wl-action="add"
                            >
                              <span className="tinvwl_add_to_wishlist-text">
                                Add to Wishlist
                              </span>
                            </a>
                            <div className="tinv-wishlist-clear"></div>
                            <div className="tinvwl-tooltip">
                              Add to Wishlist
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrapper">
                        <h3 className="product-title">
                          <a
                            href="#"
                            title="All Natural Italian-Style Chicken Meatballs"
                          >
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h3>
                        <div className="product-meta">
                          <div className="product-available in-stock">
                            In Stock
                          </div>
                        </div>
                        <div className="product-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                          >
                            <span style={{ width: "80%" }}>
                              Rated <strong className="rating">4.00</strong> out
                              of 5
                            </span>
                          </div>
                          <div className="count-rating">
                            1 <span className="rating-text">Ratings</span>
                          </div>
                        </div>
                        <span className="price">
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                9.35
                              </bdi>
                            </span>
                          </del>
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                7.25
                              </bdi>
                            </span>
                          </ins>
                        </span>
                        <div className="product-fade-block">
                          <div className="product-button-group cart-with-quantity">
                            <div className="quantity ajax-quantity">
                              <div className="quantity-button minus">
                                <i className="klbth-icon-minus"></i>
                              </div>
                              <input
                                type="text"
                                className="input-text qty text"
                                name="quantity"
                                step="1"
                                min=""
                                max=""
                                value="1"
                                title="Menge"
                                size="4"
                                inputmode="numeric"
                              />
                              <div className="quantity-button plus">
                                <i className="klbth-icon-plus"></i>
                              </div>
                            </div>
                            <a
                              href="#"
                              data-quantity="1"
                              className="
                                button-primary
                                xsmall
                                rounded
                                wide
                                button
                                product_type_simple
                                add_to_cart_button
                                ajax_add_to_cart
                              "
                              data-product_id="430"
                              data-product_sku="ZU49VOR"
                              aria-label="Add &ldquo;All Natural Italian-Style Chicken Meatballs&rdquo; to your cart"
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content-fade border-info"></div>
                    <div
                      className="
                        tinv-wraper
                        woocommerce
                        tinv-wishlist
                        tinvwl-after-add-to-cart tinvwl-loop-button-wrapper
                      "
                      data-product_id="430"
                    >
                      <div className="tinv-wishlist-clear"></div>
                      <a
                        role="button"
                        tabindex="0"
                        aria-label="Add to Wishlist"
                        className="
                          tinvwl_add_to_wishlist_button
                          tinvwl-icon-heart
                          tinvwl-position-after
                          tinvwl-loop
                        "
                        data-tinv-wl-list="[]"
                        data-tinv-wl-product="430"
                        data-tinv-wl-productvariation="0"
                        data-tinv-wl-productvariations="[0]"
                        data-tinv-wl-producttype="simple"
                        data-tinv-wl-action="add"
                      >
                        <span className="tinvwl_add_to_wishlist-text">
                          Add to Wishlist
                        </span>
                      </a>
                      <div className="tinv-wishlist-clear"></div>
                      <div className="tinvwl-tooltip">Add to Wishlist</div>
                    </div>
                    <button className="woosc-btn woosc-btn-430" data-id="430">
                      Compare
                    </button>
                  </div>
                  <div
                    className="
                      product
                      type-product
                      post-430
                      status-publish
                      first
                      instock
                      product_cat-meats-seafood
                      product_tag-chicken
                      product_tag-natural
                      product_tag-organic
                      has-post-thumbnail
                      sale
                      shipping-taxable
                      purchasable
                      product-type-simple
                    "
                  >
                    <div className="product-wrapper product-type-1">
                      <div className="thumbnail-wrapper">
                        <div className="product-badges">
                          <span className="badge style-1 onsale">23%</span>
                          <span className="badge style-1 recommend">
                            recommended
                          </span>
                        </div>
                        <a href="#">
                          <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                            alt="All Natural Italian-Style Chicken Meatballs"
                          />
                        </a>
                        <div className="product-buttons">
                          <a href="#" className="detail-bnt quick-view-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                            </svg>
                          </a>
                          <div
                            className="
                              tinv-wraper
                              woocommerce
                              tinv-wishlist
                              tinvwl-shortcode-add-to-cart
                            "
                            data-product_id="430"
                          >
                            <div className="tinv-wishlist-clear"></div>
                            <a
                              role="button"
                              tabindex="0"
                              aria-label="Add to Wishlist"
                              className="
                                tinvwl_add_to_wishlist_button
                                tinvwl-icon-heart
                                tinvwl-position-shortcode
                              "
                              data-tinv-wl-list="[]"
                              data-tinv-wl-product="430"
                              data-tinv-wl-productvariation="0"
                              data-tinv-wl-productvariations="[0]"
                              data-tinv-wl-producttype="simple"
                              data-tinv-wl-action="add"
                            >
                              <span className="tinvwl_add_to_wishlist-text">
                                Add to Wishlist
                              </span>
                            </a>
                            <div className="tinv-wishlist-clear"></div>
                            <div className="tinvwl-tooltip">
                              Add to Wishlist
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrapper">
                        <h3 className="product-title">
                          <a
                            href="#"
                            title="All Natural Italian-Style Chicken Meatballs"
                          >
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h3>
                        <div className="product-meta">
                          <div className="product-available in-stock">
                            In Stock
                          </div>
                        </div>
                        <div className="product-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                          >
                            <span style={{ width: "80%" }}>
                              Rated <strong className="rating">4.00</strong> out
                              of 5
                            </span>
                          </div>
                          <div className="count-rating">
                            1 <span className="rating-text">Ratings</span>
                          </div>
                        </div>
                        <span className="price">
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                9.35
                              </bdi>
                            </span>
                          </del>
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                7.25
                              </bdi>
                            </span>
                          </ins>
                        </span>
                        <div className="product-fade-block">
                          <div className="product-button-group cart-with-quantity">
                            <div className="quantity ajax-quantity">
                              <div className="quantity-button minus">
                                <i className="klbth-icon-minus"></i>
                              </div>
                              <input
                                type="text"
                                className="input-text qty text"
                                name="quantity"
                                step="1"
                                min=""
                                max=""
                                value="1"
                                title="Menge"
                                size="4"
                                inputmode="numeric"
                              />
                              <div className="quantity-button plus">
                                <i className="klbth-icon-plus"></i>
                              </div>
                            </div>
                            <a
                              href="#"
                              data-quantity="1"
                              className="
                                button-primary
                                xsmall
                                rounded
                                wide
                                button
                                product_type_simple
                                add_to_cart_button
                                ajax_add_to_cart
                              "
                              data-product_id="430"
                              data-product_sku="ZU49VOR"
                              aria-label="Add &ldquo;All Natural Italian-Style Chicken Meatballs&rdquo; to your cart"
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content-fade border-info"></div>
                    <div
                      className="
                        tinv-wraper
                        woocommerce
                        tinv-wishlist
                        tinvwl-after-add-to-cart tinvwl-loop-button-wrapper
                      "
                      data-product_id="430"
                    >
                      <div className="tinv-wishlist-clear"></div>
                      <a
                        role="button"
                        tabindex="0"
                        aria-label="Add to Wishlist"
                        className="
                          tinvwl_add_to_wishlist_button
                          tinvwl-icon-heart
                          tinvwl-position-after
                          tinvwl-loop
                        "
                        data-tinv-wl-list="[]"
                        data-tinv-wl-product="430"
                        data-tinv-wl-productvariation="0"
                        data-tinv-wl-productvariations="[0]"
                        data-tinv-wl-producttype="simple"
                        data-tinv-wl-action="add"
                      >
                        <span className="tinvwl_add_to_wishlist-text">
                          Add to Wishlist
                        </span>
                      </a>
                      <div className="tinv-wishlist-clear"></div>
                      <div className="tinvwl-tooltip">Add to Wishlist</div>
                    </div>
                    <button className="woosc-btn woosc-btn-430" data-id="430">
                      Compare
                    </button>
                  </div>
                  <div
                    className="
                      product
                      type-product
                      post-430
                      status-publish
                      first
                      instock
                      product_cat-meats-seafood
                      product_tag-chicken
                      product_tag-natural
                      product_tag-organic
                      has-post-thumbnail
                      sale
                      shipping-taxable
                      purchasable
                      product-type-simple
                    "
                  >
                    <div className="product-wrapper product-type-1">
                      <div className="thumbnail-wrapper">
                        <div className="product-badges">
                          <span className="badge style-1 onsale">23%</span>
                          <span className="badge style-1 recommend">
                            recommended
                          </span>
                        </div>
                        <a href="#">
                          <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                            alt="All Natural Italian-Style Chicken Meatballs"
                          />
                        </a>
                        <div className="product-buttons">
                          <a href="#" className="detail-bnt quick-view-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                            </svg>
                          </a>
                          <div
                            className="
                              tinv-wraper
                              woocommerce
                              tinv-wishlist
                              tinvwl-shortcode-add-to-cart
                            "
                            data-product_id="430"
                          >
                            <div className="tinv-wishlist-clear"></div>
                            <a
                              role="button"
                              tabindex="0"
                              aria-label="Add to Wishlist"
                              className="
                                tinvwl_add_to_wishlist_button
                                tinvwl-icon-heart
                                tinvwl-position-shortcode
                              "
                              data-tinv-wl-list="[]"
                              data-tinv-wl-product="430"
                              data-tinv-wl-productvariation="0"
                              data-tinv-wl-productvariations="[0]"
                              data-tinv-wl-producttype="simple"
                              data-tinv-wl-action="add"
                            >
                              <span className="tinvwl_add_to_wishlist-text">
                                Add to Wishlist
                              </span>
                            </a>
                            <div className="tinv-wishlist-clear"></div>
                            <div className="tinvwl-tooltip">
                              Add to Wishlist
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrapper">
                        <h3 className="product-title">
                          <a
                            href="#"
                            title="All Natural Italian-Style Chicken Meatballs"
                          >
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h3>
                        <div className="product-meta">
                          <div className="product-available in-stock">
                            In Stock
                          </div>
                        </div>
                        <div className="product-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                          >
                            <span style={{ width: "80%" }}>
                              Rated <strong className="rating">4.00</strong> out
                              of 5
                            </span>
                          </div>
                          <div className="count-rating">
                            1 <span className="rating-text">Ratings</span>
                          </div>
                        </div>
                        <span className="price">
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                9.35
                              </bdi>
                            </span>
                          </del>
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                7.25
                              </bdi>
                            </span>
                          </ins>
                        </span>
                        <div className="product-fade-block">
                          <div className="product-button-group cart-with-quantity">
                            <div className="quantity ajax-quantity">
                              <div className="quantity-button minus">
                                <i className="klbth-icon-minus"></i>
                              </div>
                              <input
                                type="text"
                                className="input-text qty text"
                                name="quantity"
                                step="1"
                                min=""
                                max=""
                                value="1"
                                title="Menge"
                                size="4"
                                inputmode="numeric"
                              />
                              <div className="quantity-button plus">
                                <i className="klbth-icon-plus"></i>
                              </div>
                            </div>
                            <a
                              href="#"
                              data-quantity="1"
                              className="
                                button-primary
                                xsmall
                                rounded
                                wide
                                button
                                product_type_simple
                                add_to_cart_button
                                ajax_add_to_cart
                              "
                              data-product_id="430"
                              data-product_sku="ZU49VOR"
                              aria-label="Add &ldquo;All Natural Italian-Style Chicken Meatballs&rdquo; to your cart"
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content-fade border-info"></div>
                    <div
                      className="
                        tinv-wraper
                        woocommerce
                        tinv-wishlist
                        tinvwl-after-add-to-cart tinvwl-loop-button-wrapper
                      "
                      data-product_id="430"
                    >
                      <div className="tinv-wishlist-clear"></div>
                      <a
                        role="button"
                        tabindex="0"
                        aria-label="Add to Wishlist"
                        className="
                          tinvwl_add_to_wishlist_button
                          tinvwl-icon-heart
                          tinvwl-position-after
                          tinvwl-loop
                        "
                        data-tinv-wl-list="[]"
                        data-tinv-wl-product="430"
                        data-tinv-wl-productvariation="0"
                        data-tinv-wl-productvariations="[0]"
                        data-tinv-wl-producttype="simple"
                        data-tinv-wl-action="add"
                      >
                        <span className="tinvwl_add_to_wishlist-text">
                          Add to Wishlist
                        </span>
                      </a>
                      <div className="tinv-wishlist-clear"></div>
                      <div className="tinvwl-tooltip">Add to Wishlist</div>
                    </div>
                    <button className="woosc-btn woosc-btn-430" data-id="430">
                      Compare
                    </button>
                  </div>
                  <div
                    className="
                      product
                      type-product
                      post-430
                      status-publish
                      first
                      instock
                      product_cat-meats-seafood
                      product_tag-chicken
                      product_tag-natural
                      product_tag-organic
                      has-post-thumbnail
                      sale
                      shipping-taxable
                      purchasable
                      product-type-simple
                    "
                  >
                    <div className="product-wrapper product-type-1">
                      <div className="thumbnail-wrapper">
                        <div className="product-badges">
                          <span className="badge style-1 onsale">23%</span>
                          <span className="badge style-1 recommend">
                            recommended
                          </span>
                        </div>
                        <a href="#">
                          <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                            alt="All Natural Italian-Style Chicken Meatballs"
                          />
                        </a>
                        <div className="product-buttons">
                          <a href="#" className="detail-bnt quick-view-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z" />
                            </svg>
                          </a>
                          <div
                            className="
                              tinv-wraper
                              woocommerce
                              tinv-wishlist
                              tinvwl-shortcode-add-to-cart
                            "
                            data-product_id="430"
                          >
                            <div className="tinv-wishlist-clear"></div>
                            <a
                              role="button"
                              tabindex="0"
                              aria-label="Add to Wishlist"
                              className="
                                tinvwl_add_to_wishlist_button
                                tinvwl-icon-heart
                                tinvwl-position-shortcode
                              "
                              data-tinv-wl-list="[]"
                              data-tinv-wl-product="430"
                              data-tinv-wl-productvariation="0"
                              data-tinv-wl-productvariations="[0]"
                              data-tinv-wl-producttype="simple"
                              data-tinv-wl-action="add"
                            >
                              <span className="tinvwl_add_to_wishlist-text">
                                Add to Wishlist
                              </span>
                            </a>
                            <div className="tinv-wishlist-clear"></div>
                            <div className="tinvwl-tooltip">
                              Add to Wishlist
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-wrapper">
                        <h3 className="product-title">
                          <a
                            href="#"
                            title="All Natural Italian-Style Chicken Meatballs"
                          >
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h3>
                        <div className="product-meta">
                          <div className="product-available in-stock">
                            In Stock
                          </div>
                        </div>
                        <div className="product-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 4.00 out of 5"
                          >
                            <span style={{ width: "80%" }}>
                              Rated <strong className="rating">4.00</strong> out
                              of 5
                            </span>
                          </div>
                          <div className="count-rating">
                            1 <span className="rating-text">Ratings</span>
                          </div>
                        </div>
                        <span className="price">
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                9.35
                              </bdi>
                            </span>
                          </del>
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  &#36;
                                </span>
                                7.25
                              </bdi>
                            </span>
                          </ins>
                        </span>
                        <div className="product-fade-block">
                          <div className="product-button-group cart-with-quantity">
                            <div className="quantity ajax-quantity">
                              <div className="quantity-button minus">
                                <i className="klbth-icon-minus"></i>
                              </div>
                              <input
                                type="text"
                                className="input-text qty text"
                                name="quantity"
                                step="1"
                                min=""
                                max=""
                                value="1"
                                title="Menge"
                                size="4"
                                inputmode="numeric"
                              />
                              <div className="quantity-button plus">
                                <i className="klbth-icon-plus"></i>
                              </div>
                            </div>
                            <a
                              href="#"
                              data-quantity="1"
                              className="
                                button-primary
                                xsmall
                                rounded
                                wide
                                button
                                product_type_simple
                                add_to_cart_button
                                ajax_add_to_cart
                              "
                              data-product_id="430"
                              data-product_sku="ZU49VOR"
                              aria-label="Add &ldquo;All Natural Italian-Style Chicken Meatballs&rdquo; to your cart"
                              rel="nofollow"
                            >
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content-fade border-info"></div>
                    <div
                      className="
                        tinv-wraper
                        woocommerce
                        tinv-wishlist
                        tinvwl-after-add-to-cart tinvwl-loop-button-wrapper
                      "
                      data-product_id="430"
                    >
                      <div className="tinv-wishlist-clear"></div>
                      <a
                        role="button"
                        tabindex="0"
                        aria-label="Add to Wishlist"
                        className="
                          tinvwl_add_to_wishlist_button
                          tinvwl-icon-heart
                          tinvwl-position-after
                          tinvwl-loop
                        "
                        data-tinv-wl-list="[]"
                        data-tinv-wl-product="430"
                        data-tinv-wl-productvariation="0"
                        data-tinv-wl-productvariations="[0]"
                        data-tinv-wl-producttype="simple"
                        data-tinv-wl-action="add"
                      >
                        <span className="tinvwl_add_to_wishlist-text">
                          Add to Wishlist
                        </span>
                      </a>
                      <div className="tinv-wishlist-clear"></div>
                      <div className="tinvwl-tooltip">Add to Wishlist</div>
                    </div>
                    <button className="woosc-btn woosc-btn-430" data-id="430">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="sidebar"
                className="col-12 col-md-3 col-lg-3 content-secondary site-sidebar"
              >
                <div className="site-scroll">
                  <div className="sidebar-inner">
                    <div className="sidebar-mobile-header">
                      <h3 className="entry-title">Filter Products</h3>

                      <div className="close-sidebar">
                        <i className="klbth-icon-x"></i>
                      </div>
                    </div>

                    <div className="widget woocommerce widget_price_filter">
                      <h4 className="widget-title">Filter by price</h4>
                      <form
                        method="get"
                        action="https://klbtheme.com/bacola/product-category/meats-seafood/"
                      >
                        <div className="price_slider_wrapper">
                          <div
                            className="price_slider"
                            style={{ display: "none" }}
                          ></div>
                          <div className="price_slider_amount" data-step="10">
                            <input
                              type="text"
                              id="min_price"
                              name="min_price"
                              value="0"
                              data-min="0"
                              placeholder="Min price"
                            />
                            <input
                              type="text"
                              id="max_price"
                              name="max_price"
                              value="50"
                              data-max="50"
                              placeholder="Max price"
                            />
                            <button type="submit" className="button">
                              Filter
                            </button>
                            <div
                              className="price_label"
                              style={{ display: "none" }}
                            >
                              Price: <span className="from"></span> &mdash;
                              <span className="to"></span>
                            </div>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="widget widget_product_status">
                      <h4 className="widget-title">Product Status</h4>
                      <div className="widget-body site-checkbox-lists">
                        <div className="site-scroll">
                          <ul>
                            <li>
                              <a href="#">
                                <input
                                  name="stockonsale"
                                  value="instock"
                                  id="instock"
                                  type="checkbox"
                                />
                                <label>
                                  <span></span>In Stock
                                </label>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <input
                                  name="stockonsale"
                                  value="onsale"
                                  id="onsale"
                                  type="checkbox"
                                />
                                <label>
                                  <span></span>On Sale
                                </label>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="
                        widget
                        woocommerce
                        widget_layered_nav
                        woocommerce-widget-layered-nav
                      "
                    >
                      <h4 className="widget-title">Brands</h4>
                      <ul className="woocommerce-widget-layered-nav-list">
                        <li
                          className="
                            woocommerce-widget-layered-nav-list__item
                            wc-layered-nav-term
                          "
                        >
                          <div className="type-button">
                            <span className="button-box"></span>
                            <a rel="nofollow" href="#">
                              Welch&#039;s
                            </a>
                            <span className="count">(1)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="widget widget_media_image">
                      <img
                        width="1280"
                        height="1750"
                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
                        className="image wp-image-1184 attachment-full size-full"
                        alt=""
                        loading="lazy"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
