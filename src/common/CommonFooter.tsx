import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {StyledFooter} from "./CommonFooter.ts";

export function CommonFooter() {
    return (
        <StyledFooter>
            <div className="container">
                <div className="footer-main">

                    {/* Brand & Newsletter */}
                    <div className="brand-section">
                        <span className="logo">EdA</span>
                        <p className="tagline">Get started now try our product</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Enter your email here" />
                            <button className="submit-btn">
                                <ArrowRightOutlined />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="links-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="links-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/help">Help center</a></li>
                            <li><a href="/faqs">FAQs</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/report">Report a Problem</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© 2026 EdA. All rights reserved.</p>
                </div>
            </div>
        </StyledFooter>
    );
}