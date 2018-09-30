import PacketAcceleration from "./PacketAcceleration";
import PacketDeviceID from "./PacketDeviceID";
import PacketOrientation from "./PacketOrientation";
import PacketReady from "./PacketReady";

class PacketManager {
	constructor() {
		this.packets = {};

		this.registerPacket(PacketAcceleration);
		this.registerPacket(PacketDeviceID);
		this.registerPacket(PacketOrientation);
		this.registerPacket(PacketReady);
	}

	registerPacket(packetClass) {
		this.packets[packetClass.NETWORK_ID] = packetClass;
	}
}

export default PacketManager;
