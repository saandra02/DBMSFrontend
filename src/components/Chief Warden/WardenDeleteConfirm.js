import React, { Component } from 'react';
import ChiefWardenNavBar from './ChiefWardenNavBar.js';

class CWWardenDeleteConfirm extends Component {
  render() {
    return (
      <div>
          <ChiefWardenNavBar />
          <div className="List">
            <div className="ListHeader"> Delete Confirmation </div>
            <table id="guards" className='list-table'>
                <tr> Are you sure you want to remove Warden #{this.props.match.params.id}</tr>
            </table>
        </div>
      </div>
    );
  }
}

export default CWWardenDeleteConfirm;