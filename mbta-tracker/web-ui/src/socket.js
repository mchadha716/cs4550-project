import {Socket} from "phoenix";

let socket = new Socket("/socket", {params: {token: ""}});
socket.connect();

let channel = socket.channel("session:lobby", {});

let state = {
	position: new Map()
}

let callback = null;

function state_update(st) {
	newState = st;
	if (callback) {
		callback(newState);
	}
}

export function ch_join(cb) {
	callback = cb;
	callback(state);
}

export function ch_push(newLocation) {
	channel.push("newLocation", newLocation)
				 .receive("ok", state_update)
				 .receive("error", resp => {
				 		console.log("Unable to push: ", resp)
				 });
}

channel.join()
			 .receive("ok", state_update)
			 .receive("error", resp => {
			 		console.log("Unable to join: ", resp)
			 });