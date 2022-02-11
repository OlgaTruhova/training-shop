import React from "react";

import "./LatestFromBlog.css";

const LatestFromBlog = () => {
    return (
        <section className="container-latest-from-blog">
            <div className="latest-from-blog-title">
                <span className="title">LATEST FROM BLOG</span>
                <button>SEE ALL</button>
            </div>
            <div className="latest-from-blog-img">
                <div className="img-one">
                    <div className="latest-from-blog-text">
                        <span className="text">The Easiest Way to Break</span>
                        <span className="text1">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
                <div className="img-two">
                    <div className="latest-from-blog-text">
                        <span className="text">Wedding Season</span>
                        <span className="text1">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
                <div className="img-three">
                    <div className="latest-from-blog-text">
                        <span className="text">Recent Favorites On Repeat</span>
                        <span className="text1">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {LatestFromBlog}