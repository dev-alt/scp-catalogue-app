import React from 'react';
import { useTheme } from '@mui/material/styles';


function Body()
{
    // eslint-disable-next-line
    const theme = useTheme();
    return(
        <div className="body">
            <h1>React Body</h1>
        </div>
        
    )

}
export default Body;