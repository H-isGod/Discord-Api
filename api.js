/* Gets webpack exsports. */
let webpackExports = !webpackChunkdiscord_app.webpackExports ? webpackChunkdiscord_app.push([[Math.random()],{},(exports) => {
  webpackChunkdiscord_app.pop()
  webpackChunkdiscord_app.webpackExports = exports
  return exports
}]) : webpackChunkdiscord_app.webpackExports

function getModule(filter, first = true) {
/* Defines the module varible. */
  let modules = []
/* Function to get modules for props. */
  function byPropsAll(...props) {
/* Gets all modules with there props. */
    const norm = getModule(m => props.every((prop) => typeof m[prop] !== "undefined"), false)
    /* Defines the varible to give to main function. */
    let def = []
/* For every module that matches user input send it to the def varible. */
    for (const module of getModule(m => props.every((prop) => typeof m.default?.[prop] !== "undefined"), false)) 
      def.push(module.default)
/* Returns the modules it searched for. */
    return [...norm, ...def]
  }
  function byDisplayName(displayName) {
/* Searches throgh the modules and if the display name matches it will send it to the varible. */
    const norm = getModule(m => m.default?.displayName === displayName, false)
    const type = getModule(m => m.default?.type?.displayName === displayName, false)
    const rend = getModule(m => m.default?.type?.render?.displayName === displayName, false)
/* Sends it to main varible*/
    return [...norm, ...type, ...rend]
  }
/* If input is an array uses by props. */
  if (Array.isArray(filter)) {
    modules = byPropsAll(...filter)
  }
/* If its a string it gets by display name. */
  else if (typeof filter === "string") {
    modules = byDisplayName(filter)
  }
/* If its a function then it gets from a certian webpack exsport. */
  else if (typeof filter === "function") {
/* For every varible named ite in webpack wxsports if it exsists send to module. */
      for(let ite in webpackExports.c) {
      if(!Object.hasOwnProperty.call(webpackExports.c, ite)) return
      let ele = webpackExports.c[ite].exports
      if(!ele) continue
      if(filter(ele)) modules.push(ele)
    }
  }
    /* Sends module to user */
  if (first) return modules[0]
	/* If first then return the first user */
  return modules
}
let { getCurrentUser } = getModule(["getCurrentUser"]);/* Sets your current discord user information simular to the getuser function. */
let { getToken } = getModule(["getToken"]);/* Gets your discord token, used for logins. */
let getUser = getModule(['getCurrentUser']).getUser/* Gets a single user from their id */
let getUsers = getModule(['getCurrentUser']).getUsers/* Gets all users you have loaded, dont know the reason for this but its really fun to play with. */

const React = getModule(["createElement", "Component"])/* React to create elements. */
const { copy } = getModule(["copy", "paste"])/* Copy and paste module. */
const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))/* Sleep function
/*auto complete*/
function auto(arr, text) {
    /* If its a string only tests one at a time (slow but how it used to work). */
    if (Array.isArray(arr) !== true) {
        _auto(arr, text)
    }
/* Defines array. */
let arrr = [];
for (let l = 0; l < arr.length; l++) {
    /* If there is text it worked and sends it to the array to send to the user. */
    if (typeof _auto(arr[l], text) !== "undefined") arrr.push(_auto(arr[l], text))
}
/* Function to test if a strings matches up with the text sent. */
function _auto(txt, _text) {
    /* For every character tests if it matches and if it does finishes it. */
    for (let i = 0; i < txt.length; i++) {
        if (txt.substring(0, txt.length - i) === _text) {
            /*sends the user the answer*/
            return txt
        }
    }
}
/* Sends the answer to the user. */
return arrr
}
function getByUsername(username, first){
    /* Defines varibles that the function needs. */
	let __com=[];
	let _com=[];
	let com=[];
    /* Lines up the users to be searches. */
for (let i = 0; i < Object.keys(getUsers()).length; i++) {
	/* Username and id so we can search. */
	com.push(getUser(Object.keys(getUsers())[i]).username+'#'+getUser(Object.keys(getUsers())[i]).discriminator+'#'+getUser(Object.keys(getUsers())[i]).id);
}
/* Searches the users and sends the _com varible a json object if the user exsists. */
	for (let i = 0; i < auto(com,username).length; i++) {
		_com.push(getUser(auto(com,username)[i].split('#')[auto(com,username)[i].split('#').length-1]));
	}
    /* Sends answer to user. */
	/* If first returns the first user. */
	if (first) return _com[0]
	return _com
}
