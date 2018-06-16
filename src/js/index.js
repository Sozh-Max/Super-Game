"use strict";

import $ from 'jquery';
import _ from 'lodash';
import jqueryUI from './jquery-ui.min.js';
import eventPages from './eventPages/eventPages.js';
import games from './gameModule/startGame.js';
import global from './config.js';

if(!localStorage.getItem('superGame')){
	let superGame = {
		result: [],
	};
	let objJSON = JSON.stringify(superGame);
	localStorage.setItem('superGame', objJSON);
}

