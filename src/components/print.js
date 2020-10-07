import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';

class Print extends React.Component {
    render() {
      return (
        <table>
          <thead>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
   
  const Example = () => {
    // const componentRef = useRef();
      return (
        <div>
          <ReactToPrint
             trigger={() => <button>Print this out!</button>}
            //  content={() => componentRef.current}
          />
           {/* <Print ref={componentRef} /> */}
        </div>
      );
    }

export default Print;
