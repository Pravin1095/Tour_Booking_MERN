import React from 'react'
import Card from '../common/components/Card'

const AdminDashboard=()=>{

    

    const adminDashboardCards = [{
        title : "Add Tour Package",
        description: "Add tour packages for users to view",
        queryName : 'addPackage'
    },
{
title : "Manage tour packages",
description : "Edit or delete tour packages",
queryName : "managePackage"
},
{
    title: "View user bookings",
    description  : "View the packages booked by the users",
    queryName : "viewPackage"
}
]

return (
    <>
{adminDashboardCards.map((data, index)=>{
   return  <Card key= {index} data={data} />
})
}
    </>
)
}

export default AdminDashboard