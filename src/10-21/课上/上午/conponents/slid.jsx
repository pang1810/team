import React from "react";
//左侧导航
import list from "../../../10.14作业/clids/list";

export default props => {
    console.log(props);
    return (
        <ul style={{border: "1px solid red"}}>
            {props.nav.length &&
            props.nav.map(item => {
                return <li onClick={() => props.queryInfo(item.id)} key={item.id}>{item.name}</li>
            })
            }
        </ul>
    )
}