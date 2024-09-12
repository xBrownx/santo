import { memo } from 'react';
import { Link } from '../../atoms';

function NavLinks(props) {
    const linkList = props.linkList;

    function linkTo(pageRef) {
        pageRef.current.scrollIntoView();
    }
  
    return (
        <>
          {linkList.map(link () => {
              return(
                  <li>
                      <Link 
                          key={link.id} 
                          onClick={() => linkTo(link.ref)}
                      >
                          {link.label}
                      </Link>
                  </li>
              );
          })}
        </>
    );
}

export default memo(NavLinks);
