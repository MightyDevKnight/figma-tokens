import React from 'react';

type Props = React.SVGAttributes<SVGSVGElement>;

function IconUndo(props: Props) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.96996 10.1598L9.76285 14.9527L8.34864 16.3669L1.16724 9.18548L8.32295 1.47932L9.78854 2.84023L4.84896 8.15978H12.0557C19.2354 8.15978 25.0557 13.9801 25.0557 21.1598V24.1598H23.0557V21.1598C23.0557 15.0846 18.1309 10.1598 12.0557 10.1598H4.96996Z" />
    </svg>
  );
}

export default IconUndo;
