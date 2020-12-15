/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { createPlugin } from "../../MapStore2/web/client/utils/PluginsUtils";
import HTML from '../../MapStore2/web/client/components/I18N/HTML';
import { backgroundImgs } from "./header/backgrounds";
import './header/header.less';
import {Glyphicon, Button, Tooltip, OverlayTrigger} from 'react-bootstrap';

const backgroundStyle = {
    backgroundImage: `url(${backgroundImgs[Math.floor(backgroundImgs.length * Math.random())]})`
};

const footerID = 'viewer-footer';

const scrollToContent = (id, scrollOptions) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView(scrollOptions);
    }
};

const Header = (props) => (
    <div id="header-id" style={{...backgroundStyle, ...props.style}} className="mapstore-header">
        <h1>
            <HTML msgId="home.title"/>
        </h1>
        <OverlayTrigger placement="left" overlay={<Tooltip id="scrollDown-button-tooltip"><HTML msgId="home.scrollDown"/></Tooltip>}>
            <Button bsStyle="primary" className="scroll-down-button" onClick={() => scrollToContent(footerID, {block: 'start'})}><Glyphicon glyph="arrow-down"/></Button>
        </OverlayTrigger>
    </div>
);

Header.propTypes = {
    style: PropTypes.object
};

export default createPlugin('Header', {
    component: Header
});
