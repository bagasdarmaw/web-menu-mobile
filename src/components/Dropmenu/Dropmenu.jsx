import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dropmenu = ({ 
    categorys, 
    onCategoryFilter}) => {
  const [filters, Setfilters] = useState({
      category: '',
  });

  const handleChange =  (event) => {
    const {value} = event.target;
    
    Setfilters(value);
    onCategoryFilter(value);
  };

  return (
    <div className="menu__dropdown">
      <div className="row justify-content-center">
        <div className="app__center">
          <label>
            <select
              id="category"
              onChange={handleChange}
            >
              <option value="all">Semua Menu</option>
              {categorys.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};
// {/* <div className="menu__dropdown">
//         <div className="row">
//           <div className="col-md-4">
//             <Select
//             defaultValue={items.Menu}
//             onChange={er=>console.log(er)}
//             // onInputChange={handleInputChange}
//             options={menuItem}
//             />
//           </div>
//         </div>
//       </div> */}

export default Dropmenu;
