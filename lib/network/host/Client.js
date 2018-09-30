import Connection from "../Connection";
import HostBase from "./HostBase";

import platform from "platform";

class Client extends HostBase {
	async initClient() {
		await this.initHost();
	}

	connectToShard(token, username) {
		return new Promise(resolve => {
			const connection = new Connection(this, token, true);
			connection.on('_established', () => {
				this.parentShard = connection;
				this.emit('connectedShard');

				const pk = new PacketDeviceID();
				pk.deviceName = `${platform.manufacturer} ${platform.product}`;
				pk.playerName = username;

				this.parentShard.packet(pk);
				resolve();
			});

			connection.connectToRemote();
		});
	}
}

export default Client;
