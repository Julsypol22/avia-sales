import AppUi from "../ui/AppUi";
import React from 'react'

const  AppContainer = () => {

  const [filters, setFilter] = React.useState<Record<string, boolean>>({
    all: false,
    noTransfer: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  });
  const handleChange = (target:string, checked:boolean) => {
      if(target == 'all'){
          setFilter({
              all: checked,
              noTransfer: checked,
              oneTransfer: checked,
              twoTransfers: checked,
              threeTransfers: checked,
          });
          
      }else{
        if(!checked){
          setFilter({...filters, all:false, [target]: checked});

        }else{

          setFilter({...filters, [target]: checked});
        }
      }
  };

  return (
     <AppUi filters={filters} onChangeFilter={handleChange}/>
  );
}

export default AppContainer;