'use strict'

import $ from 'jquery';
import _ from 'lodash';
import jqueryUI from './jquery-ui.min.js';
import eventPages from './eventPages/eventPages.js';
import games from './gameModule/startGame.js';
import global from './config.js';
import './../styles/index.scss';

if(!localStorage.getItem('superGame')){
	let superGame = {
		result: [],
	};
	let objJSON = JSON.stringify(superGame);
	localStorage.setItem('superGame', objJSON);
}



import './../img/bee.gif';
import './../img/fire.gif';
import './../img/mouse.gif';
import './../img/circle.gif';
import './../img/select_bg.jpg';
import './../img/gazon.jpg';

import './../img/settings.svg';
import './../img/ico_life.png';
import './../img/ico_chaos.png';
import './../img/ico_shadow.png';

import './../img/monsters/head_life1.png';
import './../img/monsters/head_life2.png';
import './../img/monsters/head_chaos1.png';
import './../img/monsters/head_chaos2.png';
import './../img/monsters/head_shadow1.png';
import './../img/monsters/head_shadow2.png';
import './../img/monsters/body_life1.png';
import './../img/monsters/body_life2.png';
import './../img/monsters/body_chaos1.png';
import './../img/monsters/body_chaos2.png';
import './../img/monsters/body_shadow1.png';
import './../img/monsters/body_shadow2.png';
import './../img/monsters/foot_life1.png';
import './../img/monsters/foot_life2.png';
import './../img/monsters/foot_chaos1.png';
import './../img/monsters/foot_chaos2.png';
import './../img/monsters/foot_shadow1.png';
import './../img/monsters/foot_shadow2.png';

import './../img/js_task/js1.jpg';
import './../img/js_task/js2.jpg';
import './../img/js_task/js3.jpg';
import './../img/js_task/js4.jpg';
import './../img/js_task/js5.jpg';
import './../img/js_task/js6.jpg';
import './../img/js_task/js7.jpg';
import './../img/js_task/js8.jpg';
import './../img/js_task/js9.jpg';
import './../img/js_task/js10.jpg';
import './../img/js_task/js11.jpg';

import './../img/life_pers.png';
import './../img/chaos_pers.png';
import './../img/shadow_pers.png';