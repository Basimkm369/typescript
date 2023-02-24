
import { lists } from './Lists'
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';






const ViewDetails = () => {

    const {intex}=useParams()
  return (
    <div>

      {intex}

        

    </div>
  )
}

export default ViewDetails