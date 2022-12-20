import React from "react";

function Sidebar() {
    return (
        <div>
            <h3>Furniture</h3>
            <div>
                <span>All</span>
                <span>Owner</span>
                <span>Dealers</span>
            </div>
            <ul>
                <li>
                    <input type={'checkbox'}></input>
                    <span>Search titles only</span>
                </li>
                <li>
                    <input type={'checkbox'}></input>
                    <span>Search titles only</span>
                </li>               
                 <li>
                    <input type={'checkbox'}></input>
                    <span>Search titles only</span>
                </li>
                <li>
                    <input type={'checkbox'}></input>
                    <span>Search titles only</span>
                </li>
                <li>
                    <input type={'checkbox'}></input>
                    <span>Search titles only</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar