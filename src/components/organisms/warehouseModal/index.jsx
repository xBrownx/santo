import { memo } from 'react';
import { Container } from './styles';

function WarehouseModal(props) {
    const { warehouse, groundFloor, firstFloor, secondFloor, total, link } = props;
    
    function linkTo(link) {

    }
  
    return (
        <Container>
            <>
                <>Warehouse {warehouse}</>
                <>Ground Floor: </>
                <>First Floor:</>
                { secondFloor && <>Second Floor:</> }
                <>Total Area:</>
                <>{groundFloor}</>
                <>{firstFloor}</>
                <>{secondFloor && <>{secondFloor}</>}</>
                <>{total}</>
            </>
            <button onClick={() => linkTo(link)}>FLOOR PLAN</button>
        </Container>
    );
}

export default memo(WarehouseModal);
