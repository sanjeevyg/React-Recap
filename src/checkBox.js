import React from "react";
import { useReducer } from "react";


export function CheckBox() {
const [checked, toggle] = useReducer(checked => !checked, false)


return (
    <>
        <label htmlFor="checkbox">{checked ? "checked" : "not-checked"}</label>
        <input
            id="checkbox"
            value={checked}
            type="checkbox"
            onChange={toggle}
        />
    </>
)


}