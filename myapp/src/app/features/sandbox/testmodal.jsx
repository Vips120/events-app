import React from 'react';
import ModalWrapper from '../../common/modals/ModalWrapper';

const TestModal = ({data}) => {
 return(
     <ModalWrapper size="mini" header="test modal">
      <div>
          THE DATA IS : {data}
      </div>
     </ModalWrapper>
 )
};

export default TestModal;