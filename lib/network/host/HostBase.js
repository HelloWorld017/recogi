import EventEmitter from "events";

import io from "socket.io-client";

class HostBase extends EventEmitter {
	constructor(server) {
		super();

		this.socket = io(server);
	}

	initHost() {
		return new Promise((resolve, reject) => {
			this.socket.once('registerPeer', peerInfo => {
				this.peerInfo = peerInfo;

				resolve();
			});

			this.socket.emit('registerPeer');
		});
	}

	checkExists(remoteToken) {
		return new Promise(resolve => {
			this.socket.once('existsPeer', payload => {
				resolve(payload.exists);
			});

			this.socket.emit('existsPeer', remoteToken);
		});
	}
}

export default HostBase;
