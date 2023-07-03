import React from 'react';

const Logo = () => {
    return (
       <div className="logo">
        {/*Les images importées depuis la balise IMG sont accessibles dans "public", c'est-à-dire que lorsque qu'on appelle une balise img on est automatiquement dans "public", pas besoin de faire ../../public*/}
        <img src="./logo192.png" alt="logo react" />
        <h3>React World</h3>
       </div>
    );
};

export default Logo;