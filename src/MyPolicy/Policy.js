import React from 'react';
import MyPolicies from './MyPolicies';
import ViewPolicy from './ViewPolicy';
import { Box } from '@mui/system';
import { Link } from '@mui/material';
export default function Policy() {
    const [viewPolicy, setViewPolicy] = React.useState("true");

    const handleViewPolicy = () =>{
        setViewPolicy(!viewPolicy);
    }
    return (
     <div>
         {viewPolicy ? <div><Box><Link>Test</Link></Box><ViewPolicy/>
             </div> : <MyPolicies/>}
     </div>
    )
}
