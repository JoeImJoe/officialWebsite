import UserLayout from "../../layouts/userLayout"
import React, { memo } from "react"
const layout = memo(({ ...props }) => {
    return (
        <UserLayout>
            {props.children}
        </UserLayout>
    )
})
export default layout