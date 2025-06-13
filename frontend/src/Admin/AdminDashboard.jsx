import React from 'react'
import Card from '../common/components/Card'

const AdminDashboard=()=>{
    const adminDashboardCards = [{
        title : "Add Tour Package",
        description: "Add tour packages for users to view"
    },
{
title : "Manage tour packages",
description : "Edit or delete tour packages"
},
{
    title: "View user bookings",
    description  : "View the packages booked by the users"
}
]
return (
    <>
{adminDashboardCards.map((data, index)=>{
   return  <Card key= {index} title={data.title} description={data.description} />
})
}
    </>
)
}

export default AdminDashboard