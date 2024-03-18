import React from "react"
import Recomend_post from "./post";

const Recomend = () => {
    return (
        <div className="recomend_block">
            <div className="recomend_headers">
                Рекомендации
            </div>
            <Recomend_post />
            <Recomend_post />
            <a href="/delacc">удалить аккаунт</a>
        </div>
    )

};


export default Recomend;