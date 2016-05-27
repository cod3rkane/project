/**
 * Created by jkane on 5/21/16.
 */

define([
  'react',
  './PortalItem'
], function (React, PortalItem) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-main-portal_--_">
          <div className="ui three cards">
            <PortalItem />
            <PortalItem />
            <PortalItem />
            <PortalItem />
            <PortalItem />
            <PortalItem />
          </div>
        </div>
      )
    }
  })
});