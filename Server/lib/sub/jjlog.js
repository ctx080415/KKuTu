/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// 모듈 호출

var colors = require('colors');


function callLog(text){
	var date = new Date();
	var o = {
		year: 1900 + date.getYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}, i;
	
	for(i in o){
		if(o[i] < 10) o[i] = "0"+o[i];
		else o[i] = o[i].toString();
	}
	console.log("["+o.year+"-"+o.month+"-"+o.date+" "+o.hour+":"+o.minute+":"+o.second+"] "+text);
	const XMLHttpRequest = require('xhr2');
	const request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/1224669665507283006/tU3ycPZVX5Ax7jYNm-xL04aIpVfLGT4szbAEx8Kq6uzM9YJr-sj5_sOsMu9dIXmVkHr-");

	request.setRequestHeader('Content-type', 'application/json');

	const params = {
	  username: "My Webhook Name",
	  avatar_url: "",
	  content: "["+o.year+"-"+o.month+"-"+o.date+" "+o.hour+":"+o.minute+":"+o.second+"] "+text
	}

	request.send(JSON.stringify(params));
	
}

exports.log = function(text){
	callLog(text);
};
exports.info = function(text){
	callLog(text.cyan);
};

exports.success = function(text){
	callLog(text.green);
};
exports.alert = function(text){
	callLog(text.yellow);
};
exports.warn = function(text){
	callLog(text.black.bgYellow);
};
exports.error = function(text){
	callLog(text.bgRed);
};