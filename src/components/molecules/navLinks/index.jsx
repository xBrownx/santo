import { memo } from 'react';
import { StyledUl, StyledLi } from './styles';
import { Link } from '../../atoms';

function NavLinks(props) {
    const linkList = props.linkList;

    function linkTo(pageRef) {
        pageRef.current.scrollIntoView();
    }
  
    return (
        <StyledUl>
          {linkList.map(link  => {
              return(
                  <StyledLi>
                      <Link 
                          key={link.id} 
                          onClick={() => linkTo(link.ref)}
                      >
                          {link.label}
                      </Link>
                  </StyledLi>
              );
          })}
        </StyledUl>
    );
}

export default memo(NavLinks);
